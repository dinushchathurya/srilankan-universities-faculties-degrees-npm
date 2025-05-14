/**
 * Sri Lankan Universities, Faculties, and Degrees
 * A TypeScript package providing data for Sri Lankan higher education institutions
 * 
 * @author Dinush Chathurya
 * @license MIT
 */

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
  getDegrees,
  legacyAPI as universities_data
} from './compatibility';

// Default export for CommonJS compatibility
import { legacyAPI } from './compatibility';
export default legacyAPI;