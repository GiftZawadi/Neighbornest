import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddResident() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [errors, setErrors] = useState({}); // To store validation errors

  const adminId = localStorage.getItem('userID'); // Get adminID from localStorage

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Form validation
  const validateForm = () => {
    let formErrors = {};
    if (!name) formErrors.name = 'Name is required';
    if (!email) formErrors.email = 'Email is required';
    else if (!emailRegex.test(email)) formErrors.email = 'Invalid email format';
    if (!password) formErrors.password = 'Password is required';
    if (!houseNumber) formErrors.houseNumber = 'House number is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Fetch user data and add resident
  const fetchUserData = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('house_number', houseNumber);

    try {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch(`http://127.0.0.1:5000/admins/${adminId}/residents`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`, // Include token for authorization
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        toast.success('Resident added successfully!');
        navigate('/admin-dashboard'); // Redirect to the admin dashboard
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Failed to add resident');
      }
    } catch (error) {
      toast.error('Failed to add resident. Please try again.');
    }
  };

  // Handle form submission
  const handleAddResident = () => {
    if (validateForm()) {
      fetchUserData();
    } else {
      toast.error('Please fix the errors in the form');
    }
  };

  return (
    <div className="Login w-[1440px] h-[864px] relative bg-[#cbdae4]">
      <img
        className="WhiteAndBlackModernAbstractBeautyLogoRemovebgPreview1 w-[162px] h-[127px] left-0 top-0 absolute"
        src={logo}
        alt="Logo"
      />
      <div className="Frame77 h-[574px] p-6 left-[491px] top-[145px] absolute rounded-xl border border-[#ababab] flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="Frame69 self-stretch h-[526px] flex-col justify-center items-center gap-6 flex">
          <div className="Login self-stretch text-center text-[#2d2e2e] text-[32px] font-semibold font-['Inter']">Add Resident</div>

          {/* Name Input */}
          <div className="Frame66 self-stretch h-[91px] flex-col justify-start items-start gap-4 flex">
            <div className="Name self-stretch text-[#2d2e2e] text-base font-semibold font-['Inter']">Name</div>
            <div className="Input self-stretch px-4 py-[17px] bg-[#f6f6f6] rounded justify-start items-start gap-2.5 inline-flex">
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`grow shrink basis-0 text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug bg-transparent outline-none w-full ${errors.name ? 'border border-red-500' : ''}`}
              />
            </div>
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>

          {/* Email Input */}
          <div className="Frame74 self-stretch h-[91px] flex-col justify-start items-start gap-4 flex">
            <div className="Email self-stretch text-[#2d2e2e] text-base font-semibold font-['Inter']">Email</div>
            <div className="Input self-stretch px-4 py-[17px] bg-[#f6f6f6] rounded justify-start items-start gap-2.5 inline-flex">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`grow shrink basis-0 text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug bg-transparent outline-none w-full ${errors.email ? 'border border-red-500' : ''}`}
              />
            </div>
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>

          {/* House Number Input */}
          <div className="Frame66 self-stretch h-[91px] flex-col justify-start items-start gap-4 flex">
            <div className="Name self-stretch text-[#2d2e2e] text-base font-semibold font-['Inter']">House Number</div>
            <div className="Input self-stretch px-4 py-[17px] bg-[#f6f6f6] rounded justify-start items-start gap-2.5 inline-flex">
              <input
                type="text"
                placeholder="Resident house number"
                value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
                className={`grow shrink basis-0 text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug bg-transparent outline-none w-full ${errors.houseNumber ? 'border border-red-500' : ''}`}
              />
            </div>
            {errors.houseNumber && <span className="text-red-500 text-sm">{errors.houseNumber}</span>}
          </div>

          {/* Password Input */}
          <div className="Frame67 self-stretch h-[91px] flex-col justify-start items-start gap-4 flex">
            <div className="Frame79 self-stretch justify-start items-start gap-4 inline-flex">
              <div className="Password w-[410px] text-[#2d2e2e] text-base font-semibold font-['Inter']">Password</div>
            </div>
            <div className="Input self-stretch px-4 py-[17px] bg-[#f6f6f6] rounded justify-start items-start gap-2.5 inline-flex">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`grow shrink basis-0 text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug bg-transparent outline-none w-full ${errors.password ? 'border border-red-500' : ''}`}
              />
            </div>
            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
          </div>

          {/* Add Resident button */}
          <div
            className="Frame73 self-stretch h-14 flex-col justify-center items-start gap-6 flex cursor-pointer"
            onClick={handleAddResident}
          >
            <div className="Button self-stretch px-[30px] py-[17px] bg-[#264065] rounded justify-center items-center gap-2.5 inline-flex">
              <div className="ContactUs grow shrink basis-0 text-center text-white text-lg font-medium font-['Inter']">Add Resident</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddResident;