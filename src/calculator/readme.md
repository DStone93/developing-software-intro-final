# Step 1 & 2 
 Can be found in `readme.md` in src/commands/readme.md [Read More](../commands/readme.md)
---
# Step 3
## calcHouseMaterials
I've created a function to test incoming paramaters from a CLI that has the required plugins. If you would like to know what you need to install for this application see to the `README.md` [Read More](../../README.md)
### function `calcHouseMaterials`:
    name: string,
    width: number,
    length: number,
    units: boolean 

This function was designed to make sure `calc-house-materials`(command) is working correctly. 

As `calc-house-materials` is going to be passing in the name of the client I needed to create a string paramater.
Of course, width and length input will be normally in inches but if the client chooses the input to be in feet; I created a boolean to flag the switch to feet.

## Usage 
```
npm run start -- calc-house-materials -w 8 -l 8 --isFeet --client gerald
```
Running this command returned:
```
gerald 8 8 true
Hello
```

Updated version to 1.22.0

---
# getHouseMaterials
I've created a function to test incoming paramaters from a CLI that has the required plugins. If you would like to know what you need to install for this application see to the `README.md` [Read More](../../README.md)

`function` getHouseMaterials (name:string)

This function was designed to make sure `get-house-materials`(command) is working correctly. 

The purpose of this function is call to the future saved houses by the clients name for easy recall.

## Usage
```
npm run start -- get-house-materials --name Gerald
```

## Returns
```
Gerald
```

---
# Step 4
* As required, I made an interface that is used to return the output as Gerald requested. It can be found in src/calculator/interfaces.ts

* I had to change `calcHouseMaterials` and `getHouseMaterials` to return the same output as the inteface

---

## Usage of `calcHouseMaterials`
```
npm run start -- calc-house-materials -w 8 -l 8 --isFeet --client gerald
```

## Returns 
```
{
  name: 'gerald',
  house: {
    width: 8,
    length: 8,
    outsideWallArea: 0,
    insideWallArea: 0,
    ceilingArea: 0
  },
  materials: {
    lumber: { '2x4': 0, '4x4': 0 },
    plywood: { '4x8': 0 },
    drywall: { '4x8': 0 }
  },
  waste: {
    lumber: { '2x4': 0, '4x4': 0 },
    plywood: { '4x8': 0 },
    drywall: { '4x8': 0 }
  },
  purchase: {
    lumber: { '2x4': 0, '4x4': 0 },
    plywood: { '4x8': 0 },
    drywall: { '4x8': 0 }
  }
}
```

## Usage of `getHouseMaterials`
```
npm run start -- get-house-materials --name Gerald
```

## Returns 
```
{
  name: 'Gerald',
  house: {
    width: 0,
    length: 0,
    outsideWallArea: 0,
    insideWallArea: 0,
    ceilingArea: 0
  },
  materials: {
    lumber: { '2x4': 0, '4x4': 0 },
    plywood: { '4x8': 0 },
    drywall: { '4x8': 0 }
  },
  waste: {
    lumber: { '2x4': 0, '4x4': 0 },
    plywood: { '4x8': 0 },
    drywall: { '4x8': 0 }
  },
  purchase: {
    lumber: { '2x4': 0, '4x4': 0 },
    plywood: { '4x8': 0 },
    drywall: { '4x8': 0 }
  }
}
```

* Updated version to 1.24.0

* Commited changes with an appropriate description

---
# Step 5
Added `calcWallLumber` to return the amount of plates, studs and posts required for a single wall.

As this function requires additional calculations I reused functions from assignment 3.
```
function getPlatesInLength
function getRequiredBeamsInLength
function getStudsInLength 
function getRequiredBeamsInLength
function getWallLengthOverMinimumRequiredBeforeBeam
```
## Usage with isFeet flag true
```
npm run start -- calc-house-materials -w 8 -l 8 --isFeet --client gerald
```

## Returns
```
{ plates: 3, studs: 7, posts: 0 }
true Console log for if isFeet is true or false
{
  name: 'gerald',
  house: {
    width: 96,
    length: 96,
    outsideWallArea: 0,
    insideWallArea: 0,
    ceilingArea: 0
  },
  materials: {
    lumber: { '2x4': 0, '4x4': 0 },
    plywood: { '4x8': 0 },
    drywall: { '4x8': 0 }
  },
  waste: {
    lumber: { '2x4': 0, '4x4': 0 },
    plywood: { '4x8': 0 },
    drywall: { '4x8': 0 }
  },
  purchase: {
    lumber: { '2x4': 0, '4x4': 0 },
    plywood: { '4x8': 0 },
    drywall: { '4x8': 0 }
  }
}
```

* Updated version to 1.25.0
* Commited changes with an appropriate description

---
# Step 6
Added `calcDrywall` to calculate the amount of drywall needed for a house.

Takes in Width:number and length:number to return the amount of drywall needed
* Note that the drywall needed is for the inner portion of the house
* Each wall needs to have -7" subtracted as each corner is -3.5"
* There are two width walls so total is -14"
* Drywall covers the additional beams
* Currently is not in use as it is not yet required

## Example 16x24
```
ceil area = 48,772   (178(16) * 274(24))
dwLengthAmount = 12 ( innerLength / dwWidth * 2 )
dwWidthAmount = 8 ( innerWidth / dwWidth * 2 )
dwArea = 4,608 (dwWidth * dwHeight)
ceilingSheets = 11 (48,722(ceil area) / dwArea(4,608) )
Added all together is 31 dry wall sheets
```
Updated version to 1.26.0

Commited changes with an appropriate description

---
# Step 7
Added `calcPlywood` to return the total amount of plywood needed for just the exterior walls

Takes in width:number and length:number to return the amount of plywood needed
* No subtractions are needed for the exterior dimensions as the plywood covers all of it

## Example
```
pwLengthAmount = 12 ( length / pwWidth * 2 )
pwWidthAmount = 8 ( width/ pwWidth * 2 )
Added together totals 20 plywood sheets for a 16x24 house
```

Updated version to 1.27.0

Commited changes with an appropriate description