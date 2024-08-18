import React from 'react'
import logo from '../assets/logo.svg'

function AddNews() {
  return (
    <div className="AddNews w-[1440px] h-[864px] relative bg-[#cbdae4]">
  <img className="WhiteAndBlackModernAbstractBeautyLogoRemovebgPreview1 w-[162px] h-[127px] left-0 top-0 absolute" src={logo} alt="Logo" />
  <div className="Frame77 h-[689px] p-6 left-[491px] top-[87.50px] absolute rounded-xl border border-[#ababab] flex-col justify-start items-start gap-2.5 inline-flex">
    <div className="Frame69 self-stretch h-[641px] flex-col justify-center items-center gap-6 flex">
      <div className="IconPack w-[38px] h-[38px] relative" />
      <div className="AddNews self-stretch text-center text-[#2d2e2e] text-[32px] font-semibold font-['Inter']">Add News</div>
      <div className="Frame66 self-stretch h-[91px] flex-col justify-start items-start gap-4 flex">
        <div className="Title self-stretch text-[#2d2e2e] text-base font-semibold font-['Inter']">Title</div>
        <div className="Input self-stretch px-4 py-[17px] bg-[#f6f6f6] rounded justify-start items-start gap-2.5 inline-flex">
          <div className="EnterYourEmailAddress grow shrink basis-0 text-[#ababab] text-base font-normal font-['Inter'] leading-snug">News title</div>
        </div>
      </div>
      <div className="Frame74 self-stretch h-[91px] flex-col justify-start items-start gap-4 flex">
        <div className="Description self-stretch text-[#2d2e2e] text-base font-semibold font-['Inter']">Description</div>
        <div className="Input self-stretch px-4 py-[17px] bg-[#f6f6f6] rounded justify-start items-start gap-2.5 inline-flex">
          <div className="EnterYourEmailAddress grow shrink basis-0 text-[#ababab] text-base font-normal font-['Inter'] leading-snug">Brief description of item</div>
        </div>
      </div>
      <div className="Frame67 self-stretch h-[91px] flex-col justify-start items-start gap-4 flex">
        <div className="Frame79 self-stretch justify-start items-start gap-4 inline-flex">
          <div className="Date w-[410px] text-[#2d2e2e] text-base font-semibold font-['Inter']">Date</div>
        </div>
        <div className="Input self-stretch px-4 py-[17px] bg-[#f6f6f6] rounded justify-start items-start gap-2.5 inline-flex">
          <div className="EnterYourEmailAddress grow shrink basis-0 text-[#ababab] text-base font-normal font-['Inter'] leading-snug">Date created</div>
        </div>
      </div>
      <div className="Frame75 self-stretch h-[91px] flex-col justify-start items-start gap-4 flex">
        <div className="Frame79 self-stretch justify-start items-start gap-4 inline-flex">
          <div className="ImageUrl w-[410px] text-[#2d2e2e] text-base font-semibold font-['Inter']">Image URL</div>
        </div>
        <div className="Input self-stretch px-4 py-[17px] bg-[#f6f6f6] rounded justify-start items-start gap-2.5 inline-flex">
          <div className="EnterYourEmailAddress grow shrink basis-0 text-[#ababab] text-base font-normal font-['Inter'] leading-snug">Image address</div>
        </div>
      </div>
      <div className="Frame76 self-stretch h-14 flex-col justify-center items-start gap-6 flex">
        <div className="Button self-stretch px-[30px] py-[17px] bg-[#264065] rounded justify-center items-center gap-2.5 inline-flex">
          <div className="ContactUs grow shrink basis-0 text-center text-white text-lg font-medium font-['Inter']">Add News</div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default AddNews