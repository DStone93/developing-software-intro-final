# Focus College ACSD Final

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---

# acsd-final-derrick

## Step 1:
* Forked Focus-College developing-software-intro-final
* Cloned my repositories branch
* From master, Created and checked out `feature/npm`
* Initalized project as an NPM Package using:
```
npm init
```
* Commited new changes
* Merged branch into master

## Step 2:
* From my master branch, created and checked out `feature/typescript`
* Added typescript to my project using:
```
npm install --save-dev typescript
```
* Added NPM scripts:
  + "compile": "tsc",
  + "start": "node dist/index.js",
  + "build": "npm run compile && npm run start"
* To use these scripts run:
```
tsc
npm run start
npm run build
```
* Updated version
* Commit changes with an appropriate description

## Step 3:
* From my master branch, created and checked out `feature/lint`
* Added ESLint to my project using:
  + npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
* Added .eslintrc & .eslintignore
  + Inside of .eslintrc i've included
  ```
  {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
      "@typescript-eslint"
    ],
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
    ]
  }
  ```
  * Inside of .eslintignore:
  ```
  node_modules
  dist
  ```
* Modified/Updated package.json to:
  + "compile": "tsc",
  + "start": "node dist/index.js",
  + "lint": "eslint . --ext .ts",
  + "build": "npm run compile && npm run start",
  + "build:lint": "npm run lint && npm run compile && npm run start"
* To use these scripts use:
```
tsc
npm run start
npm run lint
npm run build
npm run build:lint
```
* Updated version
* Commit changes with an appropriate description

## Step 4:
* From my master branch, created and checked out `feature/format`
* Added Prettier to my project using:
  + npm install --save-dev --save-exact prettier
* Added .prettierignore with:
  + node_modules
  + dist
* Inside of .prettierrc.json has:
```
{
    "tabWidth": 4,
    "bracketSpacing": true
}
```


* Modified/Updated package.json to:
  + "compile": "tsc",
  + "start": "node dist/index.js",
  + "lint": "eslint . --ext .ts",
  + "build:prettier": "prettier --write src/**/*.ts",
  + "build": "npm run compile && npm run start",
  + "build:lint:prettier": "npm run lint && npm run build:prettier && npm run compile && npm run start"
* To use these scripts use:
```
tsc
npm run start
npm run lint
npm run prettier
npm run build
npm run build:lint:prettier
// title of commands do not signify order of execution
```

* Updated version
* Commit changes with an appropriate description

## Step 5:
* From my master branch, created and checked out `feature/testing`
* Installed mocha/chai using:
  + npm install chai mocha ts-node @types/chai @types/mocha --save-dev
* Created a new folder named "tests"
* Inside of tests, created a file named "default.spec.ts" with:
```
import { hello } from '../src/index';
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {

  it('should return hello world', () => {
    const result = hello();
    expect(result).to.equal('Hello world!');
  });

});
```
* Changed `index.ts` to contain:
```
// Test to make sure mocha/chai works
export const hello = () => 'Hello world!'; 
```

* Modified/Updated package.json to: 
  + "compile": "tsc",
  + "start": "node dist/index.js",
  + "lint": "eslint . --ext .ts",
  + "prettier": "prettier --write src/**/*.ts",
  + "test": "mocha -r ts-node/register tests/**/*.spec.ts",
  + "build": "npm run compile && npm run start",
  + "fix:run": "npm run lint && npm run prettier && npm run test && npm run compile && npm run start"

* To use these commands use:
  ```
  tsc
  npm run start
  npm run lint
  npm run prettier
  npm run test
  npm run build
  npm run fix:run
  ```
* Updated version
* Commit changes with an appropriate description