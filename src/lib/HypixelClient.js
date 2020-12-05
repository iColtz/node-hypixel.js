const fetch = require('node-fetch');

class HypixelClient {
  constructor(key) {
    this.key = key;

    this.API = 'https://api.hypixel.net/';
  }

  /**
   * Fetchs a player.
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
   * Returns the players data.
   * @param {string} displayName - The display name of the player.
   */
  getPlayerByDisplayname(displayName) {
    return this._getPlayer('name', displayName);
  }

  /**
   * Returns the players data.
   * @param {string} uuid - The UUID of the player.
   */
  async getPlayerByUUID(uuid) {
    return this._getPlayer('uuid', uuid);
  }

  /**
   * Fetch the players status.
   * @param {string} method - The method on how to fetch the player status.
   * @param {string} query - The players UUID.
   */
  async _getPlayerStats(method, query) {
    try {
      const data = await fetch(`${this.API}status?key=${this.key}&${method}=${query}`);
      const body = await data.json();
      return body;
    }
    catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Returns the online stats information about a player.
   * @param {string} uuid - The players uuid.
   */
  getPlayerStatusByUUID(uuid) {
    return this._getPlayerStats('uuid', uuid);
  }

  /**
   * Get the current online player count of Hypixel.
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

  /**
   * Returns list of boosters.
   */
  async getBoosters() {
    try {
      const data = await fetch(`${this.API}boosters?key=${this.key}`);
      const body = await data.json();
      return body;
    }
    catch (error) {
      console.log(error);
    }
  }

  /**
   * Returns the player count of each public game + mode on the server.
   */
  async getGameCounts() {
    try {
      const data = await fetch(`${this.API}gameCounts?key=${this.key}`);
      const body = await data.json();
      return body;
    }
    catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Returns a list of the leaderboards and their current standings for games.
   */
  async getLeaderboard() {
    try {
      const data = await fetch(`${this.API}leaderboards?key=${this.key}`);
      const body = await data.json();
      return body;
    }
    catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Fetchs a guild.
   * @param {string} method - The method on how to fetch the guild, either byUuid or byName.
   * @param {string} query - The players UUID or displayname.
   */
  async _findGuild(method, query) {
    try {
      const data = await fetch(`${this.API}findGuild?key=${this.key}&${method}=${query}`);
      const body = await data.json();
      return body;
    }
    catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Returns the id of the requested guild.
   * @param {string} uuid - The UUID of the player.
   */
  getGuildByUUID(uuid) {
    return this._findGuild('byUuid', uuid);
  }

  /**
   * Returns the id of the requested guild.
   * @param {string} name - The name of the guild.
   */
  getGuildByName(name) {
    return this._findGuild('byName', name);
  }

  /**
   * Returns the friends list of a player.
   * @param {string} uuid - The UUID of the player.
   */
  async getFriends(uuid) {
    try {
      const data = await fetch(`${this.API}friends?key=${this.key}&uuid=${uuid}`);
      const body = await data.json();
      return body;
    }
    catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Returns information about the key.
   */
  async getKey() {
    try {
      const data = await fetch(`${this.API}key?key=${this.key}&key=${this.key}`);
      const body = await data.json();
      return body;
    }
    catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = HypixelClient;