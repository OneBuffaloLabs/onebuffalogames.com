import Image from 'next/image';

export default function AboutPage() {
  // Core values can be updated or kept as is
  const coreValues = ['Passion', 'Quality', 'Community', 'Innovation'];

  return (
    <div className="relative bg-obl-dark-blue/95 scanline-overlay text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-press-start text-4xl md:text-5xl text-center mb-12 animate-glow">
          About One Buffalo Games
        </h1>

        <div className="max-w-4xl mx-auto bg-obl-dark-blue border-2 border-obl-blue/50 p-8 rounded-lg shadow-lg space-y-12">
          {/* Our Mission Section (Updated) */}
          <section>
            <h2 className="font-orbitron text-3xl font-bold text-obl-red mb-4">Our Mission</h2>
            <p className="font-mono text-lg leading-relaxed text-gray-300">
              One Buffalo Games was born from a simple passion: a love for gaming and a drive to
              create cool, useful things for the web. Our mission is to build high-quality gaming
              tools, information hubs, and fun, playable web games that are accessible to everyone.
              Whether it&apos;s a detailed stat tracker for your favorite FPS or a retro arcade game
              to kill some time, we pour our hearts into every project.
            </p>
          </section>

          {/* Rooted in Buffalo Section (New) */}
          <section>
            <h2 className="font-orbitron text-3xl font-bold text-obl-red mb-4">
              Rooted in Buffalo
            </h2>
            <p className="font-mono text-lg leading-relaxed text-gray-300">
              The &quot;One Buffalo&quot; name is a nod to our roots. It represents the spirit of
              resilience, hard work, and community that defines Buffalo, NY. We bring that same
              energy to the digital world, aiming to build a community of gamers and developers who
              share our passion.
            </p>
          </section>

          {/* Partnership Section (New) */}
          <section>
            <h2 className="font-orbitron text-3xl font-bold text-obl-red mb-4">
              Our Partnership with Silo City Games
            </h2>
            <p className="font-mono text-lg leading-relaxed text-gray-300">
              You might see some of our projects cross-referenced with &quot;Silo City Games.&quot;
              We maintain an ongoing partnership with their talented team, collaborating on various
              projects that align with our shared passion for gaming and innovation. This
              partnership allows us to combine our strengths, share ideas, and bring even more
              exciting experiences to the community.
            </p>
          </section>

          {/* Core Values Section */}
          <section>
            <h2 className="font-orbitron text-3xl font-bold text-obl-red mb-6">Our Core Values</h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {coreValues.map((value) => (
                <li key={value} className="bg-obl-blue/30 p-4 rounded-md border border-obl-blue">
                  <span className="font-press-start text-lg">{value}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="font-orbitron text-3xl font-bold text-obl-red mb-6 text-center">
              Our Team
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-obl-blue border-4 border-obl-red mb-4 overflow-hidden">
                    <Image
                      src={`https://placehold.co/128x128/010123/ffffff?text=Team`}
                      alt={`Team Member ${i + 1}`}
                      width={128}
                      height={128}
                    />
                  </div>
                  <h3 className="font-orbitron text-xl font-bold">Player {i + 1}</h3>
                  <p className="font-mono text-gray-400">Game Developer</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
