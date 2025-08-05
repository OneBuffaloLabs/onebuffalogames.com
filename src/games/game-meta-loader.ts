import type { Game, GameStat } from '@/types';
import originalGamesData from '@/data/originalGames.json';
import arcadeGamesData from '@/data/arcadeGames.json';

const allGames: Game[] = [...originalGamesData, ...arcadeGamesData];

/**
 * [SERVER-SAFE] Retrieves basic game details without importing Phaser.
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
    stats: game?.stats || [], // Return the stats array or an empty one
  };
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
