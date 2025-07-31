/**
 * Defines the structure for a Hub object, matching hubData.json.
 */
export interface Hub {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  linkText: string;
  isComingSoon?: boolean;
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
  tags: string[]; // Added tags property
}
