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
