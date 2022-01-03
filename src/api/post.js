/* eslint-disable no-use-before-define */
import axios from 'axios';
import { nefertitiURL as nef } from '../functions/variables.js';

/**
 * @function postBot
 * @description Issue a POST request to start a bot
 * @param {string} command - must be either 'sell' or 'buy'
 * @param {array} api - An array of exchange API key information. Must be in this order: [<exchange>,<api key>, <api secret>,<api passphrase>]
 * @param {object} args - Object keys are Nefertiti flags with appropriate values: {'mult': 1.05, 'market': 'BTC-USD'}
 * @returns {Promise<array>} - Returns an array of objects with running bot information. Should be chained with '.then()'
 * @example
 *
 * apis.postBot('buy', ['gdax', 'apiKey123',...], {'mult': 1.05,...})
 *   .then((res) => {
 *      console.table(res);
 * });
 */

export default async function post(command, api, args) {
  try {
    // make sure we're getting all the parameters we need
    if (!command || !api || !args) {
      throw new Error('you are missing a mandatory parameter');
    }
    // use postBodyBuilder() to build an object
    const postBody = postBodyBuilder(command, api, args);
    // convert the body object into url search params
    const urlBody = new URLSearchParams({ ...postBody });
    // initiate fetch
    const response = await axios.post(`${nef.hostname}:${nef.port}${nef.post}`, urlBody.toString());
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
 * @param {string} command must be either 'buy' or 'sell'
 * @param {array} apiArray - An array of exchange API key information. Must be in this order: [<exchange>,<api key>, <api secret>,<api passphrase>]
 * @param {object} argsObject - Object keys are Nefertiti flags with appropriate values: {'mult': 1.05, 'market': 'BTC-USD'}
 * @returns {object} - Returns an object to be used with URLSearchParams()
 */
function postBodyBuilder(command, apiArray, argsObject) {
  if (command !== 'sell' && command !== 'buy') {
    throw new Error("'command' has to be either 'sell' or 'buy'");
  }
  // build an api object out of our array
  const api = {
    exchange: apiArray[0],
    'api-key': apiArray[1],
    'api-secret': apiArray[2],
  };

  // add a passphrase if it's included
  if (apiArray.length > 3 && apiArray[3] !== null) {
    // eslint-disable-next-line prefer-destructuring
    api['api-passphrase'] = apiArray[3];
  }
  const postBody = { command, ...api, ...argsObject };
  return postBody;
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
