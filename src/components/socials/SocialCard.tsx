import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SocialCardProps {
  name: string;
  icon: IconDefinition;
  url: string;
}

const SocialCard = ({ name, icon, url }: SocialCardProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-obl-dark-blue border-2 border-obl-blue/50 rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-obl-red hover:shadow-obl-red/30 hover:-translate-y-1">
    <FontAwesomeIcon
      icon={icon}
      className="h-12 w-12 text-gray-300 group-hover:text-obl-red transition-colors"
    />
    <span className="mt-4 font-orbitron text-xl font-bold text-white">{name}</span>
  </a>
);

export default SocialCard;
