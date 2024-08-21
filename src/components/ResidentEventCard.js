
import React from 'react';

const ResidentEventCard = ({ event, onEdit, onDelete }) => {
  return (
    <div className="Group239188 w-[897px] h-[758px] relative">
      {/* Card content */}
      <div className="TitleDesc self-stretch h-24 flex-col justify-start items-start gap-2 flex">
        <div className="TalkItOutWithAudio self-stretch text-[#333333] text-xl font-medium font-['Poppins'] leading-7">
          {event.title}
        </div>
        <div className="UseAudioToHaveLiveConversationsWithOtherCollaboratorsDirectlyInYourFigmaAndFigjamFiles self-stretch opacity-80 text-[#333333] text-sm font-normal font-['Lato'] leading-tight tracking-tight">
          {event.description}
        </div>
        <div className="March012021 opacity-60 text-[#333333] text-xs font-normal font-['Lato'] leading-none tracking-tight">
          {new Date(event.date_created).toLocaleDateString()}
        </div>
        <div className="Buttons flex justify-between items-center mt-4">
          <button onClick={onEdit} className="bg-blue-500 text-white px-4 py-2 rounded">
            Edit
          </button>
          <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResidentEventCard;