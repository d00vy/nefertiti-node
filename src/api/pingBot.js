import fetch from 'node-fetch';
import { nefertitiURL as nef } from '../functions/variables.js';

/**
 * @function pingBot
 * @description Request information for a specific bot
 * 
 * @param {string|number} port The port that the bot is running on.
 * @returns {Promise<object>} Returns a JSON object
 * 
 * @example
 * // Call the function and chain it with .then():
 *
 * pingBot(38701).then((results)=>{console.log(results)})
 *
 * // or await it
 *
 * const sellBot = await pingBot(38701)
 * 
 * // Return object example:
 * {
 *   port: 38701,
 *   command: 'sell',
 *   args: [ 'listen',...]
 * }
 */

export default async function pingBot(port) {
  console.log(`Fetching bot ${port} from Nefertiti listen server...`);
  try {
    const res = await fetch(`${nef.hostname}:${port}${nef.ping}`);
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
