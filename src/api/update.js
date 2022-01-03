/* eslint-disable no-use-before-define */
import axios from 'axios';
import { nefertitiURL as nef } from '../functions/variables.js';

/**
 * @function updateBot
 * @description Issue a POST request to update a specific bot
 * @param {string|number} port - Port of the bot to update
 * @param {object} args - Object keys are Nefertiti flags with appropriate values {'mult': 1.05}
 * @returns {Promise<array>} - Returns an array of objects with running bot information. Should be chained with '.then()'
 * @example
 *
 *  updateBot(38702, { mult: '1.1' }).then((res) => {
 *    console.log(res)
 *  }
 *
 */

export default async function updateBot(port, args = {}) {
  try {
    // make sure we're getting all the parameters we need
    if (!port || !args) {
      throw new Error('you are missing a mandatory parameter');
    }
    // convert args into url search params
    const urlBody = new URLSearchParams({ ...args });
    // initiate fetch
    const response = await axios.post(`${nef.hostname}:${port}${nef.post}`, urlBody.toString());
    return response.data;
  } catch (err) {
    const errObj = {
      // if there's an error code, we want it. if not, we want to return the error status
      statusCode: err.toJSON().code ? err.toJSON().code : err.response.status,
      errorMessage:
        err.toJSON().code === 'ECONNREFUSED'
          ? 'There was an error connecting to Nefertiti. This usually means the listen server has not started, or cannot be reached at 127.0.0.1:38700'
          : stripErrorMessage(err.response.data.toString()),
    };
    return errObj;
  }
}

/**
 * @private
 * @param {string} err - error string from axios
 * @returns {string} - Substring of error message beginning with the first '['
 */
function stripErrorMessage(err) {
  const msg = err.substring(err.indexOf('['), err.indexOf('\n'));
  return msg;
}
