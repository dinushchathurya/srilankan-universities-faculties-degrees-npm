import { describe, it, expect } from "vitest";
import {
  getUniversities,
  getFaculties,
  getDegrees,
  universities_data,
} from "../src/index";
import defaultExport from "../src/index";

describe("Legacy API Compatibility Tests", () => {
  describe("getUniversities()", () => {
    it("should return array of university names", () => {
      const result = getUniversities();

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result).toContain("University of Colombo");
      expect(result).toContain("University of Peradeniya");
    });
  });

  describe("getFaculties()", () => {
    it("should return array of faculty names for a university", () => {
      const result = getFaculties("University of Colombo");

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result).toContain("Faculty of Law");
      expect(result).toContain("Faculty of Science");
    });

    it("should return empty array for invalid university", () => {
      const result = getFaculties("Invalid University");

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });

    it("should handle empty input gracefully", () => {
      const result = getFaculties("");

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);

      // @ts-ignore - Testing runtime behavior with invalid input
      const nullResult = getFaculties(null);
      expect(Array.isArray(nullResult)).toBe(true);
      expect(nullResult.length).toBe(0);
    });
  });

  describe("getDegrees()", () => {
    it("should return array of degree names for a faculty in a university", () => {
      const result = getDegrees("University of Colombo", "Faculty of Law");

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result).toContain("Bachelor of Laws");
    });

    it("should return empty array for invalid university", () => {
      const result = getDegrees("Invalid University", "Faculty of Law");

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });

    it("should return empty array for invalid faculty", () => {
      const result = getDegrees("University of Colombo", "Invalid Faculty");

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });

    it("should handle empty input gracefully", () => {
      const result1 = getDegrees("", "Faculty of Law");
      const result2 = getDegrees("University of Colombo", "");
      const result3 = getDegrees("", "");

      expect(Array.isArray(result1)).toBe(true);
      expect(Array.isArray(result2)).toBe(true);
      expect(Array.isArray(result3)).toBe(true);
      expect(result1.length).toBe(0);
      expect(result2.length).toBe(0);
      expect(result3.length).toBe(0);
    });
  });

  describe("universities_data", () => {
    it("should have the original v1.x structure", () => {
      expect(typeof universities_data).toBe("object");
      expect(universities_data).toHaveProperty("University of Colombo");
      expect(universities_data["University of Colombo"]).toHaveProperty(
        "Faculty of Law"
      );
      expect(
        Array.isArray(
          universities_data["University of Colombo"]["Faculty of Law"]
        )
      ).toBe(true);
      expect(
        universities_data["University of Colombo"]["Faculty of Law"]
      ).toContain("Bachelor of Laws");
    });
  });

  describe("CommonJS Compatibility", () => {
    it("should work with default export", () => {
      expect(typeof defaultExport).toBe("object");
      expect(typeof defaultExport.getUniversities).toBe("function");
      expect(typeof defaultExport.getFaculties).toBe("function");
      expect(typeof defaultExport.getDegrees).toBe("function");

      const universities = defaultExport.getUniversities();
      expect(Array.isArray(universities)).toBe(true);
      expect(universities).toContain("University of Colombo");

      const faculties = defaultExport.getFaculties("University of Colombo");
      expect(Array.isArray(faculties)).toBe(true);
      expect(faculties).toContain("Faculty of Law");

      const degrees = defaultExport.getDegrees(
        "University of Colombo",
        "Faculty of Law"
      );
      expect(Array.isArray(degrees)).toBe(true);
      expect(degrees).toContain("Bachelor of Laws");
    });
  });
});
