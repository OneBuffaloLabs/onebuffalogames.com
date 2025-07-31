/**
 * Defines the structure for a Hub object, matching hubData.json.
 */
export interface Hub {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  linkText: string;
  isComingSoon?: boolean; // This property is optional
}
