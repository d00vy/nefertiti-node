import getAvailableMarkets from './getAvailableMarkets.js';

/**
 * @function filterMarketsByCurrency
 * @description Filter all of the markets that match a string
 * @param {string} exchangeCode - Can be exchange code (KUCN)or full name
 * @param {string} filterCurrency - Case-sensitive market to search
 *    Can be used as a quote currency with a hyphen in the correct place ('-BTC')
 * @returns an array of market objects that contain a string including @filterCurrency
 * @example
 *  const gdaxEthMarkets = filtermarketsByCurrency('gdax', 'ETH-')
 *  console.log(gdaxEthMarkets)
 *[
 * { name: 'ETH-USDT' },
 * { name: 'ETH-GBP' },
 * { name: 'ETH-EUR' },
 * { name: 'ETH-DAI' },
 * { name: 'ETH-BTC' },
 * { name: 'ETH-USDC' },
 * { name: 'ETH-USD' }
 *]
 *
 */

export default function filterMarketsByCurrency(exchangeCode, filterCurrency) {
  const array = getAvailableMarkets(exchangeCode);
  const results = array.filter(
    (markets) => Object.values(markets)
      .toString().includes(filterCurrency.toUpperCase()),
    // eslint-disable-next-line function-paren-newline
  );
  return results;
}
