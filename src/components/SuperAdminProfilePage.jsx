import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

const SuperAdminProfilePage = () => {
  const [superAdminData, setSuperAdminData] = useState({
    name: '',
    email: '',
    password: '',
    profilePicture: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the SuperAdmin profile data from the backend
    const fetchSuperAdminData = async () => {
      try {
        const response = await fetch('https://neighborhood-nest-6.onrender.com/superadmins/{super_admin_id}', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch SuperAdmin data');
        }

        const data = await response.json();
        setSuperAdminData(data);
      } catch (error) {
        console.error('Error fetching SuperAdmin data:', error);
      }
    };

    fetchSuperAdminData();
  }, []);

  const handleChange = (e) => {
    setSuperAdminData({
      ...superAdminData,
      [e.target.name]: e.target.value
    });
  };

  const handleProfilePictureChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSuperAdminData({
        ...superAdminData,
        profilePicture: e.target.files[0]  // Store the file directly
      });
    }
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append('name', superAdminData.name);
    formData.append('email', superAdminData.email);
    formData.append('password', superAdminData.password);

    if (superAdminData.profilePicture instanceof File) {
      formData.append('profilePicture', superAdminData.profilePicture);
    }

    try {
      const response = await fetch('https://neighborhood-nest-6.onrender.com/superadmins/{super_admin_id}', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to update SuperAdmin data');
      }

      const data = await response.json();
      setSuperAdminData(data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating SuperAdmin data:', error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing); 
    if (isEditing) {
      handleSave();
    }
  };

  const handleExit = () => {
    navigate('/dashboard/admins'); 
  };

  return (
    <div className="SuperAdminProfile w-[1440px] h-[1430px] relative bg-[#cbdae4]">
      <img className="WhiteAndBlackModernAbstractBeautyLogoRemovebgPreview1 w-[162px] h-[127px] left-0 top-0 absolute" src={logo} alt="Logo" />
      <div className="Frame482 px-[124px] pt-[52px] pb-[101px] left-0 top-[1069px] absolute border-t border-black justify-center items-center gap-[641px] inline-flex">
        <div className="Frame297 self-stretch flex-col justify-start items-center gap-[39px] inline-flex">
          <div className="Contacts text-[#2d2e2e] text-[32px] font-semibold font-['Inter']">Contacts</div>
          <div className="Frame296 flex-col justify-center items-center gap-4 flex">
            <div className="Frame478 justify-start items-center gap-4 inline-flex">
              <div className="SocialNetwork w-10 h-10 relative" />
              <div className="3342024792 text-[#2d2e2e] text-base font-normal font-['Inter']">{/* Add your dynamic phone number here */}</div>
            </div>
            <div className="Frame479 justify-start items-center gap-4 inline-flex">
              <div className="SocialNetwork w-10 h-10 relative" />
              <div className="Neighbornest text-[#2d2e2e] text-base font-normal font-['Inter']">@neighbornest</div>
            </div>
            <div className="Frame480 justify-start items-center gap-4 inline-flex">
              <div className="IconPack w-5 h-5 relative" />
              <div className="NeighbornestGmailCom text-[#2d2e2e] text-base font-normal font-['Inter']">{superAdminData.email}</div>
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
      <div className="Password left-[423px] top-[745px] absolute opacity-80 text-black text-base font-normal font-['Poppins']">Password</div>
      <img className="Ellipse11 w-[100px] h-[100px] left-[423px] top-[287px] absolute rounded-full" src={superAdminData.profilePicture instanceof File ? URL.createObjectURL(superAdminData.profilePicture) : superAdminData.profilePicture} alt="Profile" />
      <div className="Group239179 left-[547px] top-[307px] absolute">
        <div className="BensonKiptoo left-0 top-0 absolute text-black text-xl font-medium font-['Poppins']">{superAdminData.name}</div>
        <div className="BensonkGmailCom left-0 top-[36px] absolute opacity-50 text-black text-base font-normal font-['Poppins']">{superAdminData.email}</div>
      </div>
      <div className="Group47736 w-[93px] h-11 left-[1236px] top-[287px] absolute">
        <div className="Rectangle1072 w-[93px] h-11 left-0 top-0 absolute bg-[#4182f9] rounded-lg" />
        <div onClick={handleEditClick} className="Edit left-[32px] top-[10px] absolute text-white text-base font-normal font-['Poppins'] cursor-pointer">
          {isEditing ? 'Save' : 'Edit'}
        </div>
      </div>
      <div className="Group239182 w-[93px] h-11 left-[425px] top-[899px] absolute">
        <div className="Rectangle1072 w-[93px] h-11 left-0 top-0 absolute bg-[#4182f9] rounded-lg" />
        <div onClick={handleExit} className="Save left-[32px] top-[10px] absolute text-white text-base font-normal font-['Poppins'] cursor-pointer">
          Exit
        </div>
      </div>
      <div className="Rectangle6698 w-[593px] h-[52px] left-[423px] top-[455px] absolute bg-[#f9f9f9] rounded-lg" />
      <div className="Rectangle6694 w-[593px] h-[52px] left-[423px] top-[565px] absolute bg-[#f9f9f9] rounded-lg" />
      <div className="Rectangle6699 w-[593px] h-[52px] left-[423px] top-[781px] absolute bg-[#f9f9f9] rounded-lg" />
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            name="name"
            value={superAdminData.name}
            onChange={handleChange}
            className="FullName left-[423px] top-[417px] absolute opacity-80 text-black text-base font-normal font-['Poppins']"
          />
          <input
            type="email"
            name="email"
            value={superAdminData.email}
            onChange={handleChange}
            className="Email left-[423px] top-[529px] absolute opacity-80 text-black text-base font-normal font-['Poppins']"
          />
          <input
            type="password"
            name="password"
            value={superAdminData.password}
            onChange={handleChange}
            className="Password left-[423px] top-[745px] absolute opacity-80 text-black text-base font-normal font-['Poppins']"
          />
          <input
            type="file"
            name="profilePicture"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="ProfilePictureUpload left-[423px] top-[835px] absolute"
          />
        </div>
      ) : (
        <div>
          <div className="BensonKiptoo left-[443px] top-[469px] absolute opacity-40 text-black text-base font-normal font-['Poppins']">{superAdminData.name}</div>
          <div className="BensonkGmailCom left-[443px] top-[581px] absolute opacity-40 text-black text-base font-normal font-['Poppins']">{superAdminData.email}</div>
          <div className="Passowrd left-[443px] top-[797px] absolute opacity-40 text-black text-base font-normal font-['Poppins']">{superAdminData.password}</div>
        </div>
      )}
    </div>
  );
};

export default SuperAdminProfilePage;
