const fetch = require('node-fetch');

class HypixelClient {
  constructor(key) {
    this.key = key;

    this.API = 'https://api.hypixel.net/';
  }

  /**
   * Fetch a player using their display name.
   * @param {string} displayName - The display name of the player.
   */
  async getPlayerByDisplayname(displayName) {
    try {
      const data = await fetch(this.API + 'player?key=' + this.key + '&name=' + displayName);
      const body = await data.json();
      return body;
    }
    catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Fetch the player using their UUID.
   * @param {string} uuid - The UUID of the player.
   */
  async getPlayerByUUID(uuid) {
    try {
      const data = await fetch(this.API + 'player?key=' + this.key + '&uuid=' + uuid);
      const body = await data.json();
      return body;
    }
    catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = HypixelClient;