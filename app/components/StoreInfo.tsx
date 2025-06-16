import React from 'react';
import Image from 'next/image';

const StoreInfo = () => {
  const employees = [
    {
      id: 1,
      name: 'Jane Doe',
      job: 'Head Barista',
      description: 'Jane has been crafting exquisite coffee for over 10 years. Her passion for brewing is unmatched.',
      image: '/Info/1.avif', // Using 1.avif for employee1
    },
    {
      id: 2,
      name: 'John Smith',
      job: 'Store Manager',
      description: 'John ensures smooth operations and a welcoming atmosphere for all our customers.',
      image: '/Info/2.avif', // Using 2.avif for employee2
    },
    {
      id: 3,
      name: 'Emily White',
      job: 'Pastry Chef',
      description: 'Emilys delightful pastries are baked fresh daily, perfectly complementing our coffee.',
      image: '/Info/3.avif', // Using 3.avif for employee3
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mt-8 mb-8 mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Our Store: A Rich History</h2>

      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
        Established in 2005, our coffee shop started as a humble dream to bring the finest coffee experience to our community.
        Over the years, we've grown, but our commitment to quality, sustainability, and exceptional service remains at our core.
        We've seen generations come through our doors, sharing stories, laughter, and countless cups of coffee. Our journey
        is built on a foundation of passion for coffee and a deep connection with our customers.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Dedicated Team:</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {employees.map((employee) => (
          <div key={employee.id} className="text-center">
            <Image
              src={employee.image}
              alt={employee.name}
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4 object-cover w-36 h-36"
            />
            <h4 className="text-xl font-semibold text-gray-900 mb-1">{employee.name}</h4>
            <p className="text-gray-600 mb-2">{employee.job}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{employee.description}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-300 pt-6 mt-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Opening Hours & Events:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Opening Hours:</h4>
            <ul className="text-gray-700 space-y-1">
              <li>Monday - Friday: 7:00 AM - 7:00 PM</li>
              <li>Saturday: 8:00 AM - 6:00 PM</li>
              <li>Sunday: 9:00 AM - 5:00 PM</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Upcoming Events:</h4>
            <ul className="text-gray-700 space-y-1">
              <li><strong>Coffee Tasting Workshop:</strong> Every 1st Saturday, 2 PM - 4 PM</li>
              <li><strong>Live Acoustic Music:</strong> Fridays & Saturdays, 5 PM - 7 PM</li>
              <li><strong>Poetry Night:</strong> Last Thursday of the month, 6 PM - 8 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
