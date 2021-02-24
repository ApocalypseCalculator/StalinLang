const readline = require('readline');
const transpiler = require('./transpiler');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

prompt();

function prompt(){
    rl.question('>> ', (ans) => {
        try{
            console.log(eval(transpiler(ans)));
        }
        catch(err){
            console.log('\x1b[31mError occurred!\x1b[0m');
        }
        prompt();
    })
}