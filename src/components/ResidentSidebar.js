// src/components/ResidentSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'; // Adjust the logo path if necessary

const ResidentSidebar = () => {
  return (
    <div className="Frame483 w-[245px] h-[864px] relative bg-[#264065]">
  <img className="WhiteAndBlackModernAbstractBeautyLogoRemovebgPreview1 w-[162px] h-[127px] left-0 top-0 absolute" src={logo} alt="Logo" />
  <div className="Frame9 left-[39px] top-[504px] absolute flex-col justify-center items-start gap-6 inline-flex">
    <Link to="/admin-settings" className="Frame7 pl-4 pr-6 py-2 rounded justify-start items-center gap-3 inline-flex cursor-pointer">
      <div className="VuesaxLinearSetting2 w-6 h-6 justify-center items-center flex">
        <div className="Setting2 w-6 h-6 relative">
        </div>
      </div>
      <div className="Settings text-white text-base font-normal font-['Manrope'] leading-normal">Settings</div>
    </Link>
    <Link to="/logout" className="Frame8 self-stretch pl-4 pr-6 py-2 rounded justify-start items-center gap-3 inline-flex cursor-pointer">
      <div className="VuesaxLinearLogout w-6 h-6 justify-center items-center flex">
        <div className="Logout w-6 h-6 relative">
        </div>
      </div>
      <div className="Logout text-[#ff896b] text-base font-normal font-['Manrope'] leading-normal">Logout</div>
    </Link>
  </div>
  <div className="Frame502 h-36 left-[39px] top-[196px] absolute flex-col justify-start items-start gap-3 inline-flex">
    <div className="Frame10 self-stretch h-10 flex-col justify-start items-start gap-6 flex">
      <Link to="/resident/dashboard" className="Frame5 self-stretch pl-4 pr-6 py-2 rounded justify-start items-start gap-3 inline-flex cursor-pointer">
        <div className="VuesaxLinearCategory w-6 h-6 justify-center items-center flex">
          <div className="Category w-6 h-6 relative">
          </div>
        </div>
        <div className="Dashboard text-white text-base font-medium font-['Manrope'] leading-normal">Dashboard</div>
      </Link>
    </div>
    <div className="Frame11 h-10 flex-col justify-start items-start gap-6 flex">
      <Link to="/resident/events" className="Frame4 self-stretch pl-4 pr-6 py-2 rounded justify-start items-start gap-3 inline-flex cursor-pointer">
        <div className="IcRoundEvent w-6 h-6 relative" />
        <div className="Events text-white text-base font-medium font-['Manrope'] leading-normal">Events</div>
      </Link>
    </div>
    <div className="Frame12 self-stretch h-10 flex-col justify-start items-start gap-6 flex">
      <Link to="/resident/news" className="Frame4 self-stretch pl-4 pr-6 py-2 rounded justify-start items-start gap-3 inline-flex cursor-pointer">
        <div className="HugeiconsNews w-6 h-6 relative">
          <div className="Group w-5 h-[18px] left-[2px] top-[3px] absolute">
          </div>
        </div>
        <div className="News text-white text-base font-medium font-['Manrope'] leading-normal">News</div>
      </Link>
    </div>
  </div>
</div>
  );
};

export default ResidentSidebar;
