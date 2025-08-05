/**
 * A generic utility for managing game statistics in local storage.
 * Each game's stats are stored under a unique key.
 */

// A generic type for any game's stats object.
type GameStats = Record<string, number>;

// --- Private Helper Functions ---

// Generates a unique local storage key for a given game ID.
function getStatsKey(gameId: string): string {
  return `oneBuffaloGames_${gameId}_stats`;
}

// Gets the stats for a specific game, or returns an empty object.
function getStats(gameId: string): GameStats {
  if (typeof window === 'undefined') {
    return {};
  }
  const key = getStatsKey(gameId);
  const stats = localStorage.getItem(key);
  return stats ? JSON.parse(stats) : {};
}

// Saves the stats for a specific game.
function saveStats(gameId: string, stats: GameStats) {
  if (typeof window === 'undefined') return;
  const key = getStatsKey(gameId);
  localStorage.setItem(key, JSON.stringify(stats));
}

// --- Public API for Stats Management ---

/**
 * Increments a specific stat for a given game.
 * @param gameId The unique identifier for the game (e.g., 'paddle-battle').
 * @param statName The name of the stat to increment (e.g., 'playerWins').
 * @param amount The amount to increment by (defaults to 1).
 */
export function incrementStat(gameId: string, statName: string, amount = 1) {
  const stats = getStats(gameId);
  stats[statName] = (stats[statName] || 0) + amount;
  saveStats(gameId, stats);
}

/**
 * Updates a stat only if the new value is higher than the existing one.
 * Useful for tracking high scores or longest rallies.
 * @param gameId The unique identifier for the game.
 * @param statName The name of the stat to update (e.g., 'longestRally').
 * @param newValue The new potential highest value.
 */
export function updateHighestStat(gameId: string, statName: string, newValue: number) {
  const stats = getStats(gameId);
  if (newValue > (stats[statName] || 0)) {
    stats[statName] = newValue;
    saveStats(gameId, stats);
  }
}

/**
 * Retrieves a specific stat for a given game.
 * @param gameId The unique identifier for the game.
 * @param statName The name of the stat to retrieve.
 * @returns The value of the stat, or 0 if it doesn't exist.
 */
export function getStat(gameId: string, statName: string): number {
  const stats = getStats(gameId);
  return stats[statName] || 0;
}
