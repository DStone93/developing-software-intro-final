import { HouseMaterials } from "../commands/calc-house-materials";
import { IHouseDimensions } from "./interfaces";

// Simple function to be called from calc-house-materials in src/commands
export function calcHouseMaterials(
    name: string,
    width: number,
    length: number,
    units?: boolean
): IHouseDimensions {
    return {
        name: name,
        house: {
            width: width,
            length: length,
            outsideWallArea: 0,
            insideWallArea: 0,
            ceilingArea: 0,
        },
        materials: {
            lumber: {
                "2x4": 0,
                "4x4": 0,
            },
            plywood: {
                "4x8": 0,
            },
            drywall: {
                "4x8": 0,
            },
        },
        waste: {
            lumber: {
                "2x4": 0,
                "4x4": 0,
            },
            plywood: {
                "4x8": 0,
            },
            drywall: {
                "4x8": 0,
            },
        },
        purchase: {
            lumber: {
                "2x4": 0,
                "4x4": 0,
            },
            plywood: {
                "4x8": 0,
            },
            drywall: {
                "4x8": 0,
            },
        },
    };
}

export function getHouseMaterials(name: string): IHouseDimensions {
    return {
        name: name,
        house: {
            width: 0,
            length: 0,
            outsideWallArea: 0,
            insideWallArea: 0,
            ceilingArea: 0,
        },
        materials: {
            lumber: {
                "2x4": 0,
                "4x4": 0,
            },
            plywood: {
                "4x8": 0,
            },
            drywall: {
                "4x8": 0,
            },
        },
        waste: {
            lumber: {
                "2x4": 0,
                "4x4": 0,
            },
            plywood: {
                "4x8": 0,
            },
            drywall: {
                "4x8": 0,
            },
        },
        purchase: {
            lumber: {
                "2x4": 0,
                "4x4": 0,
            },
            plywood: {
                "4x8": 0,
            },
            drywall: {
                "4x8": 0,
            },
        },
    };

}

// function InchesTofeet (number:number){
//     let newNumber = number / 12;
//     return newNumber
// }
