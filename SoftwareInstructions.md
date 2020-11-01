Gerald's Construction Calculator

![SoftwareInstructions]
---
# Yargs
Created and checked out branch feature/yargs
Installed yargs using:
  +  npm i @types/yargs --save-dev

Setup two commands in a new folder within the src folder
  + calc-house-materials
 ~~[Read More](./src/commands/calc-house-materials.ts)~~
  + get-house-materials
~~[Read More](./src/commands/calc-house-materials.ts)~~
  + // Requirements are to setup two commands for further coding 

Versioned project to 1.21.0

----
# calcHouseMaterials
Created and checked out branch feature/calculator

Created a folder within `src` called calculator
Inside of src/calculator made the file `index.ts`

Contstructed the function `calcHouseMaterials` to pass in and return parameters using console.log
```
name
width
length
units
```

Updated calc-house-materials in `commands/calc-house-materials` to command the new function.

Made a `readme` for the new functions purpose and how to use it.
[Read More](./src/calculator/readme.md)

Updated version to 1.22.0

---
# getHouseMaterials
Created a function in `src/calculator/index.ts` to pass in and return parameters the CLI using console.log
```
npm run start -- get-house-materials --name Gerald
```
Updated calc-house-materials in `commands/get-house-materials` to command the new function.

Updated `./src/calculator/readme.md`

Versioned package to 1.23.0

---
# feetToInches
Added `feetToInches` to convert feet to inches if the "isFeet" flag is true.
```
npm run start -- calc-house-materials -w 8 -l 8 --isFeet --client gerald

"true Console log for if isFeet is true or false"
```
---
# getPlatesInLength
Takes in inches and calculates the amount of plates needed for a single wall.
* Divides by 96(one board length) and rounds up
* Multiplies by three as per Geralds requirements

---
# getRequiredBeamsInLength
For every 20 feet an additional beam is required for structural support

---
# calcWallLumber
Takes in `getPlatesInLength`, `getStudsInLength` and `getRequiredBeamsInLength` to return the amount of plates, studs and posts required for a single wall.

























[SoftwareInstructions]: https://rapidapi.com/blog/wp-content/uploads/2019/07/background-bit-bytes-2004161-768x512.jpg

