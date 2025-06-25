import React from "react";
import Image from "next/image";
import { employees } from "../data/EmployeesData";

const StoreInfo = () => {
  return (
    <>
      <div className="relative w-full min-h-[400px] mt-20">
        <Image
          src="/images/images.jpeg"
          alt="coffee beans"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 pt-18 px-12 text-gray-100 ">
          <h2 className="text-2xl md:text-4xl pt-2 font-bold mb-6 text-center">
            Our Store: A Rich History
          </h2>
          <p className=" mb-6 text-sm md:text-base  text-center tracking-tighter text-gray-200 max-w-xl mx-auto">
            Established in 2005, our coffee shop started as a humble dream to
            bring the finest coffee experience to our community. Over the years,
            we've grown, but our commitment to quality, sustainability, and
            exceptional service remains at our core. We've seen generations come
            through our doors, sharing stories, laughter, and countless cups of
            coffee. Our journey is built on a foundation of passion for coffee
            and a deep connection with our customers.
          </p>
        </div>
      </div>
      <div className="bg-gray-300 shadow-lg rounded-lg p-8 mb-8 mx-auto w-full">
        <h3 className="text-3xl text-center font-semibold text-gray-800 my-4">
          Meet Our Dedicated Team:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4   mb-8 ">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className=" flex flex-col items-center text-center">
              <Image
                src={employee.image}
                alt={employee.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4 object-cover w-36 h-36"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-1">
                {employee.name}
              </h4>
              <p className="text-gray-600 mb-2">{employee.job}</p>
              <p className="text-gray-700 text-xs  text-center w-80 ">
                {employee.description}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 pt-6 mt-6 ">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Opening Hours & Events:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Opening Hours:
              </h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>Monday - Friday: 7:00 AM - 7:00 PM</li>
                <li>Saturday: 8:00 AM - 6:00 PM</li>
                <li>Sunday: 9:00 AM - 5:00 PM</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Upcoming Events:
              </h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>
                  <strong>Coffee Tasting Workshop:</strong> Every 1st Saturday,
                  2 PM - 4 PM
                </li>
                <li>
                  <strong>Live Acoustic Music:</strong> Fridays & Saturdays, 5
                  PM - 7 PM
                </li>
                <li>
                  <strong>Poetry Night:</strong> Last Thursday of the month, 6
                  PM - 8 PM
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 mt-12">
            <div className="w-full md:w-2/5 flex-shrink-0">
              <Image
                src="/images/address.png"
                alt="Store Address"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div className="w-full md:w-2/3 text-gray-700">
              <h4 className="text-xl font-bold mb-2">Visit Us</h4>
              <p className="mb-2">123 Coffee Lane, Brewtown, CA 90210</p>
              <p className="mb-2 max-w-150">
                Our shop is located in the heart of Brewtown, just a short walk
                from the main square. Enjoy a cozy atmosphere, free Wi-Fi, and
                the aroma of freshly ground beans every day.
              </p>
              <ul className="list-disc pl-5">
                <li>Ample parking available</li>
                <li>Wheelchair accessible</li>
                <li>Pet-friendly outdoor seating</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreInfo;
