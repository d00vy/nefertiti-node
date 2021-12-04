import { readdir, readdirSync } from 'fs';
import * as helpers from '../src/helpers/index.js';
import * as variables from '../src/functions/variables.js';

// Check if the ./bin folder is empty, and if it is, download Nefertiti
readdir(variables.executablePath, (err, files) => {
  if (err) {
    throw new Error(`Error reading ${variables.executablePath}: ${err}`);
  }
  if (
    files.length <= 1
    && readdirSync(variables.executablePath).filter((fn) => fn.includes('nefertiti')).length === 0
  ) {
    helpers.downloadNefertiti();
  }
});
