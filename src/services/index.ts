/**
 * Re-export all services for easy import
 */
export {
  getAllUniversities,
  getUniversity,
  validateUniversity,
  getUniversityNames
} from './university.service';

export {
  getAllFaculties,
  getFacultiesByUniversity,
  getFaculty,
  validateFaculty,
  getFacultyNames
} from './faculty.service';

export {
  getAllDegrees,
  getDegreesByFaculty,
  getDegreeNames
} from './degree.service';