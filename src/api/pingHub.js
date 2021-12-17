import axios from 'axios';
import { nefertitiURL as nef } from '../functions/variables.js';

/**
 * @function pingHub
 * @description Ping the listen server to get all running bots
 * @returns {JSON} Returns parsed JSON array of objects
 * @example
 * // Call the function and chain it with .then():
 *
 * pingHub().then((results) => {
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
  // eslint-disable-next-line no-console
  console.log('Fetching bots from Nefertiti listen server...');
  try {
    const res = await axios.get(`${nef.hostname}:${nef.port}${nef.ping}`);
    return res.data;
  } catch (err) {
    if (err.code === 'ECONNREFUSED') {
      // eslint-disable-next-line operator-linebreak
      const fetchErr =
        'There was an error connecting to Nefertiti. This usually means the listen server has not started, or cannot be reached at 127.0.0.1:38700';
      return new Error(fetchErr);
    }
    return new Error(`There was an error: ${err}`);
  }
}
