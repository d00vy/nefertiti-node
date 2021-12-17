/* eslint-disable no-console */
import axios from 'axios';
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
 * @example // just issue the command directly, but expect no response:
 *
 * deleteBot(38701)
 */

export default function deleteBot(port) {
  console.log(`Sending request to delete bot ${port}...`);
  // eslint-disable-next-line consistent-return
  axios.delete(`${nef.hostname}:${port}`).catch((err) => {
    if (err.code === 'ECONNREFUSED') {
      return `Delete failed: no bot found at port ${port}`;
    }
    if (err.code === 'ECONNRESET') {
      return `Deleted bot ${port}`;
    }
  });
  console.log(`Deleted bot ${port}`);
}
