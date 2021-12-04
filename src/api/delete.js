import fetch from 'node-fetch';
import { nefertitiURL as nef } from '../functions/variables.js';

/**
 * @function deleteBot
 * @description Function to stop and remove a bot.
 * 
 * * Does NOT consider cancelling orders
 *
 * @param {string|number} port The port number of the bot to stop/remove
 * @returns {Error} return an error as of Nov 2021
 *
 * @example // just issue the command directly, but prepare for an error:
 *
 * deleteBot(38701)
 */

export default function deleteBot(port) {
  console.log(`Sending request to delete bot ${port}...`);
  try {
    fetch(`${nef.hostname}:${port}`, {
      method: 'DELETE',
    });
  } catch (err) {
    console.log(err);
    console.log(err.code);
    if (err.code === 'ECONNREFUSED') {
      return `Delete failed: no bot found at port ${port}`;
    }
    console.log(err.code);
    if (err.code === 'ECONNRESET') {
      return `Deleted bot ${port}`;
    }
  }
}
