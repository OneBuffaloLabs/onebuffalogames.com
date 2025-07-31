import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faWrench, faBug } from '@fortawesome/free-solid-svg-icons';
import changelogData from '@/data/changelog/2025.json';

// Define the structure of a changelog entry's change item
interface Change {
  type: 'New' | 'Improved' | 'Fixed';
  description: string;
}

// Define the structure of a full changelog entry
interface ChangelogEntry {
  date: string;
  title: string;
  changes: Change[];
}

// Map change types to icons and colors for styling
const changeTypeStyles = {
  New: {
    icon: faPlus,
    color: 'bg-green-500',
    text: 'text-green-300',
  },
  Improved: {
    icon: faWrench,
    color: 'bg-blue-500',
    text: 'text-blue-300',
  },
  Fixed: {
    icon: faBug,
    color: 'bg-red-500',
    text: 'text-red-300',
  },
};

export default function ChangelogPage() {
  const entries: ChangelogEntry[] = changelogData as ChangelogEntry[];

  return (
    <div className="relative bg-obl-dark-blue/95 scanline-overlay text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-press-start text-4xl md:text-5xl text-center mb-16 animate-glow">
          Changelog
        </h1>

        <div className="relative max-w-3xl mx-auto">
          {/* The vertical timeline bar */}
          <div className="absolute left-4 sm:left-1/2 top-0 h-full w-1 bg-obl-blue/50 transform -translate-x-1/2"></div>

          {entries.map((entry, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center">
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-1/2 top-3 z-10 w-4 h-4 bg-obl-red rounded-full transform -translate-x-1/2"></div>

                {/* Date Badge */}
                <div className="pl-10 sm:pl-0 sm:w-1/2 sm:pr-8 sm:text-right">
                  <time className="font-orbitron font-bold text-lg text-gray-400">
                    {new Date(entry.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      timeZone: 'UTC', // Ensure consistent date parsing
                    })}
                  </time>
                </div>
              </div>

              {/* Content Card */}
              <div className="mt-4 sm:mt-0 sm:w-1/2 sm:ml-auto sm:pl-8">
                <div className="bg-obl-dark-blue border-2 border-obl-blue/50 p-6 rounded-lg shadow-lg">
                  <h2 className="font-orbitron text-2xl font-bold mb-4 text-white">
                    {entry.title}
                  </h2>
                  <ul className="space-y-3">
                    {entry.changes.map((change, changeIndex) => {
                      const style = changeTypeStyles[change.type];
                      return (
                        <li key={changeIndex} className="flex items-start">
                          <span
                            className={`flex-shrink-0 w-6 h-6 ${style.color} rounded-full flex items-center justify-center mr-3`}>
                            <FontAwesomeIcon icon={style.icon} className="h-3 w-3 text-white" />
                          </span>
                          <p className="font-mono text-gray-300">
                            <span className={`font-bold ${style.text}`}>{change.type}:</span>{' '}
                            {change.description}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
