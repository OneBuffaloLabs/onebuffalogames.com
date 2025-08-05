import type { Metadata } from 'next';
import { getGameDetailsBySlug, getAllGameSlugs } from '@/games/game-meta-loader';
import { generateMetadata as generatePageMetadata } from '@/utils/metadata';
import GameClient from '@/components/games/GameClient';

interface GamePageProps {
  params: Promise<{ slug: string }>;
}

// This function is now 100% server-safe.
export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { slug } = await params;

  const gameDetails = getGameDetailsBySlug(slug);

  return generatePageMetadata({
    title: gameDetails.title,
    description: `Play ${gameDetails.title} on One Buffalo Games. A classic arcade-style game for your browser.`,
    urlPath: `/games/${slug}`,
  });
}

// This function is also server-safe.
export async function generateStaticParams() {
  return getAllGameSlugs();
}

/**
 * The dynamic page component remains a Server Component.
 * It passes the slug to the GameClient, which will handle all client-side logic.
 */
export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;

  return <GameClient slug={slug} />;
}
