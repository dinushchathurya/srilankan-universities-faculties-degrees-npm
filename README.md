<p align="center">
<img src="https://img.shields.io/circleci/build/github/dinushchathurya/srilankan-universities-faculties-degrees-npm" alt="Build Status" />
<img src="https://scrutinizer-ci.com/g/dinushchathurya/srilankan-universities-faculties-degrees-npm/badges/quality-score.png?b=master" alt="Scrutinizer Quality Score" />
<img src="https://img.shields.io/scrutinizer/quality/g/dinushchathurya/srilankan-universities-faculties-degrees-npm" alt="Scrutinizer Quality Score" />
<img src="https://img.shields.io/coveralls/github/badges/shields" alt="coverage">
<img src="https://img.shields.io/badge/downloads-1k%2Fmonth-brightgreen">
<img src="https://img.shields.io/badge/rating-★★★★☆-brightgreen">
<img src="https://img.shields.io/badge/uptime-100%25-brightgreen">
<a href="https://dinushchathurya.github.io/">
<img alt="Website" src="https://img.shields.io/website?down_message=red&style=plastic&up_message=online&url=https%3A%2F%2Fdinushchathurya.github.io%2F">
</a>
<img alt="Twitter URL" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FDinushChathurya">
<img src="https://img.shields.io/badge/made%20with%20love-by%20srilanka-orange">
</p>

<h1 align="center">All Srilankan Universities, Faculties and Undergraduate Degree Programs</h1>
  <p align="center">
    This package contains all Srilankan Universities, Faculties and Undergraduate Degree Programs.
  </p><br><br>
</div>

## Table of Contents
<ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#author">Author</a></li>
    <li><a href="#license">License</a></li>
</ol>

## Installation

via npm

`npm i @dinush/srilankan-universities-faculties-degrees --save`

## Usage 

```
const {universities, faculties, degrees} = require("@dinush/srilankan-universities-faculties-degrees");

/* get all universities */
var universities = universities();

/* get faculties of a selected university */
var faculties = faculties("University of Colombo");

/* get degrees of a selected faulty of respective university */
var degrees = degrees("University of Peradeniya", "Faculty of Arts");

```

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

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2022 <a href="https://dinushchathurya.github.io/">Dinush Chathurya</a> and <a href="https://codingtricks.io/">codingtricks.io</a>


              