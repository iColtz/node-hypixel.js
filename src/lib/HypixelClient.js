const fetch = require('node-fetch');

const API = 'https://api.hypixel.net/';

class HypixelClient {
  /**
   * Hypixel Client.
   * @param {string} key - Players API key.
   */
  constructor(key) {
    /**
     * The players API key.
     * @type {string}
     */
    this.key = key;

    /**
     * Fetchs data from Hypixel's Public API.
     * @param {string} path - The path to fetch from.
     */
    this._fetch = async (path) => {
      try {
        const data = await fetch(path);
        const body = await data.json();
        return body;
      }
      catch (error) {
        throw new Error(error);
      }
    };

    this.skyblock = {
      /**
       * Fetchs a players auctions.
       * @param {string} method - The method on how to fetch the players auction, either player, profile or uuid.
       * @param {string} query - The players UUID, profile or player.
       */
      _getAuction(method, query) {
        return this._fetch(`${API}skyblock/auction?key=${key}&${method}=${query}`);
      },

      /**
       * Returns the SkyBlock auctions by auction UUID.
       * @param {string} uuid - The players UUID.
       */
      getAuctionsByUUID(uuid) {
        return this._getAuction('uuid', uuid);
      },

      /**
       * Returns the SkyBlock auctions by profile.
       * @param {string} profile - The players profile ID.
       */
      getAuctionsByProfile(profile) {
        return this._getAuction('profile', profile);
      },

      /**
       * Returns the SkyBlock auctions by player.
       * @param {string} player - The players player ID.
       */
      getAuctionsByPlayer(player) {
        return this._getAuction('player', player);
      },

      /**
       * Returns SkyBlock auctions that are currently active in the in-game auction house.
       * @param {number} page - The auction page index.
       */
      async getAuctions(page = 0) {
        return this._fetch(`${API}skyblock/auctions?key=${key}&page=${page}`);
      },

      /**
       * Returns the list of products along with their sell summary, buy summary and quick status.
       */
      async getBazaar() {
        return this._fetch(`${API}skyblock/bazaar?key=${key}`);
      },

      /**
       * Returns SkyBlock news, including a title, description and a thread.
       */
      async getNews() {
        return this._fetch(`${API}skyblock/news?key=${key}`);
      },

      /**
       * Returns a SkyBlock profile's data.
       * @param {string} profile - The profile ID.
       */
      async getProfile(profile) {
        return this._fetch(`${API}skyblock/profile?key=${key}&profile=${profile}`);
      },

      /**
       * Returns an array of SkyBlock profile's data.
       * @param {string} uuid - The players UUID.
       */
      async getProfiles(uuid) {
        return this._fetch(`${API}skyblock/profiles?key=${key}&uuid=${uuid}`);
      },
    };
  }

  /**
   * Fetchs a player.
   * @param {string} method - The method on how to fetch the player, either uuid or name.
   * @param {string} query - The players UUID or display name.
   */
  _getPlayer(method, query) {
    return this._fetch(`${API}player?key=${this.key}&${method}=${query}`);
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
  getPlayerByUUID(uuid) {
    return this._getPlayer('uuid', uuid);
  }

  /**
   * Fetch the players status.
   * @param {string} method - The method on how to fetch the player status.
   * @param {string} query - The players UUID.
   */
  _getPlayerStats(method, query) {
    return this._fetch(`${API}status?key=${this.key}&${method}=${query}`);
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
  getPlayerCount() {
    return this._fetch(`${API}playerCount?key=${this.key}`);
  }

  /**
   * Returns list of boosters.
   */
  getBoosters() {
    return this._fetch(`${API}boosters?key=${this.key}`);
  }

  /**
   * Returns the player count of each public game + mode on the server.
   */
  getGameCounts() {
    return this._fetch(`${API}gameCounts?key=${this.key}`);
  }

  /**
   * Returns a list of the leaderboards and their current standings for games.
   */
  getLeaderboard() {
    return this._fetch(`${API}leaderboards?key=${this.key}`);
  }

  /**
   * Fetchs a guild.
   * @param {string} method - The method on how to fetch the guild, either byUuid or byName.
   * @param {string} query - The players UUID or displayname.
   */
  _findGuild(method, query) {
    this._fetch(`${API}findGuild?key=${this.key}&${method}=${query}`);
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
  getFriends(uuid) {
    return this._fetch(`${API}friends?key=${this.key}&uuid=${uuid}`);
  }

  /**
   * Returns information about the key.
   */
  getKeyInfo() {
    return this._fetch(`${API}key?key=${this.key}&key=${this.key}`);
  }

  /**
   * Returns the recent games of a player.
   * @param {string} uuid - The UUID of the player.
   */
  getRecentGames(uuid) {
    return this._fetch(`${API}recentGames?key=${this.key}&uuid=${uuid}`);
  }
  /**
   * Provides an endpoint to retrieve resources which don't change often.
   * @param {string} resource - The resource to fetch, either one of the following:
   * • achievements
   * • challenges
   * • quests
   * • guilds/achievements
   * • guilds/permissions
   * • skyblock/collections
   * • skyblock/skills
   */
  getResources(resource) {
    return this._fetch(`${API}resources/${resource}`);
  }

  /**
   * Returns stats about Watchdogs and staff bans.
   */
  getWatchdogStats() {
    return this._fetch(`${API}watchdogstats?key=${this.key}`);
  }
}

module.exports = HypixelClient;