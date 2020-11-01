import { IHouseDimensions } from "./interfaces";

const BEAM_WIDTH = 3.5;
const BOARD_LENGTH = 8 * 12;
const STUDS_OFFSET = 16;
const BEAMS_REQUIRED_EVERY_INCHES = 20 * 12;

function feetToInches(feet: number) {
    return feet * 12;
}

// Simple function to be called from calc-house-materials in src/commands
export function calcHouseMaterials(
    name: string,
    width: number,
    length: number,
    units: boolean
): IHouseDimensions {
    if (units == true) {
        width = feetToInches(width);
        length = feetToInches(length);
        console.log(units,"Console log for if isFeet is true or false")
    }

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

// function that will be used to return saved clients and their lumber requirements
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

function getPlatesInLength(inches: number) {
    // devide the length by 96 inches (8 feet) and round up
    // multiply by three because we're doing the top and bottom in one calculation
    return Math.ceil(inches / BOARD_LENGTH) * 3;
}

function getStudsInLength(inches: number) {
    // calculate the studs across
    // round up to account for the last one
    const studs = Math.ceil(inches / STUDS_OFFSET);

    // make sure we add an end piece if we have a perfect multiple of 16
    const isNotPerfectWidth = Math.min(inches % STUDS_OFFSET, 1);
    const perfectWidthExtension = isNotPerfectWidth * -1 + 1;
    return studs + perfectWidthExtension;
}

// function getBoardsInLength(inches: number): number {
//     const plates = getPlatesInLength(inches);
//     const studs = getStudsInLength(inches);

//     return plates + studs;
// }

function getRequiredBeamsInLength(inches: number) {
    // for every 20 feet, we need one beam
    // we know our wall is at least 20 feet, so calculate the required beams for the REST of the wall
    // if our wall is under 20 feet, this will return zero
    const wallLengthOverMinRequired = getWallLengthOverMinimumRequiredBeforeBeam(
        inches
    );
    const wallLengthPlusBeam = BEAMS_REQUIRED_EVERY_INCHES + BEAM_WIDTH;
    const requiredBeams = Math.ceil(
        wallLengthOverMinRequired / wallLengthPlusBeam
    );

    return requiredBeams;
}

function getWallLengthOverMinimumRequiredBeforeBeam(inches: number): number {
    return Math.max(inches - BEAMS_REQUIRED_EVERY_INCHES, 0);
}

export function calcWallLumber(inches: number) {
    //In the order of what the function will return
    const plates = getPlatesInLength(inches);
    const studs = getStudsInLength(inches);
    const posts = getRequiredBeamsInLength(inches);
    return {
        plates: plates,
        studs: studs,
        posts: posts,
    };
}

console.log(calcWallLumber(96));
