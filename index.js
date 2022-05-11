const universities = require('./data/universities');


module.exports.universities = () =>
    universities.map((i) => {
        return i;
    });