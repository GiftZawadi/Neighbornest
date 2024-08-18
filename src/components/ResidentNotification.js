// ResidentNotification.js
import React from 'react';

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
        className="absolute top-0 left-0 w-[162px] h-[127px]" 
        src="https://via.placeholder.com/162x127" 
        alt="Logo" 
      />
      <div className="absolute top-[127px] left-[79px] w-[1282px] h-[856px] bg-white rounded-lg border border-black" />
      <div className="absolute top-[159px] left-[134px] w-9 h-9">
        <div className="w-7 h-7 bg-gray-200 rounded-full" />
      </div>
      <div className="absolute top-[270px] left-[148px] w-[796px] h-[675.36px]">
        {notifications.map((notification) => (
          <div key={notification.id} className="relative mb-4 border-b border-[#dddddd] p-5 bg-white rounded-lg">
            <div className="absolute top-0 right-0 w-5 h-5 bg-gray-200 rounded-full">
              {/* Dismiss icon here */}
            </div>
            <div className="flex gap-4">
              <div className="w-[59.70px] h-[59.70px] bg-[#dddddd] rounded-full flex items-center justify-center">
                <img 
                  className="w-[59.70px] h-[59.70px] rounded-full" 
                  src={notification.avatar} 
                  alt="Avatar" 
                />
              </div>
              <div className="flex flex-col flex-1">
                <div className="text-[#222222] text-lg font-semibold leading-snug">
                  {notification.message}
                </div>
                <div className="text-[#717171] text-base font-normal leading-snug mt-2">
                  {notification.date}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute top-0 left-0 text-black text-[39.80px] font-semibold leading-[44.77px]">
          Notifications
        </div>
      </div>
    </div>
  );
};

export default ResidentNotification;
