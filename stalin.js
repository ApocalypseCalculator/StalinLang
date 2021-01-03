const fs = require('fs');
const transpiler = require('./transpiler');

let path = process.argv[2];

if (path && fs.existsSync(path)) {
    let stats = fs.statSync(path);
    if (stats.isFile() && /.stalin?/.test(path)) {
        let data = fs.readFileSync(path);
        transpiler.transpile(data.toString());
        process.exit(0);
    }
}
console.log('Please specify a valid StalinLang source file');
process.exit(0);