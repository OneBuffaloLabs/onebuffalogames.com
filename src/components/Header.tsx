'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/hubs', label: 'Hubs' },
  { href: '/games', label: 'Games' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-obl-dark-blue/80 backdrop-blur-sm border-b-2 border-obl-blue/50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="font-press-start text-xl md:text-2xl tracking-tighter text-obl-red hover:text-white transition-colors duration-300 animate-flicker">
              One Buffalo Games
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-orbitron text-lg font-bold text-white uppercase tracking-wider hover:text-obl-red transition-colors duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-obl-red hover:bg-obl-blue/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-obl-red"
              aria-expanded={isOpen}>
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium font-orbitron text-white hover:text-obl-red hover:bg-obl-blue/50"
                onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
