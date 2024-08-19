import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuperAdminHeader = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/superadminprofile'); // Redirect to the profile page
  };

  const handleNotificationsClick = () => {
    navigate('/superadminnotifications'); // Redirect to the notifications page
  };

  return (
    <div className="w-full h-16 bg-white flex items-center justify-between px-8 border-b border-gray-200">
      <div className="flex items-center w-[60%]">
        <div className="flex items-center w-full bg-neutral-50 border border-[#e6e6e6] rounded-lg px-4">
          <div className="w-6 h-6 bg-gray-500"></div>
          <input
            type="text"
            placeholder="Search neighborhoods, admins"
            className="w-full ml-4 bg-transparent text-[#4c4c4c] text-base font-normal focus:outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div
          className="w-10 h-10 bg-[#f2f2f2] rounded-full flex items-center justify-center cursor-pointer"
          onClick={handleNotificationsClick}
        >
          <div className="w-6 h-6 bg-gray-500"></div>
        </div>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
          onClick={handleProfileClick}
        >
          <img
            className="w-10 h-10 rounded-full"
            src="https://via.placeholder.com/40x40"
            alt="User Avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default SuperAdminHeader;
