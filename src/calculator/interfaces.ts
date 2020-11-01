export interface IHouseDimensions {
    name: string;
    house: {
        width: number;
        length: number;
        outsideWallArea: number;
        insideWallArea: number;
        ceilingArea: number;
    };
    materials: {
        lumber: {
            "2x4": number;
            "4x4": number;
        };
        plywood: {
            "4x8": number;
        };
        drywall: {
            "4x8": number;
        };
    };
    waste: {
        lumber: {
            "2x4": number;
            "4x4": number;
        };
        plywood: {
            "4x8": number;
        };
        drywall: {
            "4x8": number;
        };
    };
    purchase: {
        lumber: {
            "2x4": number;
            "4x4": number;
        };
        plywood: {
            "4x8": number;
        };
        drywall: {
            "4x8": number;
        };
    };
}
