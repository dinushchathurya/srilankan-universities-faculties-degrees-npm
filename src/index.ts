// Export types
export { University, Faculty, Degree } from './types';

// Export modern API (new functions)
export {
  // Universities
  getAllUniversities,
  getUniversity,
  validateUniversity,
  
  // Faculties
  getAllFaculties,
  getFacultiesByUniversity,
  getFaculty,
  validateFaculty,
  
  // Degrees
  getAllDegrees,
  getDegreesByFaculty
} from './services';

// Export legacy API (v1.x compatibility)
export {
  getUniversities,
  getFaculties,
  getDegrees
} from './compatibility';
export { legacyData as universities_data } from './data';

// Default export for CommonJS compatibility
import { legacyAPI } from './compatibility';
export default legacyAPI;