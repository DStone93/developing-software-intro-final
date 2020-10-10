export interface IHouseDimensions {
    width: number;
    length: number;
    outsideWallArea?: 0;
    insideWallArea?: 0;
    ceilingArea?: 0;
}
interface Imaterials {
    lumber: {
        "2x4": number;
        "4x4": 0;
    };
    plywood: {
        "4x8": 0;
    };
    drywall: {
        "4x8": 0;
    };
}
const waste: Imaterials = {
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
};
const purchase: Imaterials = {
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
};
