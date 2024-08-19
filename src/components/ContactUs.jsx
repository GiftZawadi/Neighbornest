import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      setFormError('Please fill in all fields.');
      return;
    }

    // Email validation
    if (!validateEmail(formData.email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    // Simulate form submission
    setFormSuccess('Your submission was successful!');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <div className="ContactPage w-[1440px] h-[1339px] relative bg-[#cbdae4]">
      <div className="Frame491 pr-[75.10px] left-0 top-0 absolute justify-start items-center gap-[801px] inline-flex">
        <Link to="/">
          <img
            className="WhiteAndBlackModernAbstractBeautyLogoRemovebgPreview1 w-[162px] h-[127px]"
            src={logo}
            alt="Logo"
          />
        </Link>
        <div className="Frame3 self-stretch justify-end items-center gap-10 inline-flex">
          <Link to="/" className="Home w-[48.41px] text-black text-sm font-normal font-['Rubik']">Home</Link>
          <Link to="/about-us" className="AboutUs w-[74.48px] text-black text-sm font-normal font-['Rubik']">About Us</Link>
          <Link to="/contact-us" className="ContactUs w-[76px] text-black text-sm font-normal font-['Rubik']">Contact Us</Link>
          <Link to="/login" className="Frame2 h-[43px] px-6 py-[13px] bg-[#cfebf9] rounded-xl justify-start items-start gap-2.5 flex">
            <div className="Login text-black text-sm font-normal font-['Rubik']">Login</div>
          </Link>
        </div>
      </div>
      <div className="Frame492 px-[124px] pt-[52px] pb-[101px] left-0 top-[976px] absolute border-t border-black justify-center items-center gap-[641px] inline-flex">
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
      <div className="Frame96 w-[1297px] left-[75px] top-[157px] absolute justify-center items-center gap-[135px] inline-flex">
        <div className="Frame95 flex-col justify-start items-start gap-[54px] inline-flex">
          <div className="Frame82 flex-col justify-start items-start gap-5 flex">
            <div className="LetSTalk text-black text-[64px] font-bold font-['Noe Display']">Let’s Talk</div>
            <div className="HaveSomeBigIdeaOrBrandToDevelopAndNeedHelpThenReachOutWeDLoveToHearAboutYourProjectAndProvideHelp w-[538px] text-black text-xl font-normal font-['Poppins']">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help</div>
          </div>
          <div className="Frame81 flex-col justify-start items-start gap-5 flex">
            <div className="Email text-black text-[32px] font-bold font-['Noe Display']">Email</div>
            <div className="BeebsGmailCom text-black text-base font-normal font-['Poppins']">neighbornest@gmail.com</div>
          </div>
          <div className="Frame81 flex-col justify-start items-start gap-5 flex">
            <div className="Socials text-black text-[32px] font-bold font-['Noe Display']">Socials</div>
            <a href="https://www.instagram.com/neighbornest" target="_blank" rel="noopener noreferrer" className="Instagram text-black text-base font-normal font-['Poppins'] underline">
              Instagram
            </a>
            <a href="https://www.twitter.com/neighbornest" target="_blank" rel="noopener noreferrer" className="Twitter text-black text-base font-normal font-['Poppins'] underline">
              Twitter
            </a>
            <a href="https://www.facebook.com/neighbornest" target="_blank" rel="noopener noreferrer" className="Facebook text-black text-base font-normal font-['Poppins'] underline">
              Facebook
            </a>
          </div>
        </div>
        <div className="Frame94 flex-col justify-start items-end gap-7 inline-flex">
          <form onSubmit={handleSubmit}>
            <div className="Frame83 flex-col justify-start items-start gap-[15px] flex">
              <div className="Name text-black text-sm font-normal font-['Poppins']">Name</div>
              <input
                className="Rectangle52 w-[563px] h-[46px] bg-[#f6f6f6] px-4"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="Frame84 flex-col justify-start items-start gap-[15px] flex">
              <div className="Email text-black text-sm font-normal font-['Poppins']">Email</div>
              <input
                className="Rectangle52 w-[563px] h-[46px] bg-[#f6f6f6] px-4"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="Frame92 h-[82px] flex-col justify-start items-start gap-[15px] flex">
              <div className="WhatServiceAreYouInterestedIn text-black text-sm font-normal font-['Poppins']">What service are you interested in</div>
              <input
                className="Frame90 self-stretch px-4 py-[11px] bg-[#f6f6f6] w-[563px]"
                type="text"
                name="service"
                value={formData.service}
                onChange={handleChange}
                placeholder="Select project type"
              />
            </div>
            <div className="Frame87 flex-col justify-start items-start gap-[15px] flex">
              <div className="Message text-black text-sm font-normal font-['Poppins']">Message</div>
              <textarea
                className="Rectangle52 w-[563px] h-[165px] bg-[#f6f6f6] px-4 py-2"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="Frame93 px-[246px] py-[13px] bg-black justify-start items-start gap-2.5 inline-flex">
              <button type="submit" className="Submit text-white text-xl font-medium font-['Poppins']">
                Submit
              </button>
            </div>
            {formError && <p className="text-red-500 mt-4">{formError}</p>}
            {formSuccess && <p className="text-green-500 mt-4">{formSuccess}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
