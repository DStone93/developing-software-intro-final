import { IHouseDimensions } from "./interfaces";

const BEAM_WIDTH = 3.5;
const BOARD_LENGTH = 8 * 12;
const STUDS_OFFSET = 16;
const BEAMS_REQUIRED_EVERY_INCHES = 20 * 12;

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

    if (width < 48 || width > 720 || length < 48 || length > 720) {
        throw RangeError(
            "Houses cannot be smaller than 4 feet or greater than 60 feet."
        );
    }

    const wallLumberLength = calcWallLumber(length);
    const wallLumberWidth = calcWallLumber(width);

    const totalBoards = wallLumberLength.studs * 2 + wallLumberWidth.studs * 2;
    const totalPosts = wallLumberLength.posts + wallLumberLength.posts;

    return {
        name: name,
        house: {
            width: width,
            length: length,
            outsideWallArea: length * width * 4,
            insideWallArea: (length - 7) * (width - 7) * 4,
            ceilingArea: length * width,
        },
        materials: {
            lumber: {
                "2x4": totalBoards,
                "4x4": totalPosts + 4,
            },
            plywood: {
                "4x8": calcPlywood(width, length),
            },
            drywall: {
                "4x8": calcDrywall(width, length),
            },
        },
        waste: {
            lumber: {
                "2x4": calcWaste(totalBoards),
                "4x4": calcWaste(totalPosts + 4),
            },
            plywood: {
                "4x8": calcWaste(calcPlywood(width, length)),
            },
            drywall: {
                "4x8": calcWaste(calcDrywall(width, length)),
            },
        },
        purchase: {
            lumber: {
                "2x4": calcPurchase(totalBoards),
                "4x4": calcPurchase(totalPosts + 4),
            },
            plywood: {
                "4x8": calcPurchase(calcPlywood(width, length)),
            },
            drywall: {
                "4x8": calcPurchase(calcDrywall(width, length)),
            },
        },
    };
}

// function that will be used to return saved clients and their lumber requirements
export function getHouseMaterials(name: string): IHouseDimensions {
    return;
}

function feetToInches(feet: number) {
    return feet * 12;
}

export function calcWaste(waste: number) {
    let materialForWaste = Math.ceil(waste * 0.1);
    return materialForWaste;
}

export function calcPurchase(timber: number) {
    let purchase = calcWaste(timber);
    let total = purchase + timber;
    return total;
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

//Function to calculate the required amount of drywall sheets for the house
export function calcDrywall(width: number, length: number) {
    // We need to calculate the innerwall length
    // Each inner corner is minus 3.5" so one width wall is minus 7" x 2 for both sides
    // same applies for the length
    const innerWidth = width - 14;
    const innerLength = length - 14;

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
export function calcPlywood(width: number, length: number) {
    // plywood sheets are 4 by 8'
    const pwWidth = 48; // 4 x 12 for width

    // length of both length walls divided by the width of one plywood sheet
    const pwLengthAmount = Math.ceil(length / pwWidth) * 2;

    // width of both width walls divided by the width of one plywood sheet
    const pwWidthAmount = Math.ceil(width / pwWidth) * 2;

    return pwLengthAmount + pwWidthAmount;
}
