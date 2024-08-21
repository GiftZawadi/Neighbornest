import React, { useState } from 'react';
import logo from '../assets/logo.svg';

const ResidentProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Benson Kiptoo',
    email: 'bensonk@gmail.com',
    password: '********',
    houseNumber: 'House number',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Implement save logic here
    console.log('Saved data:', formData);
  };

  return (
    <div className="w-[1440px] h-[1430px] relative bg-[#cbdae4]">
      <img 
        className="absolute left-0 top-0 w-[162px] h-[127px]" 
        src={logo} 
        alt="Logo" 
      />

      <div className="absolute top-[127px] left-[79px] w-[1282px] h-[856px] rounded-[10px] border border-black"></div>

      <div className="absolute top-[287px] left-[423px]">
        <img 
          className="w-[100px] h-[100px] rounded-full" 
          src="https://via.placeholder.com/100x100" 
          alt="Profile" 
        />
      </div>

      <div className="absolute top-[307px] left-[547px]">
        <div className="text-black text-xl font-medium font-['Poppins']">
          {formData.name}
        </div>
        <div className="opacity-50 text-black text-base font-normal font-['Poppins']">
          {formData.email}
        </div>
      </div>

      <div className="absolute top-[899px] left-[425px]">
        {isEditing ? (
          <button
            onClick={handleSaveClick}
            className="w-[93px] h-11 bg-[#4182f9] rounded-lg text-white text-base font-normal font-['Poppins']"
          >
            Save
          </button>
        ) : null}
      </div>

      <div className="absolute top-[287px] left-[1236px]">
        <button
          onClick={handleEditClick}
          className="w-[93px] h-11 bg-[#4182f9] rounded-lg text-white text-base font-normal font-['Poppins']"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <div className="absolute top-[455px] left-[423px] w-[593px] h-[52px] bg-[#f9f9f9] rounded-lg">
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-full px-4 rounded-lg outline-none"
          />
        ) : (
          <div className="text-base opacity-40 text-black font-normal font-['Poppins'] p-4">
            {formData.name}
          </div>
        )}
      </div>

      <div className="absolute top-[565px] left-[423px] w-[593px] h-[52px] bg-[#f9f9f9] rounded-lg">
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-full px-4 rounded-lg outline-none"
          />
        ) : (
          <div className="text-base opacity-40 text-black font-normal font-['Poppins'] p-4">
            {formData.email}
          </div>
        )}
      </div>

      <div className="absolute top-[679px] left-[423px] w-[593px] h-[52px] bg-[#f9f9f9] rounded-lg">
        {isEditing ? (
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full h-full px-4 rounded-lg outline-none"
          />
        ) : (
          <div className="text-base opacity-40 text-black font-normal font-['Poppins'] p-4">
            {formData.password}
          </div>
        )}
      </div>

      <div className="absolute top-[781px] left-[423px] w-[593px] h-[52px] bg-[#f9f9f9] rounded-lg">
        {isEditing ? (
          <input
            type="text"
            name="houseNumber"
            value={formData.houseNumber}
            onChange={handleChange}
            className="w-full h-full px-4 rounded-lg outline-none"
          />
        ) : (
          <div className="text-base opacity-40 text-black font-normal font-['Poppins'] p-4">
            {formData.houseNumber}
          </div>
        )}
      </div>

      <div className="absolute top-[1069px] left-0 px-[124px] pt-[52px] pb-[101px] border-t border-black">
        <div className="text-[#2d2e2e] text-[32px] font-semibold font-['Inter']">Contacts</div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 relative"></div>
            <div className="text-[#2d2e2e] text-base font-normal font-['Inter']">(334) 202-4792</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 relative"></div>
            <div className="text-[#2d2e2e] text-base font-normal font-['Inter']">@neighbornest</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 relative"></div>
            <div className="text-[#2d2e2e] text-base font-normal font-['Inter']">neighbornest@gmail.com</div>
          </div>
        </div>
        <div className="flex flex-col gap-[11px] mt-4">
          <div className="text-[#2d2e2e] text-base font-normal font-['Inter']">998 Devonshire Ave.Camp Hill, PA 17011</div>
          <div className="text-[#2d2e2e] text-base font-normal font-['Inter']">Nairobi, Kenya</div>
        </div>
      </div>

      <div className="absolute top-[159px] left-[134px] w-9 h-9">
        <div className="w-[30px] h-[30px] left-[3px] top-[3px] absolute"></div>
      </div>
    </div>
  );
};

export default ResidentProfile;
