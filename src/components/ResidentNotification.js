// ResidentNotification.js
import React from 'react';
import logo from '../assets/logo.svg'; 

const notifications = [
  {
    id: 1,
    avatar: 'https://via.placeholder.com/60x60',
    message: 'Please confirm your email address by clicking on the link we just emailed you. If you cannot find the email, you can request a new confirmation email or change your email address.',
    date: 'March 1, 2022',
  },
  {
    id: 2,
    avatar: 'https://via.placeholder.com/60x60',
    message: 'Glenn accepted your invite to co-host Cozy 3BR home minutes from downtown Quahog',
    date: 'March 6, 2022',
  },
  {
    id: 3,
    avatar: 'https://via.placeholder.com/60x60',
    message: 'Glenn accepted your invite to co-host Cheerful 2-bedroom home in the heart of Quahog',
    date: 'April 25, 2022',
  },
  {
    id: 4,
    avatar: 'https://via.placeholder.com/60x60',
    message: 'Cleveland Brown has left you a review. Both of your reviews from this trip are now public.',
    date: 'February 26, 2023',
  },
  {
    id: 5,
    avatar: 'https://via.placeholder.com/60x60',
    message: 'Meg Griffin has left you a review. Both of your reviews from this trip are now public.',
    date: 'March 1, 2023',
  },
];

const ResidentNotification = () => {
  return (
    <div className="relative w-full max-w-[1440px] h-[1068px] bg-[#cbdae4]">
      <img
        className="absolute top-0 left-0 w-[162px] h-[127px] object-cover"
        src={logo}
        alt="Logo"
      />
      <div className="absolute top-[127px] left-[79px] w-[1282px] h-[856px] bg-white rounded-lg border border-black shadow-lg">
        <div className="absolute top-0 left-0 p-5 text-black text-[39.80px] font-semibold">
          Notifications
        </div>
        <div className="absolute top-[159px] left-[134px] w-9 h-9 bg-gray-200 rounded-full">
          {/* Add your icon here */}
        </div>
        <div className="pt-[100px] pl-[50px] pr-[50px]">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="relative mb-4 border-b border-[#dddddd] p-5 bg-white rounded-lg shadow-md"
            >
              <div className="absolute top-2 right-2 w-5 h-5 bg-gray-200 rounded-full">
                {/* Dismiss icon */}
              </div>
              <div className="flex gap-4">
                <div className="w-[60px] h-[60px] bg-[#dddddd] rounded-full flex items-center justify-center">
                  <img
                    className="w-[60px] h-[60px] rounded-full object-cover"
                    src={notification.avatar}
                    alt="Avatar"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-[#222222] text-lg font-semibold leading-snug">
                    {notification.message}
                  </div>
                  <div className="text-[#717171] text-base font-normal mt-2">
                    {notification.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResidentNotification;
