// src/components/ResidentHeader.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResidentHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    // You can replace this with actual search functionality
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="Group239186 w-[1082px] h-12 relative">
      <div className="Frame484 h-10 left-[857px] top-[8px] absolute justify-start items-start gap-10 inline-flex">
        <Link to="/resident/profile" className="Frame12 justify-center items-center gap-2 flex">
          <img className="Ellipse1 w-10 h-10 rounded-full" src="https://via.placeholder.com/40x40" alt="Profile" />
          <div className="Group2 relative">
            <div className="BensonKiptoo left-0 top-0 absolute text-[#4c4c4c] text-sm font-semibold font-['Manrope'] leading-none">
              Benson Kiptoo
            </div>
            <div className="Admin left-0 top-[20px] absolute text-[#b3b3b3] text-sm font-medium font-['Manrope'] leading-none">
              Admin
            </div>
          </div>
        </Link>
        <div className="Frame13 p-2 bg-[#f2f2f2] rounded-[50px] justify-start items-start gap-2.5 flex">
          <div className="VuesaxLinearNotification w-6 h-6 justify-center items-center flex">
            <div className="Notification w-6 h-6 relative"></div>
          </div>
        </div>
      </div>
      <div className="Group3 w-[741px] h-12 left-0 top-0 absolute">
        <div className="Rectangle12 w-[741px] h-12 left-0 top-0 absolute bg-neutral-50 rounded border border-[#e6e6e6]"></div>
        <div className="Group1 w-[267.95px] h-6 left-[16.05px] top-[12px] absolute flex items-center">
          <div className="VuesaxLinearSearchNormal w-[24.08px] h-6 left-0 top-0 absolute justify-center items-center inline-flex">
            <div className="SearchNormal w-[24.08px] h-6 relative"></div>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search here"
            className="SearchHere w-[232px] left-[35.95px] top-0 absolute text-[#4c4c4c] text-base font-normal font-['Manrope'] leading-normal"
          />
          <button onClick={handleSearchSubmit} className="ml-2 bg-blue-500 text-white rounded px-3 py-1">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResidentHeader;
