import React from 'react';
import Image from 'next/image';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';

const AboutPage = () => {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      {/* Hero Section */}
      <header className="relative flex items-center justify-center h-[50vh] bg-obl-dark-blue text-white text-center p-8">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/banners/logo-banner-trans.webp"
            alt="One Buffalo Games Banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-orbitron">About Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">The story behind the games and tools.</p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="py-20 px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-orbitron text-obl-blue mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              One Buffalo Games was born from a simple passion: a love for gaming and a drive to
              create cool, useful things for the web. Our mission is to build high-quality gaming
              tools, information hubs, and fun, playable web games that are accessible to everyone.
              Whether it's a detailed stat tracker for your favorite FPS or a retro arcade game to
              kill some time, we pour our hearts into every project.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-orbitron text-obl-blue mb-4">Rooted in Buffalo</h2>
            <p className="text-lg leading-relaxed">
              The "One Buffalo" name is a nod to our roots. It represents the spirit of resilience,
              hard work, and community that defines Buffalo, NY. We bring that same energy to the
              digital world, aiming to build a community of gamers and developers who share our
              passion.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-orbitron text-obl-blue mb-4">
              Our Partnership with Silo City Games
            </h2>
            <p className="text-lg leading-relaxed">
              You might see some of our projects cross-referenced with "Silo City Games." We
              maintain an ongoing partnership with their talented team, collaborating on various
              projects that align with our shared passion for gaming and innovation. This
              partnership allows us to combine our strengths, share ideas, and bring even more
              exciting experiences to the community.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
