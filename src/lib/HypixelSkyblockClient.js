class HypixelSkyblockClient {
  /**
   * Hypixel Skyblock Client.
   * @param {string} key - Players API key.
   */
  constructor(key) {
    this.key = key;

    this.API = 'https://api.hypixel.net/';
  }
}

module.exports = HypixelSkyblockClient;