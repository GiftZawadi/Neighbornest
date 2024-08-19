import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import login from '../assets/login.svg';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();

  // State variables for form inputs and validation
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // To store validation errors

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Form validation
  const validateForm = () => {
    let formErrors = {};
    if (!name) formErrors.name = 'Name is required';
    if (!email) formErrors.email = 'Email is required';
    else if (!emailRegex.test(email)) formErrors.email = 'Invalid email format';
    if (!password) formErrors.password = 'Password is required';
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Fetch user data and handle login
  const fetchUserData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log("Login response:", data);
        const token = data.access_token;
        const userID = data.id; 
        console.log("User ID:", userID);

        localStorage.setItem('jwtToken', token);
        localStorage.setItem('userID', userID);

        if (data.role === 'Admin') {
          navigate('/admin-dashboard');
        } else if (data.role === 'SuperAdmin') {
          navigate('/dashboard');
        } else if (data.role === 'Resident') {
          navigate('/resident/dashboard');
        } else {
          toast.error('Unknown user role');
        }

        toast.success('Login successful!');
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Failed to login:', error);
      toast.error('Failed to login. Please try again.');
    }
  };

  // Handle form submission
  const handleLogin = () => {
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
          <div className="IconPack w-[38px] h-[38px] relative">
            <img src={login} alt="login" className="absolute inset-0 w-full h-full" />
          </div>
          <div className="Login self-stretch text-center text-[#2d2e2e] text-[32px] font-semibold font-['Inter']">Login</div>
          
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
          
          {/* Login Button */}
          <div
            className="Frame73 self-stretch h-14 flex-col justify-center items-start gap-6 flex cursor-pointer"
            onClick={handleLogin}
          >
            <div className="Button self-stretch px-[30px] py-[17px] bg-[#264065] rounded justify-center items-center gap-2.5 inline-flex">
              <div className="ContactUs grow shrink basis-0 text-center text-white text-lg font-medium font-['Inter']">Login</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
