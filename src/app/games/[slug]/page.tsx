import type { Metadata } from 'next';
import { getGameDetailsBySlug, getAllGameSlugs } from '@/games/game-meta-loader';
import { generateMetadata as generatePageMetadata } from '@/utils/metadata';
import GameClient from '@/components/games/GameClient'; // Import the client component

interface GamePageProps {
  params: Promise<{ slug: string }>;
}

// This function runs on the server and is safe.
export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { slug } = await params;

  const gameDetails = getGameDetailsBySlug(slug);

  return generatePageMetadata({
    title: gameDetails.title,
    description: `Play ${gameDetails.title} on One Buffalo Games. A classic arcade-style game for your browser.`,
    urlPath: `/games/${slug}`,
  });
}

// This function runs on the server and is safe.
export async function generateStaticParams() {
  return getAllGameSlugs();
}

/**
 * The dynamic page component, which remains a Server Component.
 * It fetches server-side data and passes it to the client boundary.
 */
export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;

  // Fetch the game details on the server.
  const gameDetails = getGameDetailsBySlug(slug);

  // Render the client component, passing down the necessary props.
  return <GameClient slug={slug} title={gameDetails.title} />;
}
