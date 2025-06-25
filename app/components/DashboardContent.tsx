"use client";

import React from "react";
import Link from "next/link";

// Define the user data type
export type UserData = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  role: string;
  acquisition?: string;
};

const SectionCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-gray-50 rounded-lg p-6 mb-6">
    <div className="flex items-center mb-4">
      <span className="text-xl font-semibold text-gray-800">{title}</span>
      {icon}
    </div>
    {children}
  </div>
);

const DashboardContent = ({ userData }: { userData: UserData }) => (
  <div className="bg-gray-300 rounded-lg shadow-lg p-8">
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Welcome to Your Dashboard!
      </h1>
      <p className="text-gray-600">Here's your account information</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <SectionCard
        title="Personal Information"
        icon={
          <svg
            className="w-5 h-5 ml-2 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        }>
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-600">Email</label>
            <p className="text-gray-900">{userData.email}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600">
              First Name
            </label>
            <p className="text-gray-900">{userData.firstName}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600">
              Last Name
            </label>
            <p className="text-gray-900">{userData.lastName}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600">Role</label>
            <p className="text-gray-900 capitalize">{userData.role}</p>
          </div>
        </div>
      </SectionCard>
      <SectionCard
        title="Address Information"
        icon={
          <svg
            className="w-5 h-5 ml-2 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.428 15.341A8 8 0 104.572 15.34M12 21v-6"
            />
          </svg>
        }>
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-600">Address</label>
            <p className="text-gray-900">{userData.address}</p>
          </div>
        </div>
      </SectionCard>
    </div>
    <SectionCard
      title="Additional Information"
      icon={
        <svg
          className="w-5 h-5 ml-2 text-purple-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
      }>
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium text-gray-600">
            How did you find us?
          </label>
          <p className="text-gray-900">
            {userData.acquisition || "Not specified"}
          </p>
        </div>
      </div>
    </SectionCard>
    <div className="mt-8 flex justify-center space-x-4">
      <button
        onClick={() => {
          if (typeof window !== "undefined") {
            localStorage.removeItem("isSignedUp");
            localStorage.removeItem("userData");
            window.location.href = "/signup";
          }
        }}
        className="px-6 py-2 bg-red-600 text-white cursor-pointer rounded-lg hover:bg-red-800 transition-colors">
        Reset
      </button>
      <Link href="/">
        <button className="px-6 py-2 bg-blue-600 text-white cursor-pointer rounded-lg hover:bg-blue-800 transition-colors">
          Go to Home
        </button>
      </Link>
    </div>
  </div>
);

export default DashboardContent;
