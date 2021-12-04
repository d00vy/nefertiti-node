/* eslint-disable no-use-before-define */
import fetch from 'node-fetch';
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

    // initiate fetch
    const response = await fetch(`${nef.hostname}:${nef.port}${nef.post}`, {
      method: 'POST',
      body: new URLSearchParams({ ...postBody }),
    }).then((res) => checkResponse(res));
    return response;
  } catch (err) {
    if (err.code === 'ECONNREFUSED') {
      // eslint-disable-next-line max-len
      const fetchErr = 'There was an error connecting to Nefertiti. \n \n This usually means the listen server has not started, \n or cannot be reached at \n 127.0.0.1:38700';
      throw new Error(fetchErr);
    }
    throw err;
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
