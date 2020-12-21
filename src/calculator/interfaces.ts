import fs = require("fs");

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

export class Houses extends Map<string, IHouseDimensions> {
    private static data = {
        path: `${__dirname}/../data`,
    };

    private static getSaveLocation(): string {
        if (!fs.existsSync(Houses.data.path)) {
            fs.mkdirSync(Houses.data.path);
        }

        return Houses.data.path;
    }

    public static getAll(): Houses {
        const dataFolder = this.getSaveLocation();
        const contents: fs.Dirent[] = fs.readdirSync(dataFolder, {
            withFileTypes: true,
        });

        const houseData: IHouseDimensions[] = contents.map(
            (file: fs.Dirent): IHouseDimensions => {
                const json = fs.readFileSync(`${dataFolder}/${file.name}`, {
                    encoding: "utf-8",
                });
                return JSON.parse(json);
            }
        );

        const houses = new Houses();

        return houses;
    }

    public static save(house: IHouseDimensions): void {
        const data: any = {
            name: house.name,
            house: {
                width: house.house.width,
                length: house.house.length,
                outsideWallArea: house.house.outsideWallArea,
                insideWallArea: house.house.insideWallArea,
                ceilingArea: house.house.ceilingArea,
            },
            materials: {
                lumber: {
                    "2x4": house.materials.lumber["2x4"],
                    "4x4": house.materials.lumber["4x4"],
                },
                plywood: {
                    "4x8": house.materials.plywood["4x8"],
                },
                drywall: {
                    "4x8": house.materials.drywall["4x8"],
                },
            },
            waste: {
                lumber: {
                    "2x4": house.waste.lumber["2x4"],
                    "4x4": house.waste.lumber["4x4"],
                },
                plywood: {
                    "4x8": house.waste.plywood["4x8"],
                },
                drywall: {
                    "4x8": house.waste.drywall["4x8"],
                },
                purchase: {
                    lumber: {
                        "2x4": house.purchase.lumber["2x4"],
                        "4x4": house.purchase.lumber["4x4"],
                    },
                    plywood: {
                        "4x8": house.purchase.plywood["4x8"],
                    },
                    drywall: {
                        "4x8": house.purchase.drywall["4x8"],
                    },
                },
            },
        };

        fs.writeFileSync(
            `${Houses.getSaveLocation()}/${house.name}.json`,
            JSON.stringify(data, null, 4),
            { encoding: "utf-8" }
        );
    }
}
