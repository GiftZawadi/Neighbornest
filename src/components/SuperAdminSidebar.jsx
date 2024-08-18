import React from 'react';
import { Link } from 'react-router-dom';

const SuperAdminSidebar = () => {
  return (
    <div className="Frame483 w-[245px] h-[864px] relative bg-[#264065]">
      <img
        className="WhiteAndBlackModernAbstractBeautyLogoRemovebgPreview1 w-[162px] h-[127px] left-0 top-0 absolute"
        src="https://via.placeholder.com/162x127"
        alt="Logo"
      />
      <div className="Frame9 left-[39px] top-[504px] absolute flex-col justify-center items-start gap-6 inline-flex">
        <div className="Frame7 pl-4 pr-6 py-2 rounded justify-start items-center gap-3 inline-flex">
          <div className="VuesaxLinearSetting2 w-6 h-6 justify-center items-center flex">
            <div className="Setting2 w-6 h-6 relative"></div>
          </div>
          <div className="Settings text-white text-base font-normal font-['Manrope'] leading-normal">
            Settings
          </div>
        </div>
        <div className="Frame8 self-stretch pl-4 pr-6 py-2 rounded justify-start items-center gap-3 inline-flex">
          <div className="VuesaxLinearLogout w-6 h-6 justify-center items-center flex">
            <div className="Logout w-6 h-6 relative"></div>
          </div>
          <Link to="/logout" className="Logout text-[#ff896b] text-base font-normal font-['Manrope'] leading-normal">
            Logout
          </Link> {/* Updated to trigger the logout process */}
        </div>
      </div>
      <div className="Frame10 left-[39px] top-[196px] absolute flex-col justify-start items-start gap-6 inline-flex">
        <Link to="/dashboard/admins" className="Frame4 self-stretch pl-4 pr-6 py-2 bg-[#cfebf9] rounded justify-start items-start gap-3 inline-flex">
          <div className="VuesaxLinearCategory w-6 h-6 justify-center items-center flex">
            <div className="Category w-6 h-6 relative"></div>
          </div>
          <div className="Admins text-[#4c4c4c] text-base font-medium font-['Manrope'] leading-normal">
            Admins
          </div>
        </Link>
        <Link to="/dashboard/neighborhoods" className="Frame5 self-stretch pl-4 pr-6 py-2 rounded justify-start items-center gap-3 inline-flex">
          <div className="HugeiconsRealEstate02 w-6 h-6 relative">
            <div className="Group w-5 h-5 left-[2px] top-[2px] absolute"></div>
          </div>
          <div className="Neigborhoods text-white text-base font-medium font-['Manrope'] leading-normal">
            Neighborhoods
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SuperAdminSidebar;
