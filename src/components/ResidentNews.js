import React, { useState } from 'react';
import ResidentNewsCard from './ResidentNewsCard';
import ResidentNewsForm from './ResidentNewsForm';
import ResidentLayout from './ResidentLayout';

const ResidentNews = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleAddNewsClick = () => {
    setFormVisible(!isFormVisible);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <ResidentLayout showSidebar={!isFormVisible}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">News</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddNewsClick}
        >
          {isFormVisible ? 'Back to News' : 'Add News'}
        </button>
      </div>

      {/* Conditionally render the form or news cards */}
      {isFormVisible ? (
        <ResidentNewsForm onClose={handleCloseForm} />
      ) : (
        <ResidentNewsCard />
      )}
    </ResidentLayout>
  );
};

export default ResidentNews;
