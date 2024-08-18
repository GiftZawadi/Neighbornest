// components/AdminHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminHeader() {
  return (
    <div className="header bg-white shadow-md p-4 flex justify-between">
      <div className="search-bar flex items-center">
        <input type="text" placeholder="Search..." className="border p-2 rounded" />
      </div>
      <div className="profile-container flex items-center space-x-4">
        <Link to="/admin-profile">
          <img src="/assets/beard.svg" alt="Profile" className="w-8 h-8 rounded-full" />
        </Link>
        <Link to="/admin-notifications">
          <button className="relative">
            <span className="icon-bell text-xl"></span>
            <span className="notification-count bg-red-500 text-white rounded-full p-1 text-xs absolute -top-1 -right-1">3</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
