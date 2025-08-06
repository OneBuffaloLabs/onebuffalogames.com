import type { Metadata } from 'next';
import { getGameDetailsBySlug, getAllGameSlugs } from '@/games/game-meta-loader';
import { generateMetadata as generatePageMetadata } from '@/utils/metadata';
import GameClient from '@/components/games/GameClient';

interface GamePageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const gameSlug = slug[slug.length - 1];
  const fullPath = slug.join('/');
  const gameDetails = getGameDetailsBySlug(gameSlug);

  return generatePageMetadata({
    title: gameDetails.title,
    description: gameDetails.metaDescription,
    urlPath: `/games/${fullPath}`,
  });
}

export async function generateStaticParams() {
  return getAllGameSlugs();
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const gameSlug = slug[slug.length - 1];
  const gameDetails = getGameDetailsBySlug(gameSlug);

  return (
    <GameClient
      slug={gameSlug}
      title={gameDetails.title}
      description={gameDetails.description}
      controls={gameDetails.controls}
      stats={gameDetails.stats}
      isDesktopOnly={gameDetails.isDesktopOnly} // Pass the new prop
    />
  );
}
