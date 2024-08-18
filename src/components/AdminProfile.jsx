// components/AdminProfile.jsx
import React, { useState } from 'react';
import logo from '../assets/logo.svg';

export default function AdminProfile() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'admin@example.com',
    phone: '123-456-7890',
    address: '123 Admin St, Admin City, 12345'
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleSave = () => {
    // Save the updated profile details
    setEditing(false);
  };

  return (
    <div className="AdminProfile w-[1440px] h-[1430px] relative bg-[#cbdae4]">
  <img className="WhiteAndBlackModernAbstractBeautyLogoRemovebgPreview1 w-[162px] h-[127px] left-0 top-0 absolute" src={logo} alt="Logo" />
  <div className="Frame482 px-[124px] pt-[52px] pb-[101px] left-0 top-[1069px] absolute border-t border-black justify-center items-center gap-[641px] inline-flex">
    <div className="Frame297 self-stretch flex-col justify-start items-center gap-[39px] inline-flex">
      <div className="Contacts text-[#2d2e2e] text-[32px] font-semibold font-['Inter']">Contacts</div>
      <div className="Frame296 flex-col justify-center items-center gap-4 flex">
        <div className="Frame478 justify-start items-center gap-4 inline-flex">
          <div className="SocialNetwork w-10 h-10 relative" />
          <div className="3342024792 text-[#2d2e2e] text-base font-normal font-['Inter']">(334) 202-4792</div>
        </div>
        <div className="Frame479 justify-start items-center gap-4 inline-flex">
          <div className="SocialNetwork w-10 h-10 relative" />
          <div className="Neighbornest text-[#2d2e2e] text-base font-normal font-['Inter']">@neighbornest</div>
        </div>
        <div className="Frame480 justify-start items-center gap-4 inline-flex">
          <div className="IconPack w-5 h-5 relative" />
          <div className="NeighbornestGmailCom text-[#2d2e2e] text-base font-normal font-['Inter']">neighbornest@gmail.com</div>
        </div>
      </div>
    </div>
    <div className="Frame299 self-stretch p-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="Frame298 flex-col justify-start items-start gap-[11px] flex">
        <div className="DevonshireAveCampHillPa17011 text-[#2d2e2e] text-base font-normal font-['Inter']">998 Devonshire Ave.Camp Hill, PA 17011</div>
        <div className="NairobiKenya text-[#2d2e2e] text-base font-normal font-['Inter']">Nairobi, Kenya</div>
      </div>
    </div>
  </div>
  <div className="Rectangle6692 w-[1282px] h-[856px] left-[79px] top-[127px] absolute rounded-[10px] border border-black" />
  <div className="FullName left-[423px] top-[417px] absolute opacity-80 text-black text-base font-normal font-['Poppins']">Full Name</div>
  <div className="Email left-[423px] top-[529px] absolute opacity-80 text-black text-base font-normal font-['Poppins']">Email</div>
  <div className="Password left-[423px] top-[643px] absolute opacity-80 text-black text-base font-normal font-['Poppins']">Password</div>
  <div className="Neighborhood left-[423px] top-[745px] absolute opacity-80 text-black text-base font-normal font-['Poppins']">Neighborhood</div>
  <img className="Ellipse11 w-[100px] h-[100px] left-[423px] top-[287px] absolute rounded-full" src="https://via.placeholder.com/100x100" />
  <div className="Group239179 left-[547px] top-[307px] absolute">
    <div className="BensonKiptoo left-0 top-0 absolute text-black text-xl font-medium font-['Poppins']">Benson Kiptoo</div>
    <div className="BensonkGmailCom left-0 top-[36px] absolute opacity-50 text-black text-base font-normal font-['Poppins']">bensonk@gmail.com</div>
  </div>
  <div className="Group47736 w-[93px] h-11 left-[1236px] top-[287px] absolute">
    <div className="Rectangle1072 w-[93px] h-11 left-0 top-0 absolute bg-[#4182f9] rounded-lg" />
    <div className="Edit left-[32px] top-[10px] absolute text-white text-base font-normal font-['Poppins']">Edit</div>
  </div>
  <div className="Group239182 w-[93px] h-11 left-[425px] top-[899px] absolute">
    <div className="Rectangle1072 w-[93px] h-11 left-0 top-0 absolute bg-[#4182f9] rounded-lg" />
    <div className="Save left-[32px] top-[10px] absolute text-white text-base font-normal font-['Poppins']">Save</div>
  </div>
  <div className="Rectangle6698 w-[593px] h-[52px] left-[423px] top-[455px] absolute bg-[#f9f9f9] rounded-lg" />
  <div className="Rectangle6694 w-[593px] h-[52px] left-[423px] top-[565px] absolute bg-[#f9f9f9] rounded-lg" />
  <div className="Rectangle6696 w-[593px] h-[52px] left-[423px] top-[679px] absolute bg-[#f9f9f9] rounded-lg" />
  <div className="Rectangle6699 w-[593px] h-[52px] left-[423px] top-[781px] absolute bg-[#f9f9f9] rounded-lg" />
  <div className="BensonKiptoo left-[443px] top-[469px] absolute opacity-40 text-black text-base font-normal font-['Poppins']">Benson Kiptoo </div>
  <div className="BensonkGmailCom left-[443px] top-[581px] absolute opacity-40 text-black text-base font-normal font-['Poppins']">bensonk@gmail.com</div>
  <div className="Password left-[443px] top-[693px] absolute opacity-40 text-black text-base font-normal font-['Poppins']">Password</div>
  <div className="Neighborhood left-[443px] top-[797px] absolute opacity-40 text-black text-base font-normal font-['Poppins']">Neighborhood</div>
  <div className="IconParkOutlineLeftC w-9 h-9 left-[134px] top-[159px] absolute">
    <div className="Group w-[30px] h-[30px] left-[3px] top-[3px] absolute">
    </div>
  </div>
</div>
  );
}
