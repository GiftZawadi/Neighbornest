import React from 'react';

const ResidentNewsForm = () => {
  return (
    <div className="AddNews w-full h-screen relative bg-[#cbdae4] flex justify-center items-center">
      <img 
        className="WhiteAndBlackModernAbstractBeautyLogoRemovebgPreview1 w-[162px] h-[127px] absolute top-0 left-0" 
        src="https://via.placeholder.com/162x127" 
        alt="Logo"
      />
      <div className="Frame77 w-full max-w-lg h-auto p-6 bg-white rounded-xl border border-[#ababab] flex-col justify-start items-start gap-2.5">
        <div className="Frame69 w-full flex-col justify-center items-center gap-6 flex">
          <div className="IconPack w-[38px] h-[38px] relative" />
          <h2 className="AddNews text-center text-[#2d2e2e] text-[32px] font-semibold font-['Inter']">Add News</h2>

          <div className="Frame66 w-full flex-col justify-start items-start gap-4 flex">
            <label className="Title text-[#2d2e2e] text-base font-semibold font-['Inter']">Title</label>
            <input 
              className="Input w-full px-4 py-[17px] bg-[#f6f6f6] rounded text-[#ababab] text-base font-normal font-['Inter'] leading-snug" 
              placeholder="News title"
            />
          </div>

          <div className="Frame74 w-full flex-col justify-start items-start gap-4 flex">
            <label className="Description text-[#2d2e2e] text-base font-semibold font-['Inter']">Description</label>
            <textarea 
              className="Input w-full px-4 py-[17px] bg-[#f6f6f6] rounded text-[#ababab] text-base font-normal font-['Inter'] leading-snug" 
              placeholder="Brief description of item"
            />
          </div>

          <div className="Frame67 w-full flex-col justify-start items-start gap-4 flex">
            <label className="Date text-[#2d2e2e] text-base font-semibold font-['Inter']">Date</label>
            <input 
              type="date" 
              className="Input w-full px-4 py-[17px] bg-[#f6f6f6] rounded text-[#ababab] text-base font-normal font-['Inter'] leading-snug"
              placeholder="Date created"
            />
          </div>

          <div className="Frame75 w-full flex-col justify-start items-start gap-4 flex">
            <label className="ImageUrl text-[#2d2e2e] text-base font-semibold font-['Inter']">Image URL</label>
            <input 
              className="Input w-full px-4 py-[17px] bg-[#f6f6f6] rounded text-[#ababab] text-base font-normal font-['Inter'] leading-snug" 
              placeholder="Image address"
            />
          </div>

          <div className="Frame76 w-full flex-col justify-center items-start gap-6 flex">
            <button className="Button w-full px-[30px] py-[17px] bg-[#264065] rounded text-center text-white text-lg font-medium font-['Inter']">
              Add News
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentNewsForm;
