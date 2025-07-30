import React from 'react';

export const Footer = () => (
  <footer className="bg-obl-dark-blue text-white py-8 px-8 text-center">
    <p>&copy; 2025 One Buffalo Labs</p>
    <div className="flex justify-center gap-4 mt-4">
      <a
        href="https://twitter.com/OneBuffaloLabs"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-obl-red transition-colors">
        {/* Replace with actual icon component if you have Font Awesome set up */}
        <span>Twitter</span>
      </a>
      <a
        href="https://github.com/OneBuffaloLabs"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-obl-red transition-colors">
        {/* Replace with actual icon component if you have Font Awesome set up */}
        <span>GitHub</span>
      </a>
    </div>
  </footer>
);
