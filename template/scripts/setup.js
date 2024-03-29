// Update the default package.json
const { execSync } = require("child_process");
const fs = require("fs");
const data = fs.readFileSync("package.json", {encoding:"utf8"});
const objects = JSON.parse(data);
const updatedObjects = {
  ...objects,
  "scripts": {
    ...objects.scripts,
    "start": "yarn css-build && react-scripts start",
    "test": "react-scripts test --coverage",
    "lint": "yarn eslint --ext .ts,.tsx src/ --fix",
    "css-build": "node-sass --omit-source-map-url src/App.scss src/App.autogen.css",
    "css-watch": "yarn css-build -- --watch",
    "cors": "git submodule init && git submodule update && cd cors-anywhere && yarn && node server.js"
  },
  "jest": {
    "resetMocks": false,
    "collectCoverageFrom": ["./src/**"],
    "coverageThreshold": {
      "global": {
        "lines": 90
      }
    },
    "coveragePathIgnorePatterns": [
      "reportWebVitals.ts",
      "react-app-env.d.ts",
      "index.tsx"
    ]
  }
};
console.log(updatedObjects);
fs.writeFileSync("package.json", JSON.stringify(updatedObjects, null, 2));
execSync("yarn");

// git add submodules
execSync("git submodule add https://github.com/Rob--W/cors-anywhere.git cors-anywhere");

// generate the CSS file
execSync("yarn css-build");
