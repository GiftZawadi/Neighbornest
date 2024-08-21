import React from 'react';

const ResidentNeighbors = ({ neighbors }) => {
  return (
    <div className="Group239187 w-[1003px] h-[502px] relative">
      {neighbors.map((neighbor) => (
        <div key={neighbor.id} className="Frame504 h-[227px] left-0 top-0 absolute justify-start items-center gap-[65px] inline-flex">
          <div className="Frame501 p-6 bg-[#f6f6f6] rounded-lg flex-col justify-start items-center gap-4 inline-flex">
            <div className="Frame28 flex-col justify-start items-center gap-4 flex">
              <div className="Avatar w-14 h-14 justify-center items-center inline-flex">
                <img className="Ellipse1 w-14 h-14 rounded-full" src={neighbor.avatar_url || "https://via.placeholder.com/56x56"} alt="Avatar" />
              </div>
            </div>
            <div className="Frame27 flex-col justify-center items-center gap-6 flex">
              <div className="LoraSmith text-[#2d2e2e] text-base font-semibold font-['Inter']">{neighbor.name}</div>
              <div className="HouseNumber text-[#2d2e2e] text-base font-semibold font-['Inter']">{neighbor.house_number}</div>
              <div className="LorasmithRiaraaptCom w-[243px] h-[21px] text-center text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug">
                {neighbor.email}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResidentNeighbors;
