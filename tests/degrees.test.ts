import { describe, it, expect } from 'vitest';
import { 
  getAllDegrees, 
  getDegreesByFaculty,
  Degree
} from '../src/degrees';

describe('Degrees Module', () => {
  describe('getAllDegrees()', () => {
    it('should return all degrees with full data', () => {
      const degrees = getAllDegrees();
      
      expect(Array.isArray(degrees)).toBe(true);
      expect(degrees.length).toBeGreaterThan(0);
      
      const llb = degrees.find(d => d.id === 'llb');
      expect(llb).toBeDefined();
      expect(llb?.name).toBe('Bachelor of Laws');
      expect(llb?.universityId).toBe('university-of-colombo');
      expect(llb?.facultyId).toBe('faculty-of-law');
    });
  });
  
  describe('getDegreesByFaculty()', () => {
    it('should return degrees for a valid faculty in a university', () => {
      const lawDegrees = getDegreesByFaculty('University of Colombo', 'Faculty of Law');
      
      expect(Array.isArray(lawDegrees)).toBe(true);
      expect(lawDegrees.length).toBeGreaterThan(0);
      
      const degreeNames = lawDegrees.map(d => d.name);
      expect(degreeNames).toContain('Bachelor of Laws');
    });
    
    it('should be case-insensitive', () => {
      const degrees1 = getDegreesByFaculty('University of Colombo', 'Faculty of Law');
      const degrees2 = getDegreesByFaculty('university of colombo', 'faculty of law');
      const degrees3 = getDegreesByFaculty('UNIVERSITY OF COLOMBO', 'FACULTY OF LAW');
      
      expect(degrees1.length).toBeGreaterThan(0);
      expect(degrees2.length).toBeGreaterThan(0);
      expect(degrees3.length).toBeGreaterThan(0);
      expect(degrees1.length).toBe(degrees2.length);
      expect(degrees1.length).toBe(degrees3.length);
    });
    
    it('should work with IDs as input', () => {
      const degrees = getDegreesByFaculty('university-of-colombo', 'faculty-of-law');
      expect(degrees.length).toBeGreaterThan(0);
    });
    
    it('should return empty array for invalid faculty', () => {
      const results = getDegreesByFaculty('University of Colombo', 'Invalid Faculty');
      
      expect(Array.isArray(results)).toBe(true);
      expect(results.length).toBe(0);
    });
    
    it('should return empty array for invalid university', () => {
      const results = getDegreesByFaculty('Invalid University', 'Faculty of Law');
      
      expect(Array.isArray(results)).toBe(true);
      expect(results.length).toBe(0);
    });
    
    it('should handle empty input gracefully', () => {
      const results1 = getDegreesByFaculty('', 'Faculty of Law');
      const results2 = getDegreesByFaculty('University of Colombo', '');
      const results3 = getDegreesByFaculty('', '');
      
      expect(Array.isArray(results1)).toBe(true);
      expect(Array.isArray(results2)).toBe(true);
      expect(Array.isArray(results3)).toBe(true);
      expect(results1.length).toBe(0);
      expect(results2.length).toBe(0);
      expect(results3.length).toBe(0);
    });
  });
  
  describe('Type verification', () => {
    it('should have correct types', () => {
      const degrees: Degree[] = getAllDegrees();
      const degreesByFaculty: Degree[] = getDegreesByFaculty('University of Colombo', 'Faculty of Law');
      
      expect(Array.isArray(degrees)).toBe(true);
      expect(Array.isArray(degreesByFaculty)).toBe(true);
      
      if (degrees.length > 0) {
        const degree = degrees[0];
        expect(typeof degree.id).toBe('string');
        expect(typeof degree.name).toBe('string');
        expect(typeof degree.universityId).toBe('string');
        expect(typeof degree.facultyId).toBe('string');
      }
    });
  });
});