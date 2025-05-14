import { Degree } from '../types';
import { degreesData } from '../data';
import { getUniversity } from './university.service';
import { getFaculty } from './faculty.service';

/**
 * Get all degrees in Sri Lankan universities
 * @returns Array of all degrees
 */
export function getAllDegrees(): Degree[] {
  return degreesData;
}

/**
 * Get degrees offered by a specific faculty in a university
 * @param universityNameOrId University name or ID (case-insensitive)
 * @param facultyNameOrId Faculty name or ID (case-insensitive)
 * @returns Array of degrees or empty array if university or faculty not found
 */
export function getDegreesByFaculty(universityNameOrId: string, facultyNameOrId: string): Degree[] {
  if (!universityNameOrId || !facultyNameOrId) return [];
  
  const university = getUniversity(universityNameOrId);
  if (!university) return [];
  
  const faculty = getFaculty(universityNameOrId, facultyNameOrId);
  if (!faculty) return [];
  
  return degreesData.filter(
    degree => 
      degree.universityId === university.id && 
      degree.facultyId === faculty.id
  );
}

/**
 * Get degree names offered by a faculty (for backward compatibility)
 * @param universityName University name
 * @param facultyName Faculty name
 * @returns Array of degree names
 */
export function getDegreeNames(universityName: string, facultyName: string): string[] {
  const degrees = getDegreesByFaculty(universityName, facultyName);
  return degrees.map(degree => degree.name);
}