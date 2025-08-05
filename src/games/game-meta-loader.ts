import type { Game } from '@/types';
import originalGamesData from '@/data/originalGames.json';
import arcadeGamesData from '@/data/arcadeGames.json';

const allGames: Game[] = [...originalGamesData, ...arcadeGamesData];

/**
 * [SERVER-SAFE] Retrieves basic game details using the final slug from the path.
 */
export function getGameDetailsBySlug(slug: string) {
  const game = allGames.find((g) => g.linkUrl.endsWith(slug));
  const title = game
    ? game.title
    : slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: title,
    description: game?.description || 'No description available.',
    controls: game?.controls || ['No controls specified.'],
    stats: game?.stats || [],
  };
}

/**
 * [SERVER-SAFE] Gets all game slugs for static generation, formatted for catch-all routes.
 */
export function getAllGameSlugs() {
  return allGames
    .map((game) => {
      // Remove the leading '/games/' and split the rest into an array
      const slugParts = game.linkUrl.replace('/games/', '').split('/');
      return { slug: slugParts };
    })
    .filter((item) => item.slug.length > 0 && !item.slug[0].startsWith('#'));
}
