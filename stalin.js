const fs = require('fs');
const transpiler = require('./transpiler');

let path = process.argv[2];

if (path && fs.existsSync(path)) {
    let stats = fs.statSync(path);
    if(stats.size > 300*1024*1024){ //limit file size to 300mb
        console.log('File max size exceeded (maximum 300mb)');
        return;
    }
    else if (stats.isFile() && /.stalin?/.test(path)) {
        let data = fs.readFileSync(path, 'utf-8');
        transpiler(data);
        return;
    }
}
console.log('Please specify a valid StalinLang source file');