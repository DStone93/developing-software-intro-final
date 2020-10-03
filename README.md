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