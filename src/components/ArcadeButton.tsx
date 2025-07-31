import Link from 'next/link';
import type { ReactNode } from 'react';

// Define the props for the component, including the optional color
interface ArcadeButtonProps {
  href: string;
  children: ReactNode;
  color?: 'red' | 'blue';
}

/**
 * A reusable arcade-style button that can be red or blue.
 * Defaults to red if no color is specified.
 */
const ArcadeButton = ({ href, children, color = 'red' }: ArcadeButtonProps) => {
  // Base styles that are applied to all buttons
  const baseStyles =
    'inline-block font-orbitron text-white text-lg font-bold py-3 px-8 border-b-4 rounded-md active:translate-y-1 active:border-b-2 transition-all duration-150 transform shadow-lg';

  // Color-specific styles that are chosen based on the `color` prop
  const colorStyles = {
    red: 'bg-obl-red border-red-800 hover:bg-red-500 hover:border-red-700',
    blue: 'bg-obl-blue border-blue-800 hover:bg-blue-700 hover:border-blue-900',
  };

  // Combine the base styles with the selected color styles
  const finalClassName = `${baseStyles} ${colorStyles[color]}`;

  return (
    <Link href={href} className={finalClassName}>
      {children}
    </Link>
  );
};

export default ArcadeButton;
