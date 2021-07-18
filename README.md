# assignment-mobiquity

For this assignment I have chosen Cypress framework in JS because I think it has great potential for api testing. Among other tools e.g. Selenium it is more lightweight and fast. 

## Solution

### Folder structure
The skeleton of the project if the basic skeleton provided by Cypress.js with small modifications:
- `cypress`
    - `api-test` test files
    - `fixtures` test data files
    - `schemas` json schema files
    - `support` functions
- `.circleci` CircleCI config
- `cypress.json` file with cypress configuration
- `reported-config.js` file with report configurations
- `Dockerfile` 
- `Makefile` if you dont want to use npm

### Test scenarios
1. **Users test** - test fetches one user and validates json schema. For schema validation I used `cypress/schema-tools` library. Test also makes assertions if response status and format is OK.
2. **Comments test** - test from assigment. This scenario fetches posts made by specific user. Then it looks up all comments for each post. Comments email, body and name is validated. 

## Install and run locally
- nodeJS >= 13
- run `npm install` in the root folder of the project

### Run Cypress tests
`npm run test:run` to run tests in CLI\
`npm run test:open` to run tests in Cypress test runner\
Test run using tests:open:\
<img width="984" alt="screenshot 2021-07-18 o 12 32 24" src="https://user-images.githubusercontent.com/43915675/126068908-fa556d48-f8fd-4707-8bcb-cb1705d70999.png">

### Generating test report
`npm run report:generate` to generate html test report with test results\
Report looks like this:\
<img width="984" alt="screenshot 2021-07-18 o 12 30 48" src="https://user-images.githubusercontent.com/43915675/126068917-9f4b9fb0-38e7-4dd8-ab44-99444218b31b.png">

## Docker
For running test on crossplatform I chose to use docker solution. 

Image can be downloaded here: https://hub.docker.com/r/zuzanamih/mbq-assignment
Image was created using Dockerfile in this repository. Idea behind this solution is to create very small docker image that contains results from executed tests only. After test execution the results are copied from cypress image to small linux image. Final comparison between used and created image: **1,26GB** vs **1,24MB**. I prefer this solution because it is saving space.

If you want to check test results, please use this command:
`docker run -it zuzana-m-mbq sh`
Results path: `/public/results/json mochawesome-bundle.html`

If you like to execute tests locally using docker, please follow commands below:
1. `docker build -t zuzana-m-mbq .`
2. `docker run -it zuzana-m-mbq sh`

## CircleCI
CircleCI setup is located in `.circleci/config.yml` file. Pipeline runs tests in headless mode in CLI. After tests are executed, a report is generated and saved into artifacts.\
<img width="1430" alt="screenshot 2021-07-18 o 12 33 05" src="https://user-images.githubusercontent.com/43915675/126068931-2fed315e-bcce-4762-804f-e3bfe4ab3cc3.png">

## Possible improvements
To make this project usable for real testing I would do following changes:
1. Add cypress.json file for each environment
    - Testing product on different environments can be sometimes tricky because there might be some differences that affect our test flow (e.g. different base url...). Therefore I would add configuration file for each environment.
2. Running tests in paralel
    - This solution has nonparallel runs only. If there were more tests it would be great to run them in parallel. This can be done by using Cypress dashboard product or free alternative like Sorry Cypress dashboard.
3. Report management
    - Complex products require to store each test report. It would be possible to upload html results to some cloud. More sophisticated could be sending json results to Kibana and visualize results in form of graphs and tables. This is good preparation for data analysis.
4. Cucumber
    - Possible to add cucumber integration for user friendly readable scenarios.
5. Notifications
    - It would be benefitial if we sent slack notification with test results after each run in pipeline (circleci/jenkins). It can be done using hooks.
