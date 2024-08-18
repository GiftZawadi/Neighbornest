import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import beard from '../assets/beard.svg'
import braids from '../assets/braids.svg'
import lp from '../assets/lp.png'
import lp2 from '../assets/lp2.png'
import smile from '../assets/smile.svg'
import instagram from '../assets/instagram.svg'
import mail from '../assets/mail.svg'
import quote from '../assets/quote.svg'
import services from '../assets/services.svg'
import whatsapp from '../assets/whatsapp.svg'




function HomePage() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleGetStartedRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="LandingPage w-[1440px] h-[2526px] relative bg-[#cbdae4]">
  <div className="Title w-[784px] h-[539px] left-[94px] top-[202px] absolute cursor-pointer"
          onClick={handleGetStartedRedirect}>
    <div className="EmpoweringNeighborsToComeTogetherCreateLastingMemoriesAndStayInformedAboutTheLatestLocalHappeningsThroughSharedEventsAndNews w-[648px] left-0 top-[249px] absolute opacity-50 text-black text-2xl font-normal font-['Ponnala'] leading-10">Empowering neighbors to come together, create lasting memories, and stay informed about the latest local happenings through shared events and news.</div>
    <div className="ConnectingHeartsAndHomes w-[784px] left-0 top-0 absolute text-[#5168ad] text-[80px] font-bold font-['Merriweather']">Connecting Hearts and Homes</div>
    <div className="Button w-60 h-[60px] left-0 top-[479px] absolute">
      <div className="Rectangle w-60 h-[60px] left-0 top-0 absolute bg-[#264065] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow" />
      <div className="GetStarted left-[68px] top-[16px] absolute text-white text-lg font-normal font-['Poppins']">Get Started</div>
    </div>
  </div>
  <div className="Frame491 pr-[75.10px] left-0 top-0 absolute justify-start items-center gap-[801px] inline-flex">
  <img
      className="WhiteAndBlackModernAbstractBeautyLogoRemovebgPreview1 w-[162px] h-[127px]"
      src={logo}
      alt="Logo"
    />
    <div className="Frame3 self-stretch justify-end items-center gap-10 inline-flex">
      <Link className="Home w-[48.41px] text-black text-sm font-normal font-['Rubik']">Home</Link>
      <Link className="AboutUs w-[74.48px] text-black text-sm font-normal font-['Rubik']">About Us</Link>
      <Link className="ContactUs w-[76px] text-black text-sm font-normal font-['Rubik']">Contact Us</Link>
      <div className="Frame2 h-[43px] px-6 py-[13px] bg-[#cfebf9] rounded-xl justify-start items-start gap-2.5 flex cursor-pointer"
        onClick={handleLoginRedirect}>
        <div className="Login text-black text-sm font-normal font-['Rubik']">Login </div>
      </div>
    </div>
  </div>
  <div className="Group239182 w-[1298px] h-[541px] left-[71px] top-[1576px] absolute">
    <div className="WhatOurClientsSay left-[4px] top-0 absolute text-black text-5xl font-normal font-['Merriweather'] leading-[72px]">What Our Clients Say</div>
    <div className="Group17 w-[1298px] h-[363px] left-0 top-[178px] absolute">
      <div className="Frame44 h-[326px] left-0 top-[37px] absolute opacity-80 flex-col justify-center items-center inline-flex">
        <div className="Frame29 h-[254px] px-10 pt-[50px] pb-[90px] bg-[#f6f6f6] rounded-lg flex-col justify-start items-center gap-6 flex">
          <div className="IconPack w-6 h-6 relative" />
          <div className="Frame27 self-stretch h-[66px] flex-col justify-center items-start gap-6 flex">
            <div className="NeighbornestHasSimplifiedManagingOurCommunityEverythingIsInOnePlaceMakingMyJobEasierAndMoreEfficient self-stretch text-center text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug">NeighborNest has simplified managing our community. Everything is in one place, making my job easier and more efficient.</div>
          </div>
        </div>
        <div className="Frame28 flex-col justify-start items-center gap-2 flex">
          <img className="Avatar w-[90px] h-[90px] relative rounded-[80px]"
            src={beard}
            alt="Beard" />
          <div className="SimbaWangari text-[#2d2e2e] text-base font-semibold font-['Inter']">Simba Wangari</div>
        </div>
      </div>
      <div className="Frame46 h-[326px] left-[847px] top-[37px] absolute opacity-80 flex-col justify-center items-center inline-flex">
        <div className="Frame29 h-[254px] px-10 pt-[50px] pb-[90px] bg-[#f6f6f6] rounded-lg flex-col justify-start items-center gap-6 flex">
          <div className="IconPack w-6 h-6 relative" />
          <div className="Frame27 self-stretch h-[66px] flex-col justify-center items-start gap-6 flex">
            <div className="NeighbornestMakesItEasyToStayUpdatedAndCommunicateWithResidentsItSLikeHavingANeighborhoodHubOnMyPhone self-stretch text-center text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug">NeighborNest makes it easy to stay updated and communicate with residents. It’s like having a neighborhood hub on my phone!</div>
          </div>
        </div>
        <div className="Frame28 flex-col justify-start items-center gap-2 flex">
          <img className="Avatar w-[90px] h-[90px] relative rounded-[70px]"
            src={smile}
            alt="smile" />
          <div className="PatriciaMuli text-[#2d2e2e] text-base font-semibold font-['Inter']">Patricia Muli</div>
        </div>
      </div>
      <div className="Frame45 h-[326px] left-[422px] top-0 absolute shadow flex-col justify-center items-center inline-flex">
        <div className="Frame29 h-[254px] px-6 pt-[50px] pb-[90px] bg-[#eb9350] rounded-lg flex-col justify-start items-center gap-6 flex">
          <div className="IconPack w-6 h-6 relative" />
          <div className="Frame27 self-stretch h-[66px] flex-col justify-center items-start gap-6 flex">
            <div className="ThanksToNeighbornestIFeelMoreConnectedAndEngagedWithMyCommunityItSMadeOurNeighborhoodFeelLikeHome w-[403px] text-center text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug">Thanks to NeighborNest, I feel more connected and engaged with my community. It’s made our neighborhood feel like home.</div>
          </div>
        </div>
        <div className="Frame28 flex-col justify-start items-center gap-2 flex">
          <img className="Avatar w-[90px] h-[90px] relative rounded-[70px]"
            src={braids}
            alt="braids" />
          <div className="JemimahKaburu text-[#2d2e2e] text-base font-semibold font-['Inter']">Jemimah Kaburu</div>
        </div>
      </div>
    </div>
  </div>
  <div className="Frame481 px-[124px] pt-[52px] pb-[101px] left-0 top-[2163px] absolute border-t border-black justify-center items-center gap-[641px] inline-flex">
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
          <div className="IconPack w-5 h-5 relative"
           />
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
  <div className="Frame482 w-[1440px] h-[609px] left-0 top-[958px] absolute">
    <div className="FeatureGrid w-[1200px] left-[120px] top-[186px] absolute justify-center items-start gap-10 inline-flex">
      <div className="Feature grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
        <div className="IconContainer p-3 justify-center items-center gap-3 inline-flex">
          <div className="Bg w-12 h-12 opacity-50 bg-[#cfebf9] rounded-full" />
          <div className="IconIcon w-6 h-6 relative" />
        </div>
        <div className="TextContainer self-stretch h-[79px] flex-col justify-start items-center gap-2 flex">
          <div className="FeatureTitle self-stretch text-center text-stone-900 text-lg font-normal font-['Libre Baskerville'] leading-[27px]">Manage Your Neighbourhood</div>
          <div className="FeatureDescription self-stretch text-center text-stone-400 text-sm font-normal font-['Libre Baskerville'] leading-snug">Our app tailors workouts to your fitness level and goals, ensuring optimal results and safe progress.</div>
        </div>
      </div>
      <div className="Feature grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
        <div className="IconContainer p-3 justify-center items-center gap-3 inline-flex">
          <div className="Bg w-12 h-12 opacity-50 bg-[#cfebf9] rounded-full" />
          <div className="IconIcon w-6 h-6 relative" />
        </div>
        <div className="TextContainer self-stretch h-[101px] flex-col justify-start items-center gap-2 flex">
          <div className="FeatureTitle self-stretch text-center text-stone-900 text-lg font-normal font-['Libre Baskerville'] leading-[27px]">Connect with Neighbors</div>
          <div className="FeatureDescription self-stretch text-center text-stone-400 text-sm font-normal font-['Libre Baskerville'] leading-snug">Monitor your performance with detailed analytics, helping you stay on track and reach your fitness milestones.</div>
        </div>
      </div>
    </div>
    <div className="Services left-[94px] top-[25px] absolute text-black text-5xl font-normal font-['Merriweather'] leading-[72px]">Services</div>
  </div>
  <div className="FeatureGrid w-[1200px] left-[129px] top-[1333px] absolute justify-center items-start gap-10 inline-flex">
    <div className="Feature grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
      <div className="IconContainer p-3 justify-center items-center gap-3 inline-flex">
        <div className="Bg w-12 h-12 opacity-50 bg-[#cfebf9] rounded-full" />
        <div className="IconIcon w-6 h-6 relative" />
      </div>
      <div className="TextContainer self-stretch h-[79px] flex-col justify-start items-center gap-2 flex">
        <div className="FeatureTitle self-stretch text-center text-stone-900 text-lg font-normal font-['Libre Baskerville'] leading-[27px]">Organize/Join Events</div>
        <div className="FeatureDescription self-stretch text-center text-stone-400 text-sm font-normal font-['Libre Baskerville'] leading-snug">Our app tailors workouts to your fitness level and goals, ensuring optimal results and safe progress.</div>
      </div>
    </div>
    <div className="Feature grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
      <div className="IconContainer p-3 justify-center items-center gap-3 inline-flex">
        <div className="Bg w-12 h-12 opacity-50 bg-[#cfebf9] rounded-full" />
        <div className="IconIcon w-6 h-6 relative" />
      </div>
      <div className="TextContainer self-stretch h-[101px] flex-col justify-start items-center gap-2 flex">
        <div className="FeatureTitle self-stretch text-center text-stone-900 text-lg font-normal font-['Libre Baskerville'] leading-[27px]">Connect with Neighbors</div>
        <div className="FeatureDescription self-stretch text-center text-stone-400 text-sm font-normal font-['Libre Baskerville'] leading-snug">Monitor your performance with detailed analytics, helping you stay on track and reach your fitness milestones.</div>
      </div>
    </div>
  </div>
  <img className="Rectangle1 w-[415px] h-[337px] left-[784px] top-[404px] absolute rounded-xl border border-black"
    src={lp} 
    alt="lp" />
  <img className="Rectangle2 w-[401px] h-[319px] left-[971px] top-[223px] absolute rounded-xl border border-black"
    src={lp2}
    alt="lp2" />
</div>
  )
}

export default HomePage