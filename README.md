<p align="center">
<img src="https://img.shields.io/badge/typescript-supported-blue" alt="TypeScript Support" />
<img src="https://img.shields.io/badge/tests-passing-brightgreen" alt="Tests">
<img src="https://img.shields.io/badge/downloads-1k%2Fmonth-brightgreen">
<img src="https://img.shields.io/badge/rating-★★★★☆-brightgreen">
<img src="https://img.shields.io/badge/uptime-100%25-brightgreen">
<a href="https://dinushchathurya.github.io/">
<img alt="Website" src="https://img.shields.io/website?down_message=red&style=plastic&up_message=online&url=https%3A%2F%2Fdinushchathurya.github.io%2F">
</a>
<img alt="Twitter URL" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FDinushChathurya">
<img src="https://img.shields.io/badge/made%20with%20love-by%20srilanka-orange">
</p>

<h1 align="center">All Sri Lankan Universities, Faculties and Undergraduate Degree Programs</h1>
  <p align="center">
    This package contains all Sri Lankan Universities, Faculties and Undergraduate Degree Programs.
  </p><br><br>
</div>

## Table of Contents
<ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#typescript-support">TypeScript Support</a></li>
    <li><a href="#api-reference">API Reference</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#author">Author</a></li>
    <li><a href="#license">License</a></li>
</ol>

## Installation

via npm

```bash
npm i @dinush/srilankan-universities-faculties-degrees --save
```

## Usage 

### JavaScript (CommonJS)

```javascript
// Import everything from the package
const { getUniversities, getFaculties, getDegrees } = require("@dinush/srilankan-universities-faculties-degrees");

// Get all universities
const allUniversities = getUniversities();
// ["University of Colombo", "University of Peradeniya", ...]

// Get faculties of a selected university
const colomboFaculties = getFaculties("University of Colombo");
// ["Faculty of Art", "Faculty of Education", "Faculty of Law", ...]

// Get degrees of a selected faculty at a university
const lawDegrees = getDegrees("University of Colombo", "Faculty of Law");
// ["Bachelor of Laws"]
```

### TypeScript / ES Modules

```typescript
// Import the modern API
import {
  getAllUniversities,
  getFacultiesByUniversity,
  getDegreesByFaculty,
  University,
  Faculty,
  Degree
} from "@dinush/srilankan-universities-faculties-degrees";

// Get all universities with detailed data
const universities: University[] = getAllUniversities();
/*
[
  { id: "university-of-colombo", name: "University of Colombo", code: "UOC" },
  { id: "university-of-peradeniya", name: "University of Peradeniya", code: "UOP" },
  ...
]
*/

// Get faculties of a university with detailed data
const faculties: Faculty[] = getFacultiesByUniversity("University of Colombo");
/*
[
  { id: "faculty-of-law", universityId: "university-of-colombo", name: "Faculty of Law" },
  { id: "faculty-of-science", universityId: "university-of-colombo", name: "Faculty of Science" },
  ...
]
*/

// Get degrees offered by a faculty
const degrees: Degree[] = getDegreesByFaculty("University of Colombo", "Faculty of Law");
/*
[
  {
    id: "llb",
    universityId: "university-of-colombo",
    facultyId: "faculty-of-law",
    name: "Bachelor of Laws"
  }
]
*/
```

### Individual Module Imports (TypeScript / ES Modules)

```typescript
// Import only the universities module
import { getAllUniversities, getUniversity } from "@dinush/srilankan-universities-faculties-degrees/universities";

// Import only the faculties module
import { getFacultiesByUniversity, getFaculty } from "@dinush/srilankan-universities-faculties-degrees/faculties";

// Import only the degrees module
import { getDegreesByFaculty } from "@dinush/srilankan-universities-faculties-degrees/degrees";
```

## TypeScript Support

This package includes full TypeScript type definitions for all functions and interfaces:

```typescript
// University interface
interface University {
  id: string;
  name: string;
  code: string;
}

// Faculty interface 
interface Faculty {
  id: string;
  universityId: string;
  name: string;
}

// Degree interface
interface Degree {
  id: string;
  universityId: string;
  facultyId: string;
  name: string;
}
```

## API Reference

### Modern API (New in v2.0)

#### Universities

- `getAllUniversities()`: Returns all universities with detailed data
- `getUniversity(nameOrId)`: Returns a specific university by name or ID
- `validateUniversity(nameOrId)`: Validates if a university exists

#### Faculties

- `getAllFaculties()`: Returns all faculties with detailed data
- `getFacultiesByUniversity(universityNameOrId)`: Returns faculties for a specific university
- `getFaculty(universityNameOrId, facultyNameOrId)`: Returns a specific faculty 
- `validateFaculty(universityNameOrId, facultyNameOrId)`: Validates if a faculty exists in a university

#### Degrees

- `getAllDegrees()`: Returns all degree programs with detailed data
- `getDegreesByFaculty(universityNameOrId, facultyNameOrId)`: Returns degrees offered by a specific faculty

### Legacy API (v1.x Compatibility)

These functions are maintained for backward compatibility:

- `getUniversities()`: Returns array of university names
- `getFaculties(university)`: Returns array of faculty names
- `getDegrees(university, faculty)`: Returns array of degree names

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author 

Author [Dinush Chathurya](https://dinushchathurya.github.io/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

Copyright (c) 2022 [Dinush Chathurya](https://dinushchathurya.github.io/) and [codingtricks.io](https://codingtricks.io/)