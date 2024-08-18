import React from 'react';
import { Link } from 'react-router-dom';

const ResidentSidebar = () => {
  return (
    <div className="w-[245px] h-[864px] relative bg-[#264065]">
      <img className="w-[162px] h-[127px] left-0 top-0 absolute" src="https://via.placeholder.com/162x127" alt="Logo" />

      <div className="h-36 left-[39px] top-[196px] absolute flex-col justify-start items-start gap-3 inline-flex">
        <Link to="/" className="self-stretch h-10 flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch pl-4 pr-6 py-2 bg-[#cfebf9] rounded justify-start items-start gap-3 inline-flex">
            <div className="w-6 h-6 flex justify-center items-center">
              {/* Icon component */}
            </div>
            <div className="text-[#4c4c4c] text-base font-medium font-['Manrope'] leading-normal">Dashboard</div>
          </div>
        </Link>

        <Link to="/resident/events" className="self-stretch h-10 flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch pl-4 pr-6 py-2 rounded justify-start items-start gap-3 inline-flex">
            <div className="w-6 h-6 flex justify-center items-center">
              {/* Icon component */}
            </div>
            <div className="text-white text-base font-medium font-['Manrope'] leading-normal">Events</div>
          </div>
        </Link>

        <Link to="/resident/news" className="self-stretch h-10 flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch pl-4 pr-6 py-2 rounded justify-start items-start gap-3 inline-flex">
            <div className="w-6 h-6 flex justify-center items-center">
              {/* Icon component */}
            </div>
            <div className="text-white text-base font-medium font-['Manrope'] leading-normal">News</div>
          </div>
        </Link>
      </div>

      <div className="left-[39px] top-[504px] absolute flex-col justify-center items-start gap-6 inline-flex">
        <div className="pl-4 pr-6 py-2 rounded justify-start items-center gap-3 inline-flex">
          <div className="w-6 h-6 flex justify-center items-center">
            {/* Icon component */}
          </div>
          <div className="text-white text-base font-normal font-['Manrope'] leading-normal">Settings</div>
        </div>
        <div className="self-stretch pl-4 pr-6 py-2 rounded justify-start items-center gap-3 inline-flex">
          <div className="w-6 h-6 flex justify-center items-center">
            {/* Icon component */}
          </div>
          <div className="text-[#ff896b] text-base font-normal font-['Manrope'] leading-normal">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default ResidentSidebar;
