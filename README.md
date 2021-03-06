# [Issue Tracker](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/issue-tracker)



V   Complete the necessary routes in /routes/api.js
V   Create all of the functional tests in tests/2_functional-tests.js
V   Copy the sample.env file to .env and set the variables appropriately
V   To run the tests uncomment NODE_ENV=test in your .env file
V    To run the tests in the console, use the command npm run test. To open the Replit console, press Ctrl+Shift+P (Cmd if on a Mac) and type "open shell"

Write the following tests in tests/2_functional-tests.js:

V   Create an issue with every field: POST request to /api/issues/{project}
V   Create an issue with only required fields: POST request to /api/issues/{project}
V   Create an issue with missing required fields: POST request to /api/issues/{project}
V   View issues on a project: GET request to /api/issues/{project}
V   View issues on a project with one filter: GET request to /api/issues/{project}
V   View issues on a project with multiple filters: GET request to /api/issues/{project}
V   Update one field on an issue: PUT request to /api/issues/{project}
V   Update multiple fields on an issue: PUT request to /api/issues/{project}
V   Update an issue with missing _id: PUT request to /api/issues/{project}
V   Update an issue with no fields to update: PUT request to /api/issues/{project}
V   Update an issue with an invalid _id: PUT request to /api/issues/{project}
V   Delete an issue: DELETE request to /api/issues/{project}
V   Delete an issue with an invalid _id: DELETE request to /api/issues/{project}
V   Delete an issue with missing _id: DELETE request to /api/issues/{project}
