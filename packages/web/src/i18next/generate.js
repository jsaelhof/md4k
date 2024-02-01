import readline from "readline";
import fs from "fs";
import { tocForResources } from "i18next-resources-for-ts";

// Read the list of files from stdin.
// This depends on a package.json script that finds all the .json files and pipes them in like so:
// "find ./src -path '*/i18n/en/*.json' | node ./src/i18next/generate.js"
const rl = readline.createInterface({
  input: process.stdin,
});

const resources = [];

for await (const path of rl) {
  resources.push({
    name: (path.split("/").at(-1) ?? "").split(".")[0], // get the namespace from the filename (minus .json etx)
    path: path.replace("./src", ".."), // need to do this because of where the file gets output
  });
}

fs.writeFileSync(
  "./src/__generated__/resources.ts",
  tocForResources(resources, "")
);
