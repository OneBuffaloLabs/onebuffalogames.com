import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faCode } from '@fortawesome/free-solid-svg-icons';
import type { Hub } from '@/types';

interface HubCardProps {
  hub: Hub;
}

const HubCard = ({ hub }: HubCardProps) => (
  <div className="group bg-obl-dark-blue border-2 border-obl-blue/50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:border-obl-red hover:shadow-obl-red/30 hover:-translate-y-1 flex flex-col p-6">
    <div className="flex items-start justify-between">
      {hub.imageUrl ? (
        <Image
          src={hub.imageUrl}
          alt={`${hub.title} logo`}
          width={64}
          height={64}
          className="h-16 w-16 object-contain"
        />
      ) : (
        <FontAwesomeIcon icon={faGamepad} className="h-16 w-16 text-obl-red" />
      )}
      {hub.githubUrl && (
        <Link
          href={hub.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          title="View Source Code">
          <FontAwesomeIcon icon={faCode} className="h-6 w-6" />
        </Link>
      )}
    </div>
    <div className="mt-4 flex flex-col flex-grow">
      <h3 className="font-orbitron text-2xl font-bold text-white">{hub.title}</h3>
      <p className="text-gray-300 font-mono my-4 flex-grow">{hub.description}</p>
      <div className="mt-auto">
        {hub.isComingSoon ? (
          <button
            disabled
            className="w-full font-bold bg-gray-600 text-gray-400 py-2 px-4 rounded-md cursor-not-allowed">
            {hub.linkText}
          </button>
        ) : (
          <Link
            href={hub.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full font-bold bg-obl-blue text-white py-2 px-4 rounded-md border-b-4 border-blue-800 hover:bg-blue-700 hover:border-blue-900 active:translate-y-0.5 active:border-b-2 transition-all duration-150">
            {hub.linkText}
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default HubCard;
