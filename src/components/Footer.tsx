import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faBluesky,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  const yearDisplay = startYear === currentYear ? startYear : `${startYear} - ${currentYear}`;

  return (
    <footer className="bg-obl-dark-blue text-white py-8 px-8 text-center">
      <p>&copy; {yearDisplay} One Buffalo Labs</p>
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://twitter.com/OneBuffaloLabs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-obl-red transition-colors">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://github.com/OneBuffaloLabs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-obl-red transition-colors">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://bsky.app/profile/onebuffalolabs.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bluesky"
          className="hover:text-obl-red transition-colors">
          <FontAwesomeIcon icon={faBluesky} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/onebuffalolabs/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-obl-red transition-colors">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61578291081644"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-obl-red transition-colors">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
      </div>
    </footer>
  );
};
