import React from 'react';
import { UpdateData } from '@/types';

interface LatestUpdatesProps {
  updates: UpdateData[];
}

export const LatestUpdates = ({ updates }: LatestUpdatesProps) => {
  // Display only the 3 most recent updates
  const updatesToShow = updates.slice(0, 3);

  return (
    <section className="bg-gray-100 py-20 px-8">
      <h2 className="text-3xl font-orbitron text-center mb-12">Latest Updates</h2>
      <div className="max-w-2xl mx-auto">
        <ul className="space-y-4">
          {updatesToShow.map((update, index) => (
            <li key={index} className="p-4 bg-white rounded-lg shadow">
              <p className="font-semibold">{update.date}</p>
              <p>{update.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
