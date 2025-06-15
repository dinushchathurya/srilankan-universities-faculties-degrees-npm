# Contributing to Sri Lankan Universities, Faculties and Degrees

Thank you for your interest in contributing to this project! We welcome contributions from the community to help maintain and improve this comprehensive database of Sri Lankan higher education institutions.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Submitting Changes](#submitting-changes)
- [Data Guidelines](#data-guidelines)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## Code of Conduct

This project adheres to a Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [dinushchathurya@gmail.com](mailto:dinushchathurya@gmail.com).

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- **Clear description** of the issue
- **Steps to reproduce** the behavior
- **Expected behavior** vs actual behavior
- **Environment details** (Node.js version, OS, etc.)
- **Code examples** if applicable

### 🎯 Suggesting Enhancements

Enhancement suggestions are welcome! Please:

- **Check existing issues** for similar suggestions
- **Describe the enhancement** in detail
- **Explain why this would be useful** to most users
- **Provide examples** of how it would work

### 📊 Data Contributions

We especially welcome contributions that:

- **Add missing universities** or educational institutions
- **Update faculty information** with current data
- **Add new degree programs** that are officially offered
- **Correct outdated information** with verified sources
- **Improve data accuracy** with official documentation

### 💻 Code Contributions

We welcome code improvements including:

- Bug fixes
- Performance improvements
- New features
- Documentation improvements
- Test coverage improvements

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/srilankan-universities-faculties-degrees-npm.git
   cd srilankan-universities-faculties-degrees-npm
   ```

3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/dinushchathurya/srilankan-universities-faculties-degrees-npm.git
   ```

## Development Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run tests**:
   ```bash
   npm test
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Run tests in watch mode** (during development):
   ```bash
   npm run test:watch
   ```

## Making Changes

### Branch Naming Convention

Create a descriptive branch name:
- `feature/add-new-university-data`
- `fix/correct-faculty-names`
- `docs/update-readme-examples`
- `refactor/improve-search-performance`

### Commit Message Guidelines

We use emoji commits to make the commit history more expressive and easier to scan:

```
emoji type(scope): description

body (optional)

footer (optional)
```

#### Commit Emoji Types:

- ✨ `:sparkles:` - New features
- 🐛 `:bug:` - Bug fixes
- 📚 `:books:` - Documentation changes
- 🎨 `:art:` - Code style/formatting improvements
- ♻️ `:recycle:` - Code refactoring
- ✅ `:white_check_mark:` - Adding/updating tests
- 🔧 `:wrench:` - Configuration changes
- 📦 `:package:` - Package/dependency updates
- 🚀 `:rocket:` - Performance improvements
- 🌐 `:globe_with_meridians:` - Internationalization/localization
- 📊 `:bar_chart:` - Adding/updating data
- 🔒 `:lock:` - Security fixes
- 🏗️ `:building_construction:` - Build system changes
- 💚 `:green_heart:` - CI/CD fixes
- 🔥 `:fire:` - Removing code/files
- 🚚 `:truck:` - Moving/renaming files

#### Examples:
```
✨ feat(data): add University of Vavuniya faculty information

🐛 fix(search): resolve case sensitivity issue in university lookup

📚 docs(readme): update TypeScript usage examples

📊 data(universities): add new degree programs for University of Peradeniya

🔧 chore(deps): update development dependencies

♻️ refactor(api): improve search function performance
```

#### Quick Reference for Common Changes:
- Adding new university data: `📊 data(universities): ...`
- Fixing bugs: `🐛 fix(scope): ...`
- New API features: `✨ feat(api): ...`
- Documentation updates: `📚 docs(scope): ...`
- Test improvements: `✅ test(scope): ...`
- Dependency updates: `📦 deps: ...`

### Data Source Requirements

When adding or updating educational data:

1. **Use official sources only**:
   - University official websites
   - University Grants Commission (UGC) publications
   - Ministry of Education official documents

2. **Verify accuracy**:
   - Cross-reference with multiple official sources
   - Ensure current and up-to-date information
   - Include source URLs in your pull request description

3. **Follow data structure**:
   - Maintain consistent naming conventions
   - Use proper capitalization and spelling
   - Follow existing data format patterns

## Submitting Changes

### Pull Request Process

1. **Update your fork**:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** following the guidelines above

4. **Test thoroughly**:
   ```bash
   npm test
   npm run build
   ```

5. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat(scope): your descriptive message"
   ```

6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request** on GitHub

### Pull Request Requirements

Your PR should include:

- **Clear title** describing the change
- **Detailed description** of what was changed and why
- **Reference to related issues** (if applicable)
- **Screenshots** (for UI changes)
- **Test results** showing all tests pass
- **Documentation updates** (if needed)

## Data Guidelines

### University Names
- Use official English names as published by the university
- Include common abbreviations in parentheses if widely used
- Example: `"University of Colombo (UOC)"`

### Faculty Names
- Use official faculty names from university websites
- Maintain consistent formatting across all universities
- Example: `"Faculty of Medicine"`, not `"Medical Faculty"`

### Degree Programs
- Use full official degree titles
- Include specializations where officially recognized
- Example: `"Bachelor of Science in Computer Science"`

### Data Validation
All data changes must:
- Pass existing tests
- Include source verification
- Maintain backward compatibility
- Follow TypeScript type definitions

## Style Guidelines

### TypeScript
- Use strict TypeScript configuration
- Provide proper type definitions
- Follow existing code patterns
- Use meaningful variable names

### Code Formatting
- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas in objects/arrays
- Use semicolons consistently

### Documentation
- Use clear, concise language
- Provide code examples
- Update README if adding new features
- Comment complex logic

## Testing

### Writing Tests
- Write tests for new features
- Update tests when modifying existing functionality
- Ensure tests are readable and maintainable
- Test edge cases and error conditions

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Community

### Getting Help
- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and community discussions
- **Email**: [dinushchathurya@gmail.com](mailto:dinushchathurya@gmail.com) for direct contact

### Stay Updated
- **Watch the repository** for notifications
- **Follow the author** [@dinushchathurya](https://github.com/dinushchathurya)
- **Check the project website** [dinushchathurya.me](https://dinushchathurya.me)

## Recognition

Contributors will be:
- Listed in the project's AUTHORS.md file
- Credited in release notes for significant contributions
- Mentioned in the project documentation

## Questions?

Don't hesitate to ask questions! We're here to help:
- Open an issue for clarification
- Start a discussion for broader topics
- Email the maintainer for private inquiries

Thank you for contributing to this project and helping make Sri Lankan educational data more accessible to everyone! 🇱🇰
