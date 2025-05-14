import { Faculty } from '../types';
import { facultiesData } from '../data';
import { getUniversity } from './university.service';

/**
 * Get all faculties in Sri Lankan universities
 * @returns Array of all faculties
 */
export function getAllFaculties(): Faculty[] {
  return facultiesData;
}

/**
 * Get faculties in a specific university
 * @param universityNameOrId University name or ID (case-insensitive)
 * @returns Array of faculties or empty array if university not found
 */
export function getFacultiesByUniversity(universityNameOrId: string): Faculty[] {
  if (!universityNameOrId) return [];
  
  const university = getUniversity(universityNameOrId);
  if (!university) return [];
  
  return facultiesData.filter(faculty => faculty.universityId === university.id);
}

/**
 * Get faculty by ID or name within a specific university
 * @param universityNameOrId University name or ID (case-insensitive)
 * @param facultyNameOrId Faculty name or ID (case-insensitive)
 * @returns Faculty object or undefined if not found
 */
export function getFaculty(universityNameOrId: string, facultyNameOrId: string): Faculty | undefined {
  if (!universityNameOrId || !facultyNameOrId) return undefined;
  
  const university = getUniversity(universityNameOrId);
  if (!university) return undefined;
  
  const normalizedInput = facultyNameOrId.toLowerCase();
  return facultiesData.find(
    (faculty) => 
      (faculty.universityId === university.id) && 
      (faculty.id === normalizedInput || faculty.name.toLowerCase() === normalizedInput)
  );
}

/**
 * Validate if faculty exists in a university
 * @param universityNameOrId University name or ID
 * @param facultyNameOrId Faculty name or ID
 * @returns True if faculty exists in the university, false otherwise
 */
export function validateFaculty(universityNameOrId: string, facultyNameOrId: string): boolean {
  return !!getFaculty(universityNameOrId, facultyNameOrId);
}

/**
 * Get faculty names in a university (for backward compatibility)
 * @param universityName University name
 * @returns Array of faculty names
 */
export function getFacultyNames(universityName: string): string[] {
  const faculties = getFacultiesByUniversity(universityName);
  return faculties.map(faculty => faculty.name);
}