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