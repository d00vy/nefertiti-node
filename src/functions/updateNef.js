import { execFileSync } from 'child_process';
import { executable } from './variables.js';

/**
 * @function updateNef
 * @description Update the Nefertiti binary to the latest version
 * @returns {string} - the results of the update, including version
 */

export default function updateNef() {
  try {
    const stdout = execFileSync(executable, ['update']);
    return stdout.toString();
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
}
