import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResidentEventForm = ({ residentId, onSave, onClose, event = {} }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
  });
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (event) {
      setFormData({
        title: event.title || '',
        description: event.description || '',
        date: event.date || '',
      });
      setImage(null);
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('date', formData.date);
    
    if (image) {
      formDataToSend.append('image', image);
    }

    try {
      if (event.id) {
        const response = await axios.put(`http://localhost:5000/residents/${residentId}/events/${event.id}`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        onSave(response.data);
      } else {
        const response = await axios.post(`http://localhost:5000/residents/${residentId}/events`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        onSave(response.data);
      }
    } catch (err) {
      console.error('Failed to save event:', err);
    }

    setFormData({
      title: '',
      description: '',
      date: '',
    });
    setImage(null);

    if (onClose) onClose();
  };

  return (
    <div className="add-event-form w-full h-screen bg-[#cbdae4] flex justify-center items-center">
      <div className="form-container p-6 bg-white rounded-xl border border-gray-400 flex flex-col">
        <div className="form-header text-2xl font-semibold text-center">
          {event.id ? 'Edit Event' : 'Add Event'}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="input-field w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="textarea-field w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input-field w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="file-input w-full p-2 border border-gray-300 rounded-lg"
          />
          <div className="form-footer flex justify-between">
            <button
              type="submit"
              className="submit-button w-full bg-blue-600 text-white p-2 rounded-lg"
            >
              {event.id ? 'Update' : 'Add'} Event
            </button>
            <button
              type="button"
              onClick={onClose}
              className="close-button w-full bg-gray-600 text-white p-2 rounded-lg ml-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResidentEventForm;
