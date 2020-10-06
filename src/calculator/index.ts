import { IHouseDimensions} from "./interfaces"

// Simple function to be called from calc-house-materials in src/commands
export function calcHouseMaterials(
    name: string,
    width: number,
    length: number,
    units: boolean
) {
    return { name, width, length, units }
    /* Expected 
    { name: 'gerald', width: 8, length: 8, units: true } 5*/
};

export function getHouseMaterials(name: string) {
    return name;
    // Expected "Gerald"
};
