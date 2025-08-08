import {
  faXTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faBluesky,
  faReddit,
} from '@fortawesome/free-brands-svg-icons';
import SocialCard from '@/components/socials/SocialCard';
// --- Next ---
import type { Metadata } from 'next';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Socials',
  description: 'Connect with One Buffalo Games on our social media channels.',
  keywords: ['social media', 'contact', 'community'],
  urlPath: '/socials',
});

export default function SocialsPage() {
  const socialLinks = [
    {
      name: 'Reddit',
      icon: faReddit,
      url: 'https://www.reddit.com/r/onebuffalogames',
    },
    {
      name: 'Facebook',
      icon: faFacebookF,
      url: 'https://www.facebook.com/profile.php?id=61578291081644',
    },
    {
      name: 'Twitter',
      icon: faXTwitter,
      url: 'https://x.com/OneBuffaloLabs',
    },
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/OneBuffaloLabs',
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      url: 'https://www.instagram.com/onebuffalolabs/',
    },
    {
      name: 'Bluesky',
      icon: faBluesky,
      url: 'https://bsky.app/profile/onebuffalolabs.com',
    },
    {
      name: 'LinkedIn',
      icon: faLinkedinIn,
      url: 'https://www.linkedin.com/company/one-buffalo-labs',
    },
  ];

  return (
    <div className="relative bg-obl-dark-blue/95 scanline-overlay text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-press-start text-4xl md:text-5xl text-center mb-12 animate-glow">
          Our Socials
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {socialLinks.map((link) => (
            <SocialCard key={link.name} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}
