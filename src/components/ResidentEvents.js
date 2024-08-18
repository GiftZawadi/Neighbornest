import React, { useState } from 'react';
import ResidentEventCard from './ResidentEventCard';
import ResidentEventForm from './ResidentEventForm';
import ResidentLayout from './ResidentLayout';

const ResidentEvents = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleAddEventClick = () => {
    setFormVisible(!isFormVisible);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <ResidentLayout showSidebar={!isFormVisible}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Events</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddEventClick}
        >
          {isFormVisible ? 'Back to Events' : 'Add Event'}
        </button>
      </div>

      {/* Conditionally render the form or event cards */}
      {isFormVisible ? (
        <ResidentEventForm onClose={handleCloseForm} />
      ) : (
        <ResidentEventCard />
      )}
    </ResidentLayout>
  );
};

export default ResidentEvents;
