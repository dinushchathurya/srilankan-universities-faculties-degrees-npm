import { describe, it, expect } from 'vitest';
import { 
  getAllUniversities, 
  getUniversity, 
  validateUniversity,
  University
} from '../src/universities';

describe('Universities Module', () => {
  describe('getAllUniversities()', () => {
    it('should return all universities with full data', () => {
      const universities = getAllUniversities();
      
      expect(Array.isArray(universities)).toBe(true);
      expect(universities.length).toBeGreaterThan(0);
      
      const colombo = universities.find(u => u.id === 'university-of-colombo');
      expect(colombo).toBeDefined();
      expect(colombo?.name).toBe('University of Colombo');
      expect(colombo?.code).toBe('UOC');
    });
  });
  
  describe('getUniversity()', () => {
    it('should find university by name (case-insensitive)', () => {
      const colombo1 = getUniversity('University of Colombo');
      expect(colombo1).toBeDefined();
      expect(colombo1?.name).toBe('University of Colombo');
      
      const colombo2 = getUniversity('university of colombo');
      expect(colombo2).toBeDefined();
      expect(colombo2?.name).toBe('University of Colombo');
      
      const colombo3 = getUniversity('UNIVERSITY OF COLOMBO');
      expect(colombo3).toBeDefined();
      expect(colombo3?.name).toBe('University of Colombo');
    });
    
    it('should find university by ID', () => {
      const colombo = getUniversity('university-of-colombo');
      expect(colombo).toBeDefined();
      expect(colombo?.name).toBe('University of Colombo');
    });
    
    it('should return undefined for non-existent university', () => {
      const result = getUniversity('invalid-university');
      expect(result).toBeUndefined();
    });
    
    it('should handle empty input gracefully', () => {
      const result = getUniversity('');
      expect(result).toBeUndefined();
      
      // @ts-ignore - Testing runtime behavior with invalid input
      const nullResult = getUniversity(null);
      expect(nullResult).toBeUndefined();
    });
  });
  
  describe('validateUniversity()', () => {
    it('should return true for valid universities', () => {
      expect(validateUniversity('University of Colombo')).toBe(true);
      expect(validateUniversity('university-of-colombo')).toBe(true);
    });
    
    it('should return false for invalid universities', () => {
      expect(validateUniversity('Invalid University')).toBe(false);
      expect(validateUniversity('')).toBe(false);
    });
  });
  
  describe('Type verification', () => {
    it('should have correct types', () => {
      const universities: University[] = getAllUniversities();
      const university: University | undefined = getUniversity('University of Colombo');
      
      expect(Array.isArray(universities)).toBe(true);
      
      if (university) {
        expect(typeof university.id).toBe('string');
        expect(typeof university.name).toBe('string');
        expect(typeof university.code).toBe('string');
      }
    });
  });
});