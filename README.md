# QA -Test-suite

## Overview

This test suite is designed to demonstrate automated testing skills using Cypress on "The Internet" platform. The platform provides various scenarios, such as login, checkboxes, notifications, and more, which will be tested incrementally.

## Current Tests for "The Internet" Platform

The following scenarios are currently covered:

1. **Login**: Automatically tests for happy path, edge test cases and negative test cases

## How to Run the Tests

1. Install dependencies:
   ```bash
   npm install
   ```
2. Open Cypress:
   ```bash
   npx cypress open
   ```
3. Run the tests in the `cypress/e2e/Test Suites/login.cy.js` file.

## Future Enhancements

As more scenarios are tested on "The Internet" platform, this README will be updated to reflect the additional test cases and their descriptions. Planned scenarios include:

- **Checkboxes**: Verifying the functionality of checkboxes.
- **Notifications**: Testing notification messages.
- **Other Features**: Exploring and testing other features provided by "The Internet" platform.

## Notes

- Ensure that the application under test is accessible before running the tests.
- The tests are designed for demonstration purposes and may require adjustments for production environments.