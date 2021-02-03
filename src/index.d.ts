interface Skyblock {
  /**
   * Returns the SkyBlock auctions by auction UUID.
   * @param uuid - The players UUID.
   */
  getAuctionsByUUID(uuid: string): Promise<object>;

  /**
   * Returns the SkyBlock auctions by profile.
   * @param profile - The players profile ID.
   */
  getAuctionsByProfile(profile: string): Promise<object>;

  /**
   * Returns the SkyBlock auctions by player.
   * @param player - The players player ID.
   */
  getAuctionsByPlayer(player: string): Promise<object>;

  /**
   * Returns SkyBlock auctions that are currently active in the in-game auction house.
   * @param page - The auction page index.
   */
  getAuctions(page?: number): Promise<object>;

  /**
   * Returns the list of products along with their sell summary, buy summary and quick status.
   */
  getBazaar(): Promise<object>;

  /**
   * Returns SkyBlock news, including a title, description and a thread.
   */
  getNews(): Promise<object>;

  /**
   * Returns a SkyBlock profile's data.
   * @param profile - The profile ID.
   */
  getProfile(profile: string): Promise<object>;

  /**
   * Returns an array of SkyBlock profile's data.
   * @param uuid - The players UUID.
   */
  getProfiles(uuid: string): Promise<object>;
}

export class HypixelClient {
  /**
   * Hypixel Client.
   * @param key - Players API key.
   */
  constructor(key: string);

  /**
   * The players API key.
   */
  key: string;

  /**
   * Fetchs data from Hypixel's Public API.
   * @param path - The path to fetch from.
   */
  private _fetch(path: string): Promise<object>;

  skyblock: Skyblock;

  /**
   * Fetchs a player.
   * @param method - The method on how to fetch the player, either uuid or name.
   * @param query - The players UUID or display name.
   */
  private _getPlayer(method: string, query: string): Promise<object>;

  /**
   * Returns the players data.
   * @param displayName - The display name of the player.
   */
  getPlayerByDisplayname(displayName: string): Promise<object>;

  /**
   * Returns the players data.
   * @param uuid - The UUID of the player.
   */
  getPlayerByUUID(uuid: string): Promise<object>;

  /**
   * Fetch the players status.
   * @param method - The method on how to fetch the player status.
   * @param query - The players UUID.
   */
  private _getPlayerStats(method: string, query: string): Promise<object>;

  /**
   * Returns the online stats information about a player.
   * @param uuid - The players uuid.
   */
  getPlayerStatusByUUID(uuid: string): Promise<object>;

  /**
   * Get the current online player count of Hypixel.
   */
  getPlayerCount(): Promise<object>;

  /**
   * Returns list of boosters.
   */
  getBoosters(): Promise<object>;

  /**
   * Returns the player count of each public game + mode on the server.
   */
  getGameCounts(): Promise<object>;

  /**
   * Returns a list of the leaderboards and their current standings for games.
   */
  getLeaderboard(): Promise<object>;

  /**
   * Fetchs a guild.
   * @param method - The method on how to fetch the guild, either byUuid or byName.
   * @param query - The players UUID or displayname.
   */
  private _findGuild(method: string, query: string): Promise<object>;

  /**
   * Returns the id of the requested guild.
   * @param uuid - The UUID of the player.
   */
  getGuildByUUID(uuid: string): Promise<object>;

  /**
   * Returns the id of the requested guild.
   * @param name - The name of the guild.
   */
  getGuildByName(name: string): Promise<object>;

  /**
   * Returns the friends list of a player.
   * @param uuid - The UUID of the player.
   */
  getFriends(uuid: string): Promise<object>;

  /**
   * Returns information about the key.
   */
  getKeyInfo(): Promise<object>;

  /**
   * Returns the recent games of a player.
   * @param uuid - The UUID of the player.
   */
  getRecentGames(uuid: string): Promise<object>;

  /**
   * Provides an endpoint to retrieve resources which don't change often.
   * @param resource - The resource to fetch, either one of the following:
   * • achievements
   * • challenges
   * • quests
   * • guilds/achievements
   * • guilds/permissions
   * • skyblock/collections
   * • skyblock/skills
   */
  getResources(resource: 'achievements' | 'challenges' | 'quests' |
  'guilds/achievements' | 'guilds/permissions' | 'skyblock/collections' |
  'skyblock/skills'): Promise<object>;

  /**
   * Returns stats about Watchdogs and staff bans.
   */
  getWatchdogStats(): Promise<object>;
}
