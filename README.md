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

> Note: Use `npm install @dinush/srilankan-universities-faculties-degrees@1.0.3` to install the stable version of this package. 

⚠️ CAUTION: This package has been updated to be fully compatible with TypeScript, providing enhanced type safety and a modern API. However, please note that the current version (2.0.0-rc.14) is a release candidate and should be used with care. Some data lookups might not function correctly due to ID inconsistencies between universities, faculties, and degrees data. To install the release candidate version, use `npm install @dinush/srilankan-universities-faculties-degrees@next` or `npm install @dinush/srilankan-universities-faculties-degrees@2.0.0-rc.14`. We're actively working to fix these inconsistencies for the stable release. 

## Table of Contents
<ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#api-reference">API Reference</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#support">Support</a></li>
    <li><a href="#author">Author</a></li>
</ol>

## Installation

via npm

```bash
npm i @dinush/srilankan-universities-faculties-degrees@next --save
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
// ["Faculty of Arts", "Faculty of Education", "Faculty of Law", ...]

// Get degrees of a selected faculty at a university
const lawDegrees = getDegrees("University of Colombo", "Faculty of Law");
// ["Bachelor of Laws"]

// Access legacy data structure
const { universities_data } = require("@dinush/srilankan-universities-faculties-degrees");
const rawData = universities_data["University of Colombo"]["Faculty of Law"];
// ["Bachelor of Laws"]
```

### TypeScript / ES Modules

```typescript
// Import the modern API
import {
  getAllUniversities,
  getFacultiesByUniversity,
  getDegreesByFaculty,
  getUniversity,
  getFaculty,
  validateUniversity,
  validateFaculty,
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

// Get specific university by name or ID (case-insensitive)
const colombo: University | undefined = getUniversity("University of Colombo");
const colomboById: University | undefined = getUniversity("university-of-colombo");

// Validate university existence
const isValid: boolean = validateUniversity("University of Colombo"); // true

// Get faculties of a university with detailed data
const faculties: Faculty[] = getFacultiesByUniversity("University of Colombo");
/*
[
  { id: "faculty-of-law-colombo", universityId: "university-of-colombo", name: "Faculty of Law" },
  { id: "faculty-of-science-colombo", universityId: "university-of-colombo", name: "Faculty of Science" },
  ...
]
*/

// Get specific faculty
const lawFaculty: Faculty | undefined = getFaculty("University of Colombo", "Faculty of Law");

// Validate faculty in university
const facultyExists: boolean = validateFaculty("University of Colombo", "Faculty of Law"); // true

// Get degrees offered by a faculty
const degrees: Degree[] = getDegreesByFaculty("University of Colombo", "Faculty of Law");
/*
[
  {
    id: "bachelor-of-laws-colombo",
    universityId: "university-of-colombo",
    facultyId: "faculty-of-law-colombo",
    name: "Bachelor of Laws"
  }
]
*/

// Get all data
const allUniversities: University[] = getAllUniversities();
const allFaculties: Faculty[] = getAllFaculties();
const allDegrees: Degree[] = getAllDegrees();
```

### Individual Module Imports (TypeScript / ES Modules)

```typescript
// Import only the universities module
import { getAllUniversities, getUniversity, validateUniversity } from "@dinush/srilankan-universities-faculties-degrees/universities";

// Import only the faculties module
import { getAllFaculties, getFacultiesByUniversity, getFaculty, validateFaculty } from "@dinush/srilankan-universities-faculties-degrees/faculties";

// Import only the degrees module
import { getAllDegrees, getDegreesByFaculty } from "@dinush/srilankan-universities-faculties-degrees/degrees";

// Import legacy compatibility
import { getUniversities, getFaculties, getDegrees } from "@dinush/srilankan-universities-faculties-degrees/compatibility";
```

## API Reference

### Modern API (New in v2.0)

#### Universities

- `getAllUniversities()`: Returns all universities with detailed data
- `getUniversity(nameOrId)`: Returns a specific university by name or ID (case-insensitive)
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
- `universities_data`: Legacy data structure for direct access

## Framework Examples
- [NodeJS Example](https://github.com/dinushchathurya/srilankan-provinces-districts-npm-package-demo/tree/main/node-demo)
- [ReactJS Example](https://github.com/dinushchathurya/srilankan-provinces-districts-npm-package-demo/tree/main/react-demo)
- [NextJS Example](https://github.com/dinushchathurya/srilankan-provinces-districts-npm-package-demo/tree/main/next-demo)
- [NestJS Example](https://github.com/dinushchathurya/srilankan-provinces-districts-npm-package-demo/tree/main/nest-demo)

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

<p align="center">
    <a href="https://www.patreon.com/bePatron?u=35199964" target="_blank">
        <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patreon">
    </a>
</p>

## Author

<p align="center">
    Made with ❤️ & ☕ by <a href="https://dinushchathurya.me/"><u style="color:#0193f0;">Dinush Chathurya</u></a> as a part of <a href="https://github.com/open-source-srilanka"><u style="color:#0193f0;">ProjectOSS</u></a>
</p>