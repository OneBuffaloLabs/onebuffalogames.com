import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
  faBluesky,
} from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  const socialLinks = [
    {
      icon: faLinkedin,
      href: 'https://www.linkedin.com/company/one-buffalo-labs',
      name: 'LinkedIn',
    },
    { icon: faXTwitter, href: 'https://x.com/OneBuffaloLabs', name: 'X' },
    { icon: faInstagram, href: 'https://www.instagram.com/onebuffalolabs/', name: 'Instagram' },
    { icon: faGithub, href: 'https://github.com/OneBuffaloLabs', name: 'GitHub' },
    {
      icon: faFacebookF,
      href: 'https://www.facebook.com/profile.php?id=61578291081644',
      name: 'Facebook',
    },
    { icon: faBluesky, href: 'https://bsky.app/profile/onebuffalolabs.com', name: 'Bluesky' },
  ];

  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  const yearDisplay = startYear === currentYear ? startYear : `${startYear} - ${currentYear}`;

  return (
    <footer className="bg-obl-dark-blue border-t-2 border-obl-blue/50">
      {/* The scanline effect is now applied to the wrapper div on each page */}
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400 font-mono">
            &copy; {yearDisplay} One Buffalo Games. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-obl-red transition-colors duration-300">
                <span className="sr-only">Social Media</span>
                <FontAwesomeIcon icon={social.icon} className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
