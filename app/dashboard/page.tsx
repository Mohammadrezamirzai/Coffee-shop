"use client";

import React, { useEffect, useState } from "react";
import DashboardContent, { UserData } from "../components/DashboardContent";

const Dashboard = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("userData");
      if (data) {
        try {
          setUserData(JSON.parse(data) as UserData);
        } catch (e) {
          setUserData(null);
        }
      }
    }
  }, []);

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl text-gray-700">
          No user data found. Please sign up.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-850 py-8 pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <DashboardContent userData={userData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
