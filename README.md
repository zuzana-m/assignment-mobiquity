# assignment-mobiquity

For this assignment I have chosen Cypress framework in JS because I think it has great potential for api testing. Among other tools e.g. Selenium it is more lightweight and fast. 

## Solution

### Folder structure
The skeleton of the project if the basic skeleton provided by Cypress.js with small modifications:
- `api-test` test files
- `fixtures` test data files
- `schemas` json schema files
- `support` functions
- `cypress.json` file with cypress configuration
- `reported-config.js` file with report configurations

### Test scenarios
1. Users test - test fetches one user and validates json schema. For schema validation I used `cypress/schema-tools` library. Test also makes assertions if response status and format is OK.
2. Comments test - test from assigment. This scenario fetches posts made by specific user. Then it looks up all comments for each post. Comments email, body and name is validated. 

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


## Possible improvements
To make this project usable for real testing I would following changes:
1. Add cypress.json file for each environment
    - Testing product on different environments can be sometimes tricky because there might be some differences that affect our test flow (e.g. different base url...). Therefore I would add configuration file for each environment.
2. Running tests in paralel
    - This solution has nonparallel runs only. If there were more tests it would be great to run them in parallel. This can be done by using Cypress dashboard product or free alternative like Sorry Cypress dashboard.
3. Report management
    - Complex products require to store each test report. I would be possible to upload html results to some cloud. More sophisticated could be sending json results to Kibana and visualize results in form of graphs and tables.
4. Cucumber
    - Possible to add cucumber integration for creating data tables for testing.
5. Notifications
    - It would be benefitial if we sent slack notification with test results after each run in pipeline (circleci/jenkins). It can be done using hooks.