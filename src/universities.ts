/**
 * @file Universities module
 * Provides functions for accessing university data
 */
import { University } from './types';
import {
  getAllUniversities,
  getUniversity,
  validateUniversity
} from './services';

export {
  University,
  getAllUniversities,
  getUniversity,
  validateUniversity
};

// Export default for CommonJS compatibility
export default {
  getAllUniversities,
  getUniversity,
  validateUniversity
};