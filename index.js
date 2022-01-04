/**
 * Token Information.
 *
 * @typedef {Object} TokenInfo
 * @property {string} address
 * @property {number} decimals
 * @property {string} ens_address
 * @property {object} logo
 * @property {string} logo.height
 * @property {string} logo.ipfs_hash
 * @property {string} logo.src
 * @property {string} logo.width
 * @property {string} name
 * @property {object} social
 * @property {string} social.blog
 * @property {string} social.chat
 * @property {string} social.facebook
 * @property {string} social.forum
 * @property {string} social.github
 * @property {string} social.gitter
 * @property {string} social.instagram
 * @property {string} social.linkedin
 * @property {string} social.reddit
 * @property {string} social.slack
 * @property {string} social.telegram
 * @property {string} social.twitter
 * @property {string} social.youtube
 * @property {object} support
 * @property {string} support.email
 * @property {string} support.url
 * @property {string} symbol
 * @property {string} type
 * @property {string} website
 */

/** @type {Array<TokenInfo>} */
const data = require('./tokens.json');

/**
 * Get the token info.
 *
 * @param symbol {string} The token symbol, e.g., USDT, BNB, LINK, etc.
 * @returns {TokenInfo | undefined} The TokenInfo, undefined if not exists
 */
function getTokenInfoBySymbol(symbol) {
  return data.find(x => x.symbol == symbol);
}

/**
 * @param {string} contactAdress
 */
function getTokenInfoByContractAddress(contactAdress) {
  return data.find(x => x.address === contactAdress);
}

/**
 * @param {string} name
 */
function getTokenInfoByName(name) {
  return data.find(x => x.name === name);
}

/**
 * @param {string} ens_address
 */
function getTokenInfoByENS(ens_address) {
  return data.find(x => x.ens_address === ens_address);
}

module.exports = { getTokenInfoBySymbol, getTokenInfoByContractAddress, getTokenInfoByName, getTokenInfoByENS };
