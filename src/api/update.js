import fetch from 'node-fetch';
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

    // initiate fetch
    const response = await fetch(`${nef.hostname}:${port}${nef.post}`, {
      method: 'POST',
      body: new URLSearchParams({ ...args }),
    })
    // eslint-disable-next-line no-use-before-define
      .then((res) => checkResponse(res));

    return response;
  } catch (err) {
    if (err.code === 'ECONNREFUSED') {
      const fetchErr = 'There was an error connecting to Nefertiti. \n \n This usually means the listen server has not started, \n or cannot be reached at \n 127.0.0.1:38700';
      throw new Error(fetchErr);
    }
    throw err;
  }
}

/**
 * @private
 * @param {Promise.response} response - Response from fetch()
 * @returns {json} - Returns response.jsoN() if no errors. returns a substring of the error if found
 */
function checkResponse(response) {
  if (!response.ok) {
    const msg = response.text().then((str) => str.substring(str.indexOf('[')));
    return msg;
  }
  return response.json();
}
