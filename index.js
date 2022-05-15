const universities = require("./data/universities");
const faculties = require("./data/faculties");

/* get universities */
module.exports.universities = () =>
  universities.map((i) => {
    return i;
  });

/* get faculties of a selected university */
module.exports.faculties = (university) =>
  faculties.map((i) => {
    return Object.keys(i[university]);
  });

/* get degrees of a selected faulty of respective university */
module.exports.degrees = (university, faculty) =>
  faculties.map((i) => {
    return i[university][faculty];
  });
