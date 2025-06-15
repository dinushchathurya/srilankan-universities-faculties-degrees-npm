# Pull Request

## Description

<!-- Provide a brief description of what this PR does -->

## Type of Change

Please check the relevant option(s):

- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📚 Documentation update
- [ ] 📊 Data update (adding/updating university, faculty, or degree information)
- [ ] 🔧 Configuration change
- [ ] ♻️ Refactoring (no functional changes, no api changes)
- [ ] ✅ Test update
- [ ] 🚀 Performance improvement
- [ ] 🔒 Security fix

## Changes Made

<!-- Describe the changes made in this PR -->

### Universities
- [ ] Added new university: ________________
- [ ] Updated university information: ________________
- [ ] Removed university: ________________

### Faculties
- [ ] Added new faculty: ________________
- [ ] Updated faculty information: ________________
- [ ] Removed faculty: ________________

### Degrees
- [ ] Added new degree programs: ________________
- [ ] Updated degree information: ________________
- [ ] Removed degree programs: ________________

### API Changes
- [ ] Added new API methods
- [ ] Modified existing API methods
- [ ] Deprecated API methods
- [ ] Removed API methods

## Data Sources

<!-- If this PR includes data updates, please provide official sources -->

For data changes, please provide official sources:
- [ ] University official website: ________________
- [ ] UGC (University Grants Commission) publication: ________________
- [ ] Ministry of Education document: ________________
- [ ] Other official source: ________________

## Testing

- [ ] I have run the existing tests (`npm test`)
- [ ] I have added tests for new functionality
- [ ] All tests pass locally
- [ ] I have tested the changes manually

### Test Results
```
<!-- Paste test results here -->
```

## Checklist

### Code Quality
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] My changes generate no new warnings
- [ ] I have run `npm run build` successfully

### Documentation
- [ ] I have updated the documentation accordingly
- [ ] I have updated the README.md if needed
- [ ] I have added/updated JSDoc comments
- [ ] I have updated TypeScript type definitions

### Data Integrity
- [ ] Data follows the existing naming conventions
- [ ] University names use official English names
- [ ] Faculty names use official titles from university websites
- [ ] Degree names use full official titles
- [ ] All data is verified from official sources

### Backward Compatibility
- [ ] My changes maintain backward compatibility
- [ ] Legacy API (v1.x) still works as expected
- [ ] No breaking changes to existing exports
- [ ] Version bump is appropriate (patch/minor/major)

## Related Issues

<!-- Link any related issues -->
Closes #(issue number)
Fixes #(issue number)
Related to #(issue number)

## Screenshots (if applicable)

<!-- Add screenshots to help explain your changes -->

## Additional Notes

<!-- Add any additional notes, concerns, or context -->

## Verification Steps

<!-- Describe how reviewers can test your changes -->

1. Clone the repository
2. Install dependencies: `npm install`
3. Run tests: `npm test`
4. Build the project: `npm run build`
5. Test specific functionality: 
   ```javascript
   // Add example code to test your changes
   ```

## Breaking Changes

<!-- If this is a breaking change, describe what breaks and how to migrate -->

### What breaks:
- [ ] No breaking changes
- [ ] API method signatures changed
- [ ] Data structure changed
- [ ] Export structure changed

### Migration guide:
```javascript
// Before
// Add example of old usage

// After  
// Add example of new usage
```

## Performance Impact

<!-- Describe any performance implications -->

- [ ] No performance impact
- [ ] Improves performance
- [ ] May impact performance (explain below)

## Security Considerations

<!-- Describe any security implications -->

- [ ] No security implications
- [ ] Improves security
- [ ] May have security implications (explain below)

---

**Review Checklist for Maintainers:**

- [ ] Code follows project conventions
- [ ] Tests are comprehensive and pass
- [ ] Documentation is updated
- [ ] Data sources are verified
- [ ] Backward compatibility maintained
- [ ] Performance is acceptable
- [ ] Security considerations addressed
- [ ] Commit messages follow emoji conventions