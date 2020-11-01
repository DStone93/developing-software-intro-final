import { IHouseDimensions } from "./interfaces";

const BEAM_WIDTH = 3.5;
const BOARD_LENGTH = 8 * 12;
const STUDS_OFFSET = 16;
const BEAMS_REQUIRED_EVERY_INCHES = 20 * 12;
const FULL_BOARDS_IN_SECTION = Math.floor(
    BEAMS_REQUIRED_EVERY_INCHES / BOARD_LENGTH
);
const FULL_BOARD_SECTION_SIZE = FULL_BOARDS_IN_SECTION * BOARD_LENGTH;

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

function isBeamRequired(inches: number): number {
    // negative numbers are zero
    const wallLengthOverMinRequired = Math.max(
        inches - BEAMS_REQUIRED_EVERY_INCHES,
        0
    );

    // remove decimals
    const wholeNumber = Math.ceil(wallLengthOverMinRequired);

    // returns 1 (at least one beam required ) or 0 (no beams required)
    const isBeamRequired = Math.min(wholeNumber, 1);

    return isBeamRequired;
}

function getFullSections(inches: number, beams: number) {
    // how many inches will we remove from a section between beams to get to the last full board
    const inchesReducedPerSection =
        BEAMS_REQUIRED_EVERY_INCHES - FULL_BOARD_SECTION_SIZE;

    // how big is the last section if all beams are at BEAMS_REQUIRED_EVERY_INCHES
    const lastSectionSize =
        inches - beams * (BEAMS_REQUIRED_EVERY_INCHES + BEAM_WIDTH);

    // how many inches of boards can we add to the last section before it will add an additional beam to the structure
    const remainingBeforeNewBeam =
        BEAMS_REQUIRED_EVERY_INCHES - lastSectionSize;

    // how many complete portions of the inchesReducedPerSection can we move to the last section
    let fullSections = Math.floor(
        remainingBeforeNewBeam / inchesReducedPerSection
    );

    // even if we can FIT fullSections moved into the last portion, we might not HAVE them in our length
    fullSections = Math.min(fullSections, beams);

    // safeguard inches not requiring a beam and return value
    fullSections = fullSections * isBeamRequired(inches);

    return fullSections;
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

//Function to calculate the required amount of drywall sheets for the house
export function calcDrywall(width: number, length: number) {
    // We need to calculate the innerwall length 
    // Each inner corner is minus 3.5" so one width wall is minus 7" x 2 for both sides
    // same applies for the length
    const innerWidth = width - 14
    const innerLength = length - 14
    
    // drywall sheets are 4 by 8'
    // Need to calculate the amount of drywall for the walls and ceiling
    const dwWidth = 48; // 4 x 12 for width
    const dwHeight = 96; // 8 x 12 for height
    const dwArea = dwWidth * dwHeight;

    // ceiling drywall
    const ceilingArea = innerWidth * innerLength;
    
    // length of both length walls divided by the width of one drywall sheet
    const dwLengthAmount = Math.ceil(innerLength / dwWidth) * 2;

    // width of both width walls divided by the width of one drywall sheet
    const dwWidthAmount = Math.ceil(innerWidth / dwWidth) * 2;

    // Amount of drywallsheet required for the ceiling
    const ceilingSheets = Math.ceil(ceilingArea / dwArea);

    return dwLengthAmount + dwWidthAmount + ceilingSheets;
}

//function to calculate the amount of plywood needed
export function calcPlywood (width:number, length:number){
    // plywood sheets are 4 by 8'
    const pwWidth = 48; // 4 x 12 for width

    // length of both length walls divided by the width of one plywood sheet
    const pwLengthAmount = Math.ceil(length / pwWidth) * 2;

    // width of both width walls divided by the width of one plywood sheet
    const pwWidthAmount = Math.ceil(width / pwWidth) * 2;
    
    return pwLengthAmount + pwWidthAmount 
}


function calcMaterials (
    width:number, 
    length:number, 
    calcWallLumber: any,
    calcDrywall:any,
    calcPlywood:any
) :IHouseDimensions {
    const wallLumber = calcWallLumber(width) + calcWallLumber(length)
    const dryWall = calcDrywall(width) + calcDrywall(length)
    const plyWood = calcPlywood(calcPlywood.width) + calcPlywood(calcPlywood.length)
    return {
        name: "test",
        house: {
            width: width,
            length: length,
            outsideWallArea: 0,
            insideWallArea: 0,
            ceilingArea: 0,
        },
        materials: {
            lumber: {
                "2x4": (wallLumber.studs * 2) + (wallLumber.plates * 2),
                "4x4": wallLumber.posts + 4,
            },
            
            plywood: {
                "4x8": plyWood,
            },
            drywall: {
                "4x8": dryWall,
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


