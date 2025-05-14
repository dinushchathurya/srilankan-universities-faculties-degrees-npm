/**
 * Interface for a degree program offered by a faculty
 */
export interface Degree {
  id: string;
  universityId: string;
  facultyId: string;
  name: string;
}