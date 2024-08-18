import React, { useState } from 'react';
import ResidentNewsForm from './ResidentNewsForm';

const ResidentNewsCard = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddNewsClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="Group239189 w-[897px] h-[753px] relative">
      {  }
      <div
        className="Frame3 h-10 pl-4 pr-6 py-2 left-0 top-0 absolute bg-[#cfebf9] rounded justify-start items-center gap-3 inline-flex cursor-pointer"
        onClick={handleAddNewsClick}
      >
        <div className="IcRoundPlus w-6 h-6 relative" />
        <div className="AddNews text-[#4c4c4c] text-base font-medium font-['Manrope'] leading-normal">Add News</div>
      </div>

      {/* News Cards */}
      <div className="CardArticle w-[312px] h-[495px] p-3 left-0 top-[60px] absolute bg-white rounded-lg flex-col justify-center items-center inline-flex">
        <div className="Thumbnail h-[209px] rounded justify-center items-center inline-flex">
          <img className="Thumbnail grow shrink basis-0 self-stretch" src="https://via.placeholder.com/288x209" alt="News" />
        </div>
        <div className="BodyContent self-stretch h-[195px] pt-6 pb-4 bg-white flex-col justify-center items-center gap-[26px] flex">
          <div className="TagTitle self-stretch h-24 flex-col justify-start items-start gap-5 flex">
            <div className="TitleDesc self-stretch h-24 flex-col justify-start items-start gap-2 flex">
              <div className="TalkItOutWithAudio self-stretch text-[#333333] text-xl font-medium font-['Poppins'] leading-7">News title</div>
              <div className="UseAudioToHaveLiveConversationsWithOtherCollaboratorsDirectlyInYourFigmaAndFigjamFiles self-stretch opacity-80 text-[#333333] text-sm font-normal font-['Lato'] leading-tight tracking-tight">
                Use audio to have live conversations with other collaborators directly in your Figma and FigJam files.
              </div>
            </div>
          </div>
          <div className="Footer self-stretch h-[33px] flex-col justify-start items-start gap-4 flex">
            <div className="WrapContent self-stretch justify-between items-center inline-flex">
              <div className="Date justify-start items-center gap-2 flex">
                <div className="March012021 opacity-60 text-[#333333] text-xs font-normal font-['Lato'] leading-none tracking-tight">March 01, 2021</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other cards... */}
      
      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <ResidentNewsForm />
          <button
            className="absolute top-5 right-5 text-white text-xl"
            onClick={handleCloseForm}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ResidentNewsCard;
