import yargs = require("yargs");
import { Arguments, Argv } from "yargs";
import { getHouseMaterials } from "../calculator/index";

export function getHouse(yargs: Argv): void {
    // create a new yargs "command"
    yargs.command(
        // name the command with no spaces
        "get-house-materials",

        // describe the command so that the --help flag is helpful
        "Command to recall required lumber by the clients name",

        // define the parameters we need for our command
        {
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
                client: string;
            }>
        ) {
            // As per step 1: Yargs
            // Create two commands (2/2) for further coding
            // Each command should use console.log to output the parameters passed
            try {
                let jsonData = require(`../../dist/data/${args.name}.json`);
                console.log(jsonData);
            } catch (err) {
                console.log("No such Customer exists");
            }
        }
    );
}

yargs.help();
yargs.parse();
