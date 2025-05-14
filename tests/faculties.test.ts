import { describe, it, expect } from 'vitest';
import { 
  getAllFaculties, 
  getFacultiesByUniversity, 
  getFaculty,
  validateFaculty,
  Faculty
} from '../src/faculties';

describe('Faculties Module', () => {
  describe('getAllFaculties()', () => {
    it('should return all faculties with full data', () => {
      const faculties = getAllFaculties();
      
      expect(Array.isArray(faculties)).toBe(true);
      expect(faculties.length).toBeGreaterThan(0);
      
      const facultyOfLaw = faculties.find(f => f.id === 'faculty-of-law');
      expect(facultyOfLaw).toBeDefined();
      expect(facultyOfLaw?.name).toBe('Faculty of Law');
      expect(facultyOfLaw?.universityId).toBe('university-of-colombo');
    });
  });
  
  describe('getFacultiesByUniversity()', () => {
    it('should return faculties for a valid university', () => {
      const colomboFaculties = getFacultiesByUniversity('University of Colombo');
      
      expect(Array.isArray(colomboFaculties)).toBe(true);
      expect(colomboFaculties.length).toBeGreaterThan(0);
      
      const facultyNames = colomboFaculties.map(f => f.name);
      expect(facultyNames).toContain('Faculty of Science');
      expect(facultyNames).toContain('Faculty of Law');
    });
    
    it('should be case-insensitive', () => {
      const faculties1 = getFacultiesByUniversity('University of Colombo');
      const faculties2 = getFacultiesByUniversity('university of colombo');
      const faculties3 = getFacultiesByUniversity('UNIVERSITY OF COLOMBO');
      
      expect(faculties1.length).toBeGreaterThan(0);
      expect(faculties2.length).toBeGreaterThan(0);
      expect(faculties3.length).toBeGreaterThan(0);
      expect(faculties1.length).toBe(faculties2.length);
      expect(faculties1.length).toBe(faculties3.length);
    });
    
    it('should work with university ID as input', () => {
      const faculties = getFacultiesByUniversity('university-of-colombo');
      expect(faculties.length).toBeGreaterThan(0);
    });
    
    it('should return empty array for invalid university', () => {
      const results = getFacultiesByUniversity('invalid-university');
      
      expect(Array.isArray(results)).toBe(true);
      expect(results.length).toBe(0);
    });
    
    it('should handle empty input gracefully', () => {
      const results = getFacultiesByUniversity('');
      
      expect(Array.isArray(results)).toBe(true);
      expect(results.length).toBe(0);
    });
  });
  
  describe('getFaculty()', () => {
    it('should find faculty by name in a university', () => {
      const faculty = getFaculty('University of Colombo', 'Faculty of Law');
      
      expect(faculty).toBeDefined();
      expect(faculty?.name).toBe('Faculty of Law');
      expect(faculty?.universityId).toBe('university-of-colombo');
    });
    
    it('should find faculty by ID in a university', () => {
      const faculty = getFaculty('University of Colombo', 'faculty-of-law');
      
      expect(faculty).toBeDefined();
      expect(faculty?.name).toBe('Faculty of Law');
    });
    
    it('should be case-insensitive', () => {
      const faculty1 = getFaculty('University of Colombo', 'Faculty of Law');
      const faculty2 = getFaculty('University of Colombo', 'faculty of law');
      const faculty3 = getFaculty('University of Colombo', 'FACULTY OF LAW');
      
      expect(faculty1).toBeDefined();
      expect(faculty2).toBeDefined();
      expect(faculty3).toBeDefined();
    });
    
    it('should return undefined for non-existent faculty', () => {
      const result = getFaculty('University of Colombo', 'Invalid Faculty');
      expect(result).toBeUndefined();
    });
    
    it('should return undefined for non-existent university', () => {
      const result = getFaculty('Invalid University', 'Faculty of Law');
      expect(result).toBeUndefined();
    });
    
    it('should handle empty input gracefully', () => {
      const result1 = getFaculty('', 'Faculty of Law');
      expect(result1).toBeUndefined();
      
      const result2 = getFaculty('University of Colombo', '');
      expect(result2).toBeUndefined();
    });
  });
  
  describe('validateFaculty()', () => {
    it('should return true for valid faculties', () => {
      expect(validateFaculty('University of Colombo', 'Faculty of Law')).toBe(true);
      expect(validateFaculty('university-of-colombo', 'faculty-of-law')).toBe(true);
    });
    
    it('should return false for invalid faculties', () => {
      expect(validateFaculty('University of Colombo', 'Invalid Faculty')).toBe(false);
      expect(validateFaculty('Invalid University', 'Faculty of Law')).toBe(false);
      expect(validateFaculty('', '')).toBe(false);
    });
  });
  
  describe('Type verification', () => {
    it('should have correct types', () => {
      const faculties: Faculty[] = getAllFaculties();
      const facultiesByUniversity: Faculty[] = getFacultiesByUniversity('University of Colombo');
      const faculty: Faculty | undefined = getFaculty('University of Colombo', 'Faculty of Law');
      
      expect(Array.isArray(faculties)).toBe(true);
      expect(Array.isArray(facultiesByUniversity)).toBe(true);
      
      if (faculty) {
        expect(typeof faculty.id).toBe('string');
        expect(typeof faculty.name).toBe('string');
        expect(typeof faculty.universityId).toBe('string');
      }
    });
  });
});