// src/components/ResidentHeader.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResidentHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Replace this with actual search functionality
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="header bg-white shadow-md p-4 flex justify-between items-center">
      <div className="search-bar flex items-center flex-1 max-w-xl">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search here"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleSearchSubmit}
          className="ml-2 bg-blue-500 text-white rounded px-3 py-1"
        >
          Search
        </button>
      </div>
      <div className="profile-container flex items-center space-x-4">
        <Link to="/resident/profile">
          <img
            src="https://via.placeholder.com/40x40"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </Link>
        <Link to="/resident/notifications">
          <button className="relative">
            <span className="icon-bell text-xl"></span>
            <span className="notification-count bg-red-500 text-white rounded-full p-1 text-xs absolute -top-1 -right-1">
              3
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResidentHeader;
