import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import handshakeImage from '../assets/Frame 494 (1).png';

const AboutUs = () => {
  return (
    <div className="AboutUs w-full h-full bg-[#cbdae4]">
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center px-10 py-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="w-40 h-auto"
            src={logo}
            alt="Logo"
          />
        </div>
        {/* Navigation Links */}
        <div className="flex space-x-8">
          <Link to="/" className="text-black text-sm font-normal font-['Rubik']">Home</Link>
          <Link to="/about-us" className="text-black text-sm font-normal font-['Rubik']">About Us</Link>
          <Link to="/contact-us" className="text-black text-sm font-normal font-['Rubik']">Contact Us</Link>
          <Link to="/login" className="px-6 py-2 bg-[#cfebf9] rounded-xl text-black text-sm font-normal font-['Rubik']">Login</Link>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="px-32 pt-20">
        <h1 className="text-4xl font-black font-['Merriweather'] text-[#2d2e2e] mb-8">Who We Are</h1>
        <div className="flex justify-between">
          <div className="max-w-md">
            <p className="text-lg font-normal font-['Merriweather'] text-[#2d2e2e] mb-8">
              At NeighborNest, we believe that communities thrive when connections are strong. Our platform was designed to make it easier for neighborhoods to communicate, collaborate, and grow together. Whether you're a resident looking to stay informed or a manager aiming to keep everything organized, NeighborNest provides a user-friendly space where everyone can engage effortlessly. From managing events to sharing neighborhood news, our app ensures that every voice is heard, and every community is connected.
            </p>
            <p className="text-lg font-normal font-['Merriweather'] text-[#2d2e2e]">
              Our mission is to create vibrant, connected neighborhoods where everyone feels a sense of belonging. We understand that strong relationships are the foundation of any community, which is why we’ve built NeighborNest with features that foster interaction and collaboration. Through our innovative platform, we aim to simplify the way communities operate, making it easier for residents and managers alike to engage, share, and build lasting connections.
            </p>
          </div>
          <div className="flex-shrink-0">
            {/* Example image, replace with actual content */}
            <img
              className="w-full h-auto"
              src={handshakeImage}
              alt="Handshake"
            />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-32 pt-20 border-t border-black mt-16">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold font-['Inter'] text-[#2d2e2e]">Contacts</h2>
            <div className="space-y-2">
              <p className="text-base font-normal font-['Inter'] text-[#2d2e2e]">(334) 202-4792</p>
              <p className="text-base font-normal font-['Inter'] text-[#2d2e2e]">@neighbornest</p>
              <p className="text-base font-normal font-['Inter'] text-[#2d2e2e]">neighbornest@gmail.com</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-base font-normal font-['Inter'] text-[#2d2e2e]">998 Devonshire Ave.Camp Hill, PA 17011</p>
            <p className="text-base font-normal font-['Inter'] text-[#2d2e2e]">Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
