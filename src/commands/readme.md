Gerald's Construction Calculator

![SoftwareInstructions]
---
# Yargs
Created and checked out branch feature/yargs
Installed yargs using:
  +  npm i @types/yargs --save-dev


Versioned project to 1.21.0

----
# calcHouseMaterials
Created and checked out branch feature/calculator

Created a folder within `src` called calculator
Inside of src/calculator made the file `index.ts`

Contstructed the function `calcHouseMaterials` to pass in and return parameters using console.log
```
npm run start -- calc-house-materials -w 96 -l 96 --client Gerald
```

Updated calc-house-materials in `commands/calc-house-materials` to command the new function.

Made a `readme` for the new functions purpose and how to use it.
[Read More](/src/calculator/readme.md)

Added in version 1.22.0

---
# getHouseMaterials
Created a function in `src/calculator/index.ts` to pass in and return parameters from the CLI in future versions.
```
npm run start -- get-house-materials --name Gerald
```
Updated calc-house-materials in `commands/get-house-materials` to command the new function.

Updated `./src/calculator/readme.md`

Added in version 1.23.0

---

[SoftwareInstructions]: https://rapidapi.com/blog/wp-content/uploads/2019/07/background-bit-bytes-2004161-768x512.jpg

