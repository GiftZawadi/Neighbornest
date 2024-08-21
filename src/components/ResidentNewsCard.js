import React, { useState } from 'react';
import ResidentNewsForm from './ResidentNewsForm';

const ResidentNewsCard = ({ newsItem }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddNewsClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="news-card w-[312px] h-[495px] p-3 bg-white rounded-lg flex flex-col justify-center items-center">
      <div className="thumbnail h-[209px] rounded justify-center items-center">
        <img
          className="thumbnail grow shrink basis-0 self-stretch"
          src={newsItem.imageUrl || "https://via.placeholder.com/288x209"}
          alt="News"
        />
      </div>
      <div className="content self-stretch h-[195px] pt-6 pb-4 bg-white flex-col justify-center items-center">
        <div className="title text-[#333333] text-xl font-medium">{newsItem.title}</div>
        <div className="description opacity-80 text-[#333333] text-sm">{newsItem.content}</div>
        <div className="date opacity-60 text-[#333333] text-xs">
          {new Date(newsItem.created_at).toLocaleDateString()}
        </div>
      </div>

      <button onClick={handleAddNewsClick} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Add News
      </button>

      {showForm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <ResidentNewsForm onClose={handleCloseForm} />
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
