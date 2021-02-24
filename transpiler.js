const matcher = require('./matcher');

module.exports = (data) => {
    let prgrm = data;
    if (!prgrm || prgrm === '') {
        return '';
    }
    else {
        matcher.matches.forEach(m => {
            prgrm = prgrm.replace(m.st, m.js);
        })
        return prgrm;
    }
}