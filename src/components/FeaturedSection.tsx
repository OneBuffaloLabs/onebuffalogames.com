import React from 'react';
import { ProjectCard } from './ProjectCard';
import { CardData } from '@/types';

interface FeaturedSectionProps {
  title: string;
  cards: CardData[];
  ctaLink: string;
  ctaText: string;
  sectionBgClass?: string;
  titleFontClass?: string;
  ctaButtonClasses?: string;
}

export const FeaturedSection = ({
  title,
  cards,
  ctaLink,
  ctaText,
  sectionBgClass = 'bg-background',
  titleFontClass = 'font-orbitron',
  ctaButtonClasses,
}: FeaturedSectionProps) => {
  return (
    <section className={`py-20 px-8 ${sectionBgClass}`}>
      <h2 className={`text-3xl text-center mb-12 ${titleFontClass}`}>{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cards.map((card) => (
          <ProjectCard key={card.title} {...card} fontClass={titleFontClass} />
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href={ctaLink}
          className={`px-8 py-3 text-white font-semibold rounded-full transition-colors ${ctaButtonClasses}`}>
          {ctaText}
        </a>
      </div>
    </section>
  );
};
