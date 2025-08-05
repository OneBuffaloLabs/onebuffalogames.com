import originalGamesData from '@/data/originalGames.json';
import arcadeGamesData from '@/data/arcadeGames.json';

// --- SERVER-SIDE SAFE LOGIC ---
const allGames = [...originalGamesData, ...arcadeGamesData];

/**
 * [SERVER-SAFE] Retrieves basic game details (like title) without importing Phaser.
 * This is safe to use in Server Components for generating metadata.
 */
export function getGameDetailsBySlug(slug: string): { title: string } {
  const game = allGames.find((g) => g.linkUrl.endsWith(slug));
  const title = game
    ? game.title
    : slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  return { title };
}

/**
 * [SERVER-SAFE] Gets all game slugs for static generation.
 */
export function getAllGameSlugs() {
  return allGames
    .map((game) => ({
      slug: game.linkUrl.split('/').pop() || '',
    }))
    .filter((item) => item.slug && !item.slug.startsWith('#'));
}
