// components/AdminHeader.jsx
import React, { useState } from 'react';
import { Link} from 'react-router-dom';

export default function AdminHeader() {

  const [searchResident, setSearchResident] = useState('');
  return (
  <div className="Frame509 w-[1080px] h-24 px-8 pt-12 pb-6  justify-start items-end gap-[116px] inline-flex bg-ccdae4">
  <div className="Group3 w-[741px] h-12 relative">
    <div className="Rectangle12 w-[741px] h-12 left-0 top-0 absolute bg-neutral-50 rounded border border-[#e6e6e6]" />
    <div className="Group1 w-[267.95px] h-6 left-[16.05px] top-[12px] absolute">
      <div className="VuesaxLinearSearchNormal w-[24.08px] h-6 left-0 top-0 absolute justify-center items-center inline-flex">
        <div className="SearchNormal w-[24.08px] h-6 relative">
        </div>
      </div>
      <input
      type="text"
      placeholder="Search residents"
      value={searchResident} 
      onChange={(e) => setSearchResident(e.target.value)}
      className="SearchNeigborhoodsAdmins top-0 absolute text-[#4c4c4c] text-base font-normal font-['Manrope'] leading-normal">
      </input>
    </div>
  </div>
  <div className="Frame14 justify-start items-start gap-0 flex">
    <Link to="/admin-profile" className="Frame12 justify-center items-center gap-2 flex cursor-pointer">
      <img className="Ellipse1 w-10 h-10 rounded-full" src="https://via.placeholder.com/40x40" />
      <div className="Group2 relative">
        <div className="BensonKiptoo left-0 top-0 absolute text-[#4c4c4c] text-sm font-semibold font-['Manrope'] leading-none">Benson Kiptoo</div>
        <div className="Admin left-0 top-[20px] absolute text-[#b3b3b3] text-sm font-medium font-['Manrope'] leading-none">Admin</div>
      </div>
    </Link>
    <Link to="/admin-notifications" className="Frame13 p-2 bg-[#f2f2f2] rounded-[50px] justify-start items-start gap-2.5 flex cursor-pointer">
      <div className="VuesaxLinearNotification w-6 h-6 justify-center items-center flex">
        <div className="Notification w-6 h-6 relative">
        </div>
      </div>
    </Link>
  </div>
</div>
  );
}
