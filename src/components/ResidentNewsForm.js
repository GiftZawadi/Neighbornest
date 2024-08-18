import React, { useState } from 'react';

const ResidentNewsForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add form validation here

    // Submit the form data
    console.log('Form submitted:', formData);

    // Optionally, clear the form or close the form
    setFormData({
      title: '',
      content: '',
      imageUrl: '',
    });

    // Call onClose if provided
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="AddNews w-full h-screen relative bg-[#cbdae4]">
      <img
        className="WhiteAndBlackModernAbstractBeautyLogoRemovebgPreview1 w-[162px] h-[127px] absolute left-0 top-0"
        src="https://via.placeholder.com/162x127"
        alt="Logo"
      />
      <div className="Frame77 h-[689px] p-6 absolute left-1/2 transform -translate-x-1/2 top-[87.5px] rounded-xl border border-gray-400 flex flex-col justify-start items-start gap-2.5">
        <div className="Frame69 w-full flex flex-col justify-center items-center gap-6">
          <div className="AddNews text-center text-[#2d2e2e] text-2xl font-semibold">
            Add News
          </div>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div className="Frame66 w-full flex flex-col justify-start items-start gap-4">
              <label className="Title text-[#2d2e2e] text-base font-semibold">
                Title
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="Input w-full px-4 py-[17px] bg-[#f6f6f6] rounded"
                  placeholder="News title"
                />
              </label>
            </div>
            <div className="Frame74 w-full flex flex-col justify-start items-start gap-4">
              <label className="Description text-[#2d2e2e] text-base font-semibold">
                Content
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="Input w-full px-4 py-[17px] bg-[#f6f6f6] rounded"
                  placeholder="News content"
                />
              </label>
            </div>
            <div className="Frame75 w-full flex flex-col justify-start items-start gap-4">
              <label className="ImageUrl text-[#2d2e2e] text-base font-semibold">
                Image URL
                <input
                  type="text"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="Input w-full px-4 py-[17px] bg-[#f6f6f6] rounded"
                  placeholder="Image address"
                />
              </label>
            </div>
            <div className="Frame76 w-full flex flex-col justify-center items-start gap-6">
              <button
                type="submit"
                className="Button w-full px-[30px] py-[17px] bg-[#264065] rounded flex justify-center items-center gap-2.5"
              >
                <div className="ContactUs text-white text-lg font-medium">
                  Add News
                </div>
              </button>
            </div>
          </form>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResidentNewsForm;
