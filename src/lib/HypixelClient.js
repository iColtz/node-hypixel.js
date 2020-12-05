const fetch = require('node-fetch');

class HypixelClient {
  constructor(key) {
    this.key = key;

    this.API = 'https://api.hypixel.net/';
  }

  async getPlayer(displayName) {
    try {
      const data = await fetch(this.API + 'player?key=' + this.key + '&name=' + displayName);
      const body = await data.json();
      return body;
    }
    catch (error) {
      console.log(new Error(error));
    }
  }
}

module.exports = HypixelClient;