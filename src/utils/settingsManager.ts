/**
 * A generic utility for managing game settings in local storage.
 */

// Use a more specific type for setting values instead of 'any'.
type SettingValue = string | number | boolean;
type GameSettings = Record<string, SettingValue>;

// --- Private Helper Functions ---

function getSettingsKey(gameId: string): string {
  return `oneBuffaloGames_${gameId}_settings`;
}

function getSettings(gameId: string): GameSettings {
  if (typeof window === 'undefined') {
    return {};
  }
  const key = getSettingsKey(gameId);
  const settings = localStorage.getItem(key);
  return settings ? JSON.parse(settings) : {};
}

function saveSettings(gameId: string, settings: GameSettings) {
  if (typeof window === 'undefined') return;
  const key = getSettingsKey(gameId);
  localStorage.setItem(key, JSON.stringify(settings));
}

// --- Public API for Settings Management ---

/**
 * Sets a specific setting for a given game.
 * @param gameId The unique identifier for the game (e.g., 'paddle-battle').
 * @param settingName The name of the setting to save (e.g., 'difficulty').
 * @param value The value to save.
 */
export function setSetting(gameId: string, settingName: string, value: SettingValue) {
  const settings = getSettings(gameId);
  settings[settingName] = value;
  saveSettings(gameId, settings);
}

/**
 * Gets a specific setting for a given game.
 * @param gameId The unique identifier for the game.
 * @param settingName The name of the setting to retrieve.
 * @param defaultValue The value to return if the setting is not found.
 * @returns The saved setting value or the default value.
 */
export function getSetting<T extends SettingValue>(
  gameId: string,
  settingName: string,
  defaultValue: T
): T {
  const settings = getSettings(gameId);
  // The type assertion ensures the return value matches the generic type T.
  return (settings[settingName] !== undefined ? settings[settingName] : defaultValue) as T;
}
