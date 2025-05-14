import { legacyData } from '../../data'
import { getUniversityNames, getFacultyNames, getDegreeNames } from '../services';

/**
 * Legacy API implementation for backward compatibility with v1.x
 */

/**
 * Get all universities (v1.x API method)
 * Returns an array of university names
 * @returns Array of university names
 */
export function getUniversities(): string[] {
  return getUniversityNames();
}

/**
 * Get faculties in a university (v1.x API method)
 * Returns an array of faculty names
 * @param university University name
 * @returns Array of faculty names
 */
export function getFaculties(university: string): string[] {
  if (!university || typeof university !== 'string') {
    return [];
  }
  
  return Object.keys(legacyData[university] || {});
}

/**
 * Get degrees in a faculty (v1.x API method)
 * Returns an array of degree names
 * @param university University name
 * @param faculty Faculty name
 * @returns Array of degree names
 */
export function getDegrees(university: string, faculty: string): string[] {
  if (!university || !faculty || typeof university !== 'string' || typeof faculty !== 'string') {
    return [];
  }
  
  return legacyData[university]?.[faculty] || [];
}

/**
 * Default export for CommonJS compatibility
 */
export const legacyAPI = {
  getUniversities,
  getFaculties,
  getDegrees,
  universities: legacyData
};