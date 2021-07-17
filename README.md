# assignment-mobiquity

For this assignment I have chosen Cypress framework in JS because I think it has great potential for api testing. Among other tools e.g. Selenium it is more lightweight and fast. 

## Solution

### Folder structure
The skeleton of project if the basic skeleton provided by Cypress.js with small modifications:
- `api-test` test files
- `fixtures` test data files
- `schemas` json schema files
- `support` functions

### Test scenarios
1. Users test - test fetches one user and validates json schema. For schema validation I used `cypress/schema-tools` library. 
2. Comments test - test from assigment. 

## Install locally
- nodeJS >= 13
- run `npm install` in the root folder of the project

## Run Cypress tests
`npm run test:run` to run tests in CLI\
`npm run tests:open` to run tests in Cypress test runner\

## Generating test report
`npm run report:generate` to generate html test report with test results\

## Docker

## CircleCI