import { execFileSync } from 'child_process';
import { executable } from './variables.js';

/**
 * @function getAvailableMarkets
 * @description Get all of the available markets for an exchange
 * @param {string} exchangeCode - Exchange to use. can be code: 'kucn' or name: 'kucoin'
 * @returns {array} returns an array of objects
 *
 * @example
 *
 *    const gdaxMarkets = getAvailableMarkets('gdax');
 */

export default function getAvailableMarkets(exchangeCode) {
  const stdout = execFileSync(executable, ['markets', `--exchange=${exchangeCode}`]);
  return JSON.parse(stdout);
}
