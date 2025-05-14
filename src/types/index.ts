/**
 * Re-export all types for easy import
 */
export { University } from './university';
export { Faculty } from './faculty';
export { Degree } from './degree';

/**
 * Legacy data structure type for compatibility
 */
export interface LegacyUniversityData {
  [university: string]: {
    [faculty: string]: string[];
  };
}