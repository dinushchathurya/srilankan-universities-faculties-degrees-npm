# Security Policy

## Supported Versions

We actively support and provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 2.x     | :white_check_mark: |
| 1.x     | :x:                |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue in this package, please report it responsibly.

### How to Report

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please send an email to [dinushchathurya@gmail.com](mailto:dinushchathurya@gmail.com) with the following information:

- A clear description of the vulnerability
- Steps to reproduce the issue
- Potential impact assessment
- Any suggested fixes (if available)

### Response Timeline

- **Initial Response**: We will acknowledge receipt of your report within 48 hours
- **Assessment**: We will assess the vulnerability within 5 business days
- **Resolution**: Critical vulnerabilities will be addressed within 7 days, while less critical issues will be resolved in the next regular release

### Responsible Disclosure

We follow responsible disclosure practices:

1. We will work with you to understand and resolve the issue
2. We will credit you for the discovery (unless you prefer to remain anonymous)
3. We will coordinate the disclosure timeline with you
4. We will publish security advisories for significant vulnerabilities

## Security Considerations

### Data Integrity

This package contains static educational data about Sri Lankan universities, faculties, and degree programs. The security considerations include:

- **Data Accuracy**: All data is sourced from official university websites and government publications
- **Data Tampering**: We use version control and checksums to ensure data integrity
- **Supply Chain**: Dependencies are regularly audited and updated

### Package Security

- **Dependency Management**: We regularly audit and update dependencies using `npm audit`
- **Build Process**: Our build process is automated and uses trusted tools (TypeScript, tsup)
- **Distribution**: Packages are published through official npm registry with 2FA enabled

### Runtime Security

This package:
- Does not execute external code
- Does not make network requests
- Does not access file system beyond normal module loading
- Does not collect or transmit user data
- Contains only static data and utility functions

## Security Best Practices for Users

When using this package in your applications:

1. **Keep Updated**: Always use the latest version to get security patches
2. **Audit Dependencies**: Regularly run `npm audit` in your projects
3. **Input Validation**: Always validate user inputs when using this package's data
4. **Environment Security**: Follow security best practices in your deployment environment

## Vulnerability Assessment

### Low Risk Areas
- Static data queries
- Utility functions for data access
- TypeScript type definitions

### Medium Risk Areas
- Input validation in search functions
- Data serialization/deserialization

### Mitigation Strategies
- Input sanitization for all user-provided parameters
- Strict TypeScript types to prevent type confusion
- Comprehensive testing including edge cases
- Regular dependency updates

## Security Updates

Security updates will be:
- Released as patch versions (e.g., 2.0.1, 2.0.2)
- Announced through:
  - GitHub Security Advisories
  - npm security advisories
  - Release notes
  - Project README updates

## Contact

For security-related questions or concerns:
- Email: [dinushchathurya@gmail.com](mailto:dinushchathurya@gmail.com)
- GitHub: [@dinushchathurya](https://github.com/dinushchathurya)
- Website: [dinushchathurya.me](https://dinushchathurya.me)

## Acknowledgments

We appreciate the security research community and thank all researchers who responsibly disclose vulnerabilities to help keep our users safe.

---

*Last updated: June 2025*