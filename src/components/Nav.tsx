import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Nav = () => {
  return (
    <nav className="bg-obl-dark-blue text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logos/no-text/one-buffalo-cartoon-no-text-white.png"
            alt="One Buffalo Games Logo"
            width={40}
            height={40}
            style={{ height: 'auto' }}
          />
          <span className="font-orbitron text-lg hidden sm:block">One Buffalo Games</span>
        </Link>
        <div className="flex gap-4 sm:gap-6 items-center">
          <Link href="/hubs" className="hover:text-obl-red transition-colors font-semibold">
            Hubs
          </Link>
          <Link href="/games" className="hover:text-obl-red transition-colors font-semibold">
            Games
          </Link>
          <Link href="/arcade" className="hover:text-obl-red transition-colors font-semibold">
            Arcade
          </Link>
          <Link href="/about" className="hover:text-obl-red transition-colors font-semibold">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};
