import React from 'react';

import { prizes } from "../data/PrizesData";

const Prizes = () => {

  return (
    <section className="container mx-auto px-4 py-12 ">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Our Achievements</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {prizes.map((prize) => (
          <div key={prize.id} className="bg-gray-100 rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-start">
            <span className="text-sm font-semibold text-gray-500 mb-2">{prize.year}</span>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center space-x-2">
              {prize.awardName}
              <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-8 h-8 text-yellow-400 mr-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 3V2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H3v2a7 7 0 0 0 6 6.92V17H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-2v-5.08A7 7 0 0 0 21 5V3h-4zm-8 2V4h10v1a5 5 0 0 1-10 0zm12 0a5 5 0 0 1-4 4.9V5h4v.1zM5 5h4v4.9A5 5 0 0 1 5 5z"/>
              </svg>
            </h3>
            <p className="text-md font-medium text-blue-600 mb-4">{prize.category}</p>
            <p className="text-gray-700 leading-relaxed flex-grow">{prize.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prizes;
