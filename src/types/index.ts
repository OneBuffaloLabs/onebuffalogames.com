/**
 * Defines the structure for a Hub object, matching hubData.json.
 */
export interface Hub {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  linkText: string;
  githubUrl?: string;
  isComingSoon?: boolean;
  tags: string[];
  releaseDate: string;
  popularity: number;
}

/**
 * Defines a single stat to be displayed for a game.
 */
export interface GameStat {
  key: string; // The key used in local storage (e.g., 'playerWins')
  label: string; // The display label for the stat (e.g., 'Player Wins')
}

/**
 * Defines the structure for a Game object.
 */
export interface Game {
  title: string;
  imageUrl: string;
  linkUrl: string;
  isNew?: boolean;
  isComingSoon?: boolean;
  tags: string[];
  releaseDate: string;
  popularity: number;
  description: string; // Game's objective or win condition
  controls: string[]; // An array of strings describing the controls
  stats?: GameStat[]; // An optional array of stats to display
}

/**
 * Defines the structure for a single change item within a changelog entry.
 */
export interface Change {
  type: 'New' | 'Improved' | 'Fixed';
  description: string;
}

/**
 * Defines the structure for a full changelog entry.
 */
export interface ChangelogEntry {
  date: string;
  title: string;
  changes: Change[];
}
