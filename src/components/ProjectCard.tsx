import React from 'react';
import Image from 'next/image';
import { CardData } from '@/types';

export const ProjectCard = ({
  title,
  description,
  imageUrl,
  linkUrl,
  linkText,
  isComingSoon = false,
  fontClass = 'font-orbitron',
}: CardData) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
    <div className="relative w-full h-48 bg-obl-dark-blue">
      <Image src={imageUrl} alt={title} fill className="object-contain p-4" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className={`text-xl font-bold ${fontClass}`}>{title}</h3>
      <p className="mt-2 flex-grow">{description}</p>
      <a
        href={isComingSoon ? '#' : linkUrl}
        className={`inline-block mt-4 font-semibold ${
          isComingSoon ? 'text-gray-400 cursor-not-allowed' : 'text-obl-red hover:underline'
        }`}>
        {linkText} {isComingSoon ? '' : '→'}
      </a>
    </div>
  </div>
);
