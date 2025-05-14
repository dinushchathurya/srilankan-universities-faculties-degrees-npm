/**
 * @file Degrees module
 * Provides functions for accessing degree data
 */
import { Degree } from './types';
import {
  getAllDegrees,
  getDegreesByFaculty
} from './services';

export {
  Degree,
  getAllDegrees,
  getDegreesByFaculty
};

// Export default for CommonJS compatibility
export default {
  getAllDegrees,
  getDegreesByFaculty
};