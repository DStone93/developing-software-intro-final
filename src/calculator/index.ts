// Simple function to be called from calc-house-materials in src/commands
export function calcHouseMaterials(
    name: string,
    width: number,
    length: number,
    units: boolean
) {
    console.log(name, width, length, units);
    return "Hello";
    /* Expected 
    gerald 8 8 true
    Hello*/
}

export function getHouseMaterials(name:string){
    return name;
    // Expected "Gerald"
}