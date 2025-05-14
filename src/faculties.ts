/**
 * @file Faculties module
 * Provides functions for accessing faculty data
 */
import { Faculty } from './types';
import {
  getAllFaculties,
  getFacultiesByUniversity,
  getFaculty,
  validateFaculty
} from './services';

export {
  Faculty,
  getAllFaculties,
  getFacultiesByUniversity,
  getFaculty,
  validateFaculty
};

// Export default for CommonJS compatibility
export default {
  getAllFaculties,
  getFacultiesByUniversity,
  getFaculty,
  validateFaculty
};