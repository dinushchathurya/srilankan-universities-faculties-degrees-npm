import { University } from '../types';
import { universitiesData } from '../data';

/**
 * Get all universities in Sri Lanka
 * @returns Array of all universities with full data
 */
export function getAllUniversities(): University[] {
  return universitiesData;
}

/**
 * Get university by name or ID (case-insensitive)
 * @param nameOrId University name or ID
 * @returns University object or undefined if not found
 */
export function getUniversity(nameOrId: string): University | undefined {
  if (!nameOrId) return undefined;
  
  const normalizedInput = nameOrId.toLowerCase();
  return universitiesData.find(
    (university) => 
      university.id === normalizedInput || 
      university.name.toLowerCase() === normalizedInput
  );
}

/**
 * Validate if university exists
 * @param nameOrId University name or ID
 * @returns True if university exists, false otherwise
 */
export function validateUniversity(nameOrId: string): boolean {
  return !!getUniversity(nameOrId);
}

/**
 * Get all university names (for backward compatibility)
 * @returns Array of university names
 */
export function getUniversityNames(): string[] {
  return universitiesData.map(university => university.name);
}