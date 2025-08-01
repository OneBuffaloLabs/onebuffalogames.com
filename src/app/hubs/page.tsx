import { Suspense } from 'react';
import type { Metadata } from 'next';
import HubBrowser from '@/components/hubs/HubBrowser';
import hubData from '@/data/hubData.json';
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Gaming Hubs',
  description:
    'Explore our collection of gaming hubs, featuring tools and resources for games like Call of Duty, Fortnite, and more.',
  keywords: ['gaming hubs', 'codrcg', 'royalehub', 'off the grid', 'game tools'],
  urlPath: '/hubs',
});

// Define the filter and sort options for the hubs page
const filterButtons = ['All', 'Utility', 'FPS', 'Battle Royale', 'Sandbox'];
const sortOptions = [
  { label: 'Sort by: Newest', value: 'newest' },
  { label: 'Sort by: Oldest', value: 'oldest' },
  { label: 'Sort by: Popularity', value: 'popularity' },
  { label: 'Sort by: A-Z', value: 'a-z' },
  { label: 'Sort by: Z-A', value: 'z-a' },
];

export default function HubsPage() {
  return (
    <div className="relative bg-obl-dark-blue/95 scanline-overlay text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-press-start text-4xl md:text-5xl text-center mb-12 animate-glow">
          Our Gaming Hubs
        </h1>
        {/* Wrap HubBrowser in Suspense for useSearchParams to work correctly */}
        <Suspense fallback={<div>Loading...</div>}>
          <HubBrowser hubs={hubData} filterButtons={filterButtons} sortOptions={sortOptions} />
        </Suspense>
      </div>
    </div>
  );
}
