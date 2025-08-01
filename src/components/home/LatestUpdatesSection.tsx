import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from './SectionHeader';
import ArcadeButton from '../ArcadeButton';
import changelogData from '@/data/changelog/2025.json';
import type { ChangelogEntry } from '@/types';

const LatestUpdatesSection = () => {
  // Assert the type and get the 3 most recent entries
  const latestEntries = (changelogData as ChangelogEntry[]).slice(0, 3);

  return (
    <section>
      <SectionHeader title="Latest Updates" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {latestEntries.map((entry) => (
          <div
            key={entry.date}
            className="bg-obl-dark-blue border-2 border-obl-blue p-6 rounded-lg shadow-lg hover:shadow-obl-red/50 hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faNewspaper} className="h-6 w-6 mr-4 text-obl-red" />
              <h3 className="font-orbitron text-xl font-bold text-white">{entry.title}</h3>
            </div>
            {/* Use the first change description as a summary */}
            <p className="text-gray-300 font-mono mb-4 flex-grow">
              {entry.changes[0]?.description || 'Check out the latest updates!'}
            </p>
            <div className="mt-auto">
              <time className="font-mono text-sm text-gray-400">
                {new Date(entry.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  timeZone: 'UTC',
                })}
              </time>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <ArcadeButton href="/changelog" color="red">
          View Full Changelog
        </ArcadeButton>
      </div>
    </section>
  );
};

export default LatestUpdatesSection;
