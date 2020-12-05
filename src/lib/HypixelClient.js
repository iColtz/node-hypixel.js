const fetch = require('node-fetch');

class HypixelClient {
  constructor(key) {
    this.key = key;

    this.API = 'https://api.hypixel.net/';
  }

  /**
   * Fetch a player.
   * @param {string} method - The method on how to fetch the player, either uuid or name.
   * @param {string} query - The players UUID or display name.
   */
  async _getPlayer(method, query) {
    try {
      const data = await fetch(`${this.API}player?key=${this.key}&${method}=${query}`);
      const body = await data.json();
      return body;
    }
    catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Fetch a player using their display name.
   * @param {string} displayName - The display name of the player.
   */
  getPlayerByDisplayname(displayName) {
    return this._getPlayer('name', displayName);
  }

  /**
   * Fetch the player using their UUID.
   * @param {string} uuid - The UUID of the player.
   */
  async getPlayerByUUID(uuid) {
    return this._getPlayer('uuid', uuid);
  }

  /**
   * Get the current online player count of hypixel.
   */
  async getPlayerCount() {
    try {
      const data = await fetch(`${this.API}playerCount?key=${this.key}`);
      const body = await data.json();
      return body;
    }
    catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = HypixelClient;