/**
 * A generic utility for managing game statistics in local storage.
 * Each game's stats are stored under a unique key.
 */

type GameStats = Record<string, number>;

// --- Private Helper Functions ---

function getStatsKey(gameId: string): string {
  return `oneBuffaloGames_${gameId}_stats`;
}

export function getAllStats(gameId: string): GameStats {
  if (typeof window === 'undefined') {
    return {};
  }
  const key = getStatsKey(gameId);
  const stats = localStorage.getItem(key);
  return stats ? JSON.parse(stats) : {};
}

function saveStats(gameId: string, stats: GameStats) {
  if (typeof window === 'undefined') return;
  const key = getStatsKey(gameId);
  localStorage.setItem(key, JSON.stringify(stats));
  // Dispatch a custom event to notify the UI of the change.
  window.dispatchEvent(new CustomEvent('statsUpdated'));
}

// --- Public API for Stats Management ---

export function incrementStat(gameId: string, statName: string, amount = 1) {
  const stats = getAllStats(gameId);
  stats[statName] = (stats[statName] || 0) + amount;
  saveStats(gameId, stats);
}

export function updateHighestStat(gameId: string, statName: string, newValue: number) {
  const stats = getAllStats(gameId);
  if (newValue > (stats[statName] || 0)) {
    stats[statName] = newValue;
    saveStats(gameId, stats);
  }
}

export function getStat(gameId: string, statName: string): number {
  const stats = getAllStats(gameId);
  return stats[statName] || 0;
}
