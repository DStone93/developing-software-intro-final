## calcHouseMaterials
I've created a function to test incoming paramaters from a CLI that has the required plugins.
### function `calcHouseMaterials`:
    name: string,
    width: number,
    length: number,
    units: boolean 

This function was designed to make sure `get-house-materials`(command) is working correctly. 

As `get-house-materials` is going to be passing in the name of the client I needed to create a string paramater.
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

---
Updated version to 1.22.0

