const fs = require('fs');
const matcher = require('./matcher');

let matches = new Map();
matcher.matches.forEach(e => {
    matches.set(e.st, e.js);
})

module.exports = (data) => {
    let program = ``;
    data.split(/\r?\n/).forEach(function (line) {
        let content = line.trim();
        if (content !== '') {
            //do stuff kekx
        }
    })
    return program;
}