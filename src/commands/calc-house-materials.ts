import yargs = require("yargs");
import { Arguments, Argv } from "yargs";
import { calcHouseMaterials } from "../calculator/index";
import { calcWallLumber } from "../calculator/index";
export function HouseMaterials(yargs: Argv): void {
    // create a new yargs "command"
    yargs.command(
        // name the command with no spaces
        "calc-house-materials",

        // describe the command so that the --help flag is helpful
        "Calculate the required lumber to build a house with given dimensions",

        // define the parameters we need for our command
        {
            width: {
                type: "number",
                alias: "w",
                description: "The width of the house",
            },

            length: {
                type: "number",
                alias: "l",
                description: "The length of the house",
            },

            isFeet: {
                type: "boolean",
                alias: "feet",
                description: "The flag to toggle input as feet",
            },

            name: {
                type: "string",
                alias: "client",
                description: "Name of the customer",
            },
        },
        // define the function we want to run once the arguments are parsed
        function (
            args: Arguments<{
                name: string;
                width: number;
                length: number;
                isFeet: boolean;
                client: string;
                w: number;
                l: number;
                f: boolean;
            }>
        ) {
            // As per step 1: Yargs
            // Create two commands (1/2) for further coding
            // Each command should use console.log to output the parameters passed
            const requirements = calcHouseMaterials(
                args.name,
                args.width,
                args.length,
                args.isFeet
            );

            console.log(requirements);
        }
    );
}

yargs.help();
yargs.parse();
