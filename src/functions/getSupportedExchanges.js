import { execFileSync } from 'child_process';
import { executable } from './variables.js';

/**
 * @function getSupportedExchanges
 * @description Check which exchanges are currently supported by Nefertiti
 * @returns {array} - an array of objects of each supported exchange
 * @example
 *    const availableExchanges = getSupportedExchanges();
 *    console.log(availableExchanges)
 */

export default function getSupportedExchanges() {
  const stdout = execFileSync(executable, ['exchanges']);
  return JSON.parse(stdout);
}
