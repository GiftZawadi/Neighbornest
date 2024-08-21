import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddNews() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({}); // To store validation errors

  const adminId = localStorage.getItem('userID'); // Get adminID from localStorage

  // Form validation
  const validateForm = () => {
    let formErrors = {};
    if (!title) formErrors.title = 'Title is required';
    if (!description) formErrors.description = 'Description is required';
    if (!dateCreated) formErrors.dateCreated = 'Date is required';
    if (!image) formErrors.image = 'Image is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Fetch user data and add event
  const fetchNewsData = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('date_created', dateCreated);
    formData.append('image', image);

    try {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch(`http://127.0.0.1:5000/admins/${adminId}/news`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, // Include token for authorization
        },
        body: formData,
      });

      const data = await response.json(); // Correctly parse the response to JSON

      if (response.ok) {
        toast.success('News added successfully!');
        navigate('/admin-news'); // Redirect to the admin dashboard
      } else {
        toast.error(data.message || 'Failed to add news item');
      }
    } catch (error) {
      toast.error('Failed to add news. Please try again.');
    }
  };

  // Handle form submission
  const handleAddNews = () => {
    if (validateForm()) {
      fetchNewsData();
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
      <div className="Frame77 h-[689px] p-6 left-[491px] top-[87.50px] absolute rounded-xl border border-[#ababab] flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="Frame69 self-stretch h-[641px] flex-col justify-center items-center gap-6 flex">
          <div className="Login self-stretch text-center text-[#2d2e2e] text-[32px] font-semibold font-['Inter']">Add News</div>

          {/* Title Input */}
          <div className="Frame66 self-stretch h-[91px] flex-col justify-start items-start gap-4 flex">
            <div className="Title self-stretch text-[#2d2e2e] text-base font-semibold font-['Inter']">Title</div>
            <div className="Input self-stretch px-4 py-[17px] bg-[#f6f6f6] rounded justify-start items-start gap-2.5 inline-flex">
              <input
                type="text"
                placeholder="Enter news header"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`grow shrink basis-0 text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug bg-transparent outline-none w-full ${errors.title ? 'border border-red-500' : ''}`}
              />
            </div>
            {errors.title && <span className="text-red-500 text-sm">{errors.title}</span>}
          </div>

          {/* Description Input */}
          <div className="Frame74 self-stretch h-[91px] flex-col justify-start items-start gap-4 flex">
            <div className="Description self-stretch text-[#2d2e2e] text-base font-semibold font-['Inter']">Description</div>
            <div className="Input self-stretch px-4 py-[17px] bg-[#f6f6f6] rounded justify-start items-start gap-2.5 inline-flex">
              <textarea
                placeholder="Enter news description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`grow shrink basis-0 text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug bg-transparent outline-none w-full ${errors.description ? 'border border-red-500' : ''}`}
              />
            </div>
            {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
          </div>

          {/* Date Created Input */}
          <div className="Frame66 self-stretch h-[91px] flex-col justify-start items-start gap-4 flex">
            <div className="DateCreated self-stretch text-[#2d2e2e] text-base font-semibold font-['Inter']">Date Created</div>
            <div className="Input self-stretch px-4 py-[17px] bg-[#f6f6f6] rounded justify-start items-start gap-2.5 inline-flex">
              <input
                type="date"
                value={dateCreated}
                onChange={(e) => setDateCreated(e.target.value)}
                className={`grow shrink basis-0 text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug bg-transparent outline-none w-full ${errors.dateCreated ? 'border border-red-500' : ''}`}
              />
            </div>
            {errors.dateCreated && <span className="text-red-500 text-sm">{errors.dateCreated}</span>}
          </div>

          {/* Image Upload */}
          <div className="Frame66 self-stretch h-[91px] flex-col justify-start items-start gap-4 flex">
            <div className="Image self-stretch text-[#2d2e2e] text-base font-semibold font-['Inter']">Upload Image</div>
            <div className="Input self-stretch px-4 py-[17px] bg-[#f6f6f6] rounded justify-start items-start gap-2.5 inline-flex">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className={`grow shrink basis-0 text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug bg-transparent outline-none w-full ${errors.image ? 'border border-red-500' : ''}`}
              />
            </div>
            {errors.image && <span className="text-red-500 text-sm">{errors.image}</span>}
          </div>

          {/* Submit Button */}
          <div
            className="Frame73 self-stretch h-14 flex-col justify-center items-start gap-6 flex cursor-pointer"
            onClick={handleAddNews}
          >
            <div className="Button self-stretch px-[30px] py-[17px] bg-[#264065] rounded justify-center items-center gap-2.5 inline-flex">
              <div className="ContactUs grow shrink basis-0 text-center text-white text-lg font-medium font-['Inter']"> Add News</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNews;
