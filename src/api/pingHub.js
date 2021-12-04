import fetch from 'node-fetch';
import { nefertitiURL as nef } from '../functions/variables.js';

/**
 * @function pingHub
 * @description Ping the listen server to get all running bots
 * @returns {Promise<object>} Returns an array of objects
 * @example
 * // Call the function and chain it with .then():
 *
 * pingHub().then((results) => {
 *       results.forEach((bot) => console.log(bot.port, bot.command));
 *     console.log(results, results.length);
 *   });
 * 
 * // Return object example:
 * [{
 *   port: 38701,
 *   command: 'sell',
 *   args: ['listen',...]
 * },
 * {
 *   port: 38702,
 *   command: 'buy',
 *   args: ['listen',...]
 * }]
 */

export default async function pingHub() {
  console.log('Fetching bots from Nefertiti listen server...');
  try {
    const res = await fetch(`${nef.hostname}:${nef.port}${nef.ping}`);
    return res.json();
  } catch (err) {
    if (err.code === 'ECONNREFUSED') {
      const fetchErr =
        'There was an error connecting to Nefertiti. This usually means the listen server has not started, or cannot be reached at 127.0.0.1:38700';
      return new Error(fetchErr);
    }
    return new Error(`There was an error: ${err}`);
  }
}
