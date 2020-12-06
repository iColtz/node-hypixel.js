<div align="center">
    <a href="https://nodei.co/npm/hypixel.js/"><img src="https://nodei.co/npm/hypixel.js.png?downloads=true" alt="NPM Install Info" /></a>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/hypixel.js"><img src="https://img.shields.io/npm/v/hypixel.js.svg" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/package/hypixel.js"><img src="https://img.shields.io/npm/dt/hypixel.js.svg" alt="NPM Downloads" /></a>
    <a href="https://img.shields.io/david/iColtz/hypixel.js"><img src="https://img.shields.io/david/iColtz/hypixel.js" alt="Deps" /></a>
  </p>
  <p>
  </p>
</div>

# Hypixel.js
> Simple node.js lib for using Hypixel's API, with 100% API coverage! Making it easy to fetch data about players, resources, skyblock and much more!

**Installation**
`npm install hypixel.js` 

## Example
```js
// Create a new HypixelClient instance.
const { HypixelClient } = require('hypixel.js');
const client = new HypixelClient('API KEY');

// Get player by their display name.
client.getPlayerByDisplayname('iColtz')
  .then((player) => {
	// Console log the player.
    console.log(player);
  })
  .catch((error) => {	
	// Log the error if there is one.
    console.log(error);
  });
```

## FAQ
- **How to obtain an API key?**
It's simple go on Minecraft [Hypixel](https://hypixel.net/) server, and type the command `/api` to obtain an api key.

- **How to get my UUID?**
	Go to `https://api.mojang.com/users/profiles/minecraft/DISPLAY_NAME_HERE` and change the end of the url to use  players display name.

## Author
Author: iColtz