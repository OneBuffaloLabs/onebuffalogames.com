import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '@/components/home/SectionHeader';
import HubsSection from '@/components/home/HubsSection';
import ArcadeButton from '@/components/ArcadeButton'; // Import the new component

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden bg-obl-dark-blue">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-obl-dark-blue via-transparent to-transparent"></div>
        <div className="relative z-10 p-4">
          <h1 className="font-press-start text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 animate-glow">
            One Buffalo Games
          </h1>
          <p className="font-orbitron text-xl md:text-2xl mb-8 tracking-wider">
            Your portal to game hubs, original titles, and classic arcade adventures.
          </p>
          <div className="flex justify-center items-center gap-x-4">
            <ArcadeButton href="/hubs" color="blue">
              Checkout Hubs
            </ArcadeButton>
            <ArcadeButton href="/games" color="red">
              Start Playing
            </ArcadeButton>
          </div>
        </div>
      </section>

      {/* Main content wrapper */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 space-y-24 bg-obl-dark-blue/95 scanline-overlay">
        {/* Latest Updates Section */}
        <section>
          <SectionHeader title="Latest Updates" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-obl-dark-blue border-2 border-obl-blue p-6 rounded-lg shadow-lg hover:shadow-obl-red/50 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faNewspaper} className="h-6 w-6 mr-4 text-obl-red" />
                  <h3 className="font-orbitron text-xl font-bold text-white">
                    Update Title {i + 1}
                  </h3>
                </div>
                <p className="text-gray-300 font-mono mb-4">
                  A brief summary of the latest news, game release, or community event goes here...
                </p>
                <a href="#" className="font-bold text-obl-red hover:underline">
                  Read More &raquo;
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* This is the new, dynamic Hubs section */}
        <HubsSection />

        {/* One Buffalo Originals Section */}
        <section>
          <SectionHeader title="One Buffalo Originals" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="relative group bg-obl-dark-blue border-2 border-obl-red shadow-lg rounded-lg overflow-hidden">
                <span className="absolute top-2 right-2 bg-obl-red text-white font-press-start text-xs px-2 py-1 rounded-md z-10">
                  NEW
                </span>
                <img
                  src={`https://placehold.co/300x200/003091/e7042d?text=Original+Game`}
                  alt="Original Game"
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="p-4">
                  <h3 className="font-orbitron text-xl font-bold">Original Game {i + 1}</h3>
                  <button className="mt-4 w-full font-bold bg-obl-blue text-white py-2 rounded hover:bg-blue-800 transition-colors">
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Classic Arcade Hits Section */}
        <section>
          <SectionHeader title="Classic Arcade Hits" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="group bg-obl-dark-blue border-2 border-obl-blue shadow-lg rounded-lg overflow-hidden">
                <img
                  src={`https://placehold.co/300x200/e7042d/003091?text=Arcade+Classic`}
                  alt="Arcade Classic"
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="p-4">
                  <h3 className="font-orbitron text-xl font-bold">Arcade Classic {i + 1}</h3>
                  <button className="mt-4 w-full font-bold bg-obl-red text-white py-2 rounded hover:bg-red-500 transition-colors">
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <ArcadeButton href="/games" color="red">
              Browse All Games
            </ArcadeButton>
          </div>
        </section>
      </div>
    </>
  );
}
