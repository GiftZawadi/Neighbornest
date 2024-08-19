import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SuperAdminSidebar from './SuperAdminSidebar';
import SuperAdminHeader from './SuperAdminHeader';
import Admin from './Admin';
import Neighborhood from './Neighborhood';
import Logout from './Logout';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SuperAdminSidebar />

      {/* Main Content Area */}
      <div className="flex-grow">
        {/* Header */}
        <SuperAdminHeader />

        {/* Main Dashboard Content */}
        <div className="p-8">
          <Routes>
            {/* Default route to show Admin cards when landing on /dashboard */}
            <Route path="/" element={<Navigate to="admins" />} />
            <Route path="admins" element={<Admin />} />
            <Route path="neighborhoods" element={<Neighborhood />} />
            <Route path="logout" element={<Logout />} /> {/* Logout route */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
