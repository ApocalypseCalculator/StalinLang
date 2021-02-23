const fs = require('fs');
const transpiler = require('./transpiler');

let path = process.argv[2];

if (path && fs.existsSync(path)) {
    let stats = fs.statSync(path);
    if(stats.size > 10*1024*1024){ //limit file size to 10mb
        console.log('File max size exceeded (maximum 10mb)');
        return;
    }
    else if (stats.isFile() && /.stalin?/.test(path)) {
        let data = fs.readFileSync(path, 'utf-8');
        let transpiled = transpiler(data);
        //write transpiled to file cache and then require it
        return;
    }
}
console.log('Please specify a valid StalinLang source file');