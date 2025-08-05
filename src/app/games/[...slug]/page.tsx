import type { Metadata } from 'next';
import { getGameDetailsBySlug, getAllGameSlugs } from '@/games/game-meta-loader';
import { generateMetadata as generatePageMetadata } from '@/utils/metadata';
import GameClient from '@/components/games/GameClient';

interface GamePageProps {
  params: Promise<{ slug: string[] }>;
}

// This function runs on the server and is safe.
export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const gameSlug = slug[slug.length - 1]; // The actual game slug is the last part
  const fullPath = slug.join('/'); // Recreate the full path for the URL

  const gameDetails = getGameDetailsBySlug(gameSlug);

  return generatePageMetadata({
    title: gameDetails.title,
    description: `Play ${gameDetails.title} on One Buffalo Games. A classic arcade-style game for your browser.`,
    urlPath: `/games/${fullPath}`,
  });
}

// This function runs on the server and is safe.
export async function generateStaticParams() {
  return getAllGameSlugs();
}

/**
 * The dynamic page component, which remains a Server Component.
 */
export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const gameSlug = slug[slug.length - 1]; // Get the actual game slug

  // Fetch the game details on the server.
  const gameDetails = getGameDetailsBySlug(gameSlug);

  // Render the client component, passing down the necessary props.
  return (
    <GameClient
      slug={gameSlug}
      title={gameDetails.title}
      description={gameDetails.description}
      controls={gameDetails.controls}
      stats={gameDetails.stats}
    />
  );
}
