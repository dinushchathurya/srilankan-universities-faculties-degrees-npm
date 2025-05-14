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
import { getUniversityNames } from './services';
import { legacyData } from './data';

export function getUniversities(): string[] {
  return getUniversityNames();
}

export function getFaculties(university: string): string[] {
  if (!university || typeof university !== 'string') {
    return [];
  }
  
  return Object.keys(legacyData[university] || {});
}

export function getDegrees(university: string, faculty: string): string[] {
  if (!university || !faculty || typeof university !== 'string' || typeof faculty !== 'string') {
    return [];
  }
  
  return legacyData[university]?.[faculty] || [];
}

// Export the legacy data structure directly
export { legacyData as universities_data };

// Default export for CommonJS compatibility
const legacyAPI = {
  getUniversities,
  getFaculties,
  getDegrees,
  universities: legacyData
};

export default legacyAPI;