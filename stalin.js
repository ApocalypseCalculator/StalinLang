const fs = require('fs');
const readline = require('readline');
const transpiler = require('./transpiler');
const DEFAULT_OUT = "out_cache.js";

let path = process.argv[2];
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log('Compiling ...');

if (path && fs.existsSync(path)) {
    let stats = fs.statSync(path);
    if (stats.size > 10 * 1024 * 1024) { //limit file size to 10mb
        console.log('\x1b[33mFile max size exceeded (maximum 10mb), compilation aborted\x1b[0m');
        process.exit(1);
    }
    else if (stats.isFile() && /.stalin?/.test(path)) {
        let outfile = getName(0);

        let prgrm = ``;

        fs.readFile(path, (err, data) => {
            if (err) {
                console.log(`\x1b[33mError occurred, compilation aborted\x1b[0m`);
                process.exit(1);
            }
            else {
                data.toString().split(/\r?\n/).forEach(line => {
                    prgrm += transpiler(line) + '\n';
                });
                try {
                    fs.writeFileSync(outfile, prgrm);
                }
                catch (err) {
                    console.log(`\x1b[33mFile write failed, compilation aborted\x1b[0m`);
                    process.exit(1);
                }
                fs.writeFile(outfile, prgrm, (err) => {
                    if (err) {
                        console.log(`\x1b[33mFile write failed, compilation aborted\x1b[0m`);
                        process.exit(1);
                    }
                    else {
                        console.log('Compiled ... output will be shown below ...\n');
                    }
                })
                let timeout = 500 + 200 * Math.ceil(Math.pow(stats.size / (1024), 0.7));
                setTimeout(function () {
                    try {
                        require(`./${outfile}`);
                        setTimeout(function () {
                            console.log('\nFinished execution ... press any key to exit');
                            process.stdin.on("keypress", (str, key) => {
                                fs.unlink(outfile, () => {
                                    process.exit(0);
                                })
                            })
                        }, 2 * timeout);
                    }
                    catch (err) {
                        console.log(`\x1b[31mError!\n\n${err}\x1b[0m`);
                    }
                }, timeout);
            }
        })
    }
}
else {
    console.log('Please specify a valid StalinLang source file');
}

function getName(cur) {
    if (fs.existsSync(`${cur}_${DEFAULT_OUT}`)) {
        cur++;
        return getName(cur);
    }
    else {
        return (`${cur}_${DEFAULT_OUT}`);
    }
}