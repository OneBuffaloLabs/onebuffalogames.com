import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faXTwitter,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
  faBluesky,
} from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {
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

  return (
    <div className="relative bg-obl-dark-blue/95 scanline-overlay text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-press-start text-4xl md:text-5xl text-center mb-12 animate-glow">
          Get In Touch
        </h1>
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-obl-dark-blue border-2 border-obl-blue/50 p-8 rounded-lg shadow-lg">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="font-orbitron text-sm font-bold uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 w-full bg-foreground/20 border-2 border-obl-blue rounded py-2 px-3 font-mono focus:outline-none focus:ring-2 focus:ring-obl-red"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-orbitron text-sm font-bold uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 w-full bg-foreground/20 border-2 border-obl-blue rounded py-2 px-3 font-mono focus:outline-none focus:ring-2 focus:ring-obl-red"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="font-orbitron text-sm font-bold uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-2 w-full bg-foreground/20 border-2 border-obl-blue rounded py-2 px-3 font-mono focus:outline-none focus:ring-2 focus:ring-obl-red"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="font-orbitron text-sm font-bold uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-2 w-full bg-foreground/20 border-2 border-obl-blue rounded py-2 px-3 font-mono focus:outline-none focus:ring-2 focus:ring-obl-red"
                  required></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full font-orbitron bg-obl-red text-white text-lg font-bold py-3 px-8 border-b-4 border-red-800 rounded-md hover:bg-red-500 hover:border-red-700 active:translate-y-1 active:border-b-2 transition-all duration-150 transform shadow-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact and Social Info */}
          <div className="space-y-8">
            <div className="bg-obl-dark-blue border-2 border-obl-blue/50 p-8 rounded-lg shadow-lg">
              <h3 className="font-orbitron text-2xl font-bold mb-4 text-obl-red">
                Contact Information
              </h3>
              <p className="font-mono text-lg text-gray-300 flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 mr-4" />
                <span>info@onebuffalolabs.com</span>
              </p>
            </div>
            <div className="bg-obl-dark-blue border-2 border-obl-blue/50 p-8 rounded-lg shadow-lg">
              <h3 className="font-orbitron text-2xl font-bold mb-4 text-obl-red">Follow Us</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    title={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-obl-red transition-colors duration-300">
                    <FontAwesomeIcon icon={link.icon} className="h-8 w-8" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
