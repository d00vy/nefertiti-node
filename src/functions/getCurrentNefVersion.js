import { execFileSync } from 'child_process';
import { executable } from './variables.js';

/**
 * @function getCurrentNefVersion
 * @description Check the current version of Nefertiti
 * @returns {string} - current version of Nefertiti
 * @example
 *    const currentVersion = getCurrentNefVersion();
      console.log(currentVersion);
 */

export default function checkNefVersion() {
  const stdout = execFileSync(executable, ['--version']);
  return stdout.toString();
}
