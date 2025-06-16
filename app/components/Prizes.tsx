import React from 'react';

interface Prize {
  id: number;
  year: number;
  awardName: string;
  category: string;
  description: string;
}

const prizes: Prize[] = [
  {
    id: 1,
    year: 2023,
    awardName: 'Golden Bean Award',
    category: 'Best Espresso Blend',
    description: 'Recognized for our rich and perfectly balanced espresso blend, a favorite among connoisseurs.',
  },
  {
    id: 2,
    year: 2022,
    awardName: 'Community Choice Cafe',
    category: 'Local Favorite',
    description: 'Voted as the top coffee shop by our beloved community for exceptional service and welcoming atmosphere.',
  },
  {
    id: 3,
    year: 2021,
    awardName: 'Sustainable Coffee Shop of the Year',
    category: 'Environmental Stewardship',
    description: 'Honored for our commitment to sustainable sourcing, eco-friendly practices, and waste reduction.',
  },
 
];

const Prizes = () => {

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Our Achievements</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {prizes.map((prize) => (
          <div key={prize.id} className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-start">
            <span className="text-sm font-semibold text-gray-500 mb-2">{prize.year}</span>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{prize.awardName}</h3>
            <p className="text-md font-medium text-blue-600 mb-4">{prize.category}</p>
            <p className="text-gray-700 leading-relaxed flex-grow">{prize.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prizes;
