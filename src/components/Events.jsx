import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminLayout from './AdminLayout';

const AdminDashboardMainContent = () => {
  const [events, setEvents] = useState([]);
  const adminId = localStorage.getItem('userID');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get(`http://127.0.0.1:5000/admins/${adminId}/events`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Initialize fields to ensure they are never undefined
        const eventsWithDefaults = response.data.map(event => ({
          ...event,
          title: event.title || '',
          date: event.date || '',
          description: event.description || '',
          isEditing: false, // Add isEditing flag if it's not in the backend response
        }));

        setEvents(eventsWithDefaults);
      } catch (error) {
        console.error('Error fetching events', error);
      }
    };

    if (adminId) {
      fetchEvents();
    }
  }, [adminId]);

  const handleEdit = id => {
    setEvents(events.map(event =>
      event.id === id ? { ...event, isEditing: !event.isEditing } : event
    ));
  };

  const handleDelete = async id => {
    try {
      const token = localStorage.getItem('jwtToken');
      await axios.delete(`http://127.0.0.1:5000/admins/${adminId}/events/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setEvents(events.filter(event => event.id !== id));
    } catch (error) {
      console.error('Error deleting event', error);
    }
  };

  const handleInputChange = (id, field, value) => {
    setEvents(events.map(event =>
      event.id === id ? { ...event, [field]: value } : event
    ));
  };

  const handleSave = async id => {
    const eventToUpdate = events.find(event => event.id === id);
    try {
      const token = localStorage.getItem('jwtToken');
      await axios.put(`http://127.0.0.1:5000/admins/${adminId}/events/${id}`, eventToUpdate, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setEvents(events.map(event =>
        event.id === id ? { ...event, isEditing: false } : event
      ));
    } catch (error) {
      console.error('Error updating event', error);
    }
  };

  return (
    <AdminLayout>
    <div className="p-6">
      <Link to="/create-event" className="Frame3 h-10 pl-4 pr-6 py-2 bg-[#cfebf9] rounded justify-start items-center gap-3 inline-flex cursor-pointer">
        <div className="IcRoundPlus w-6 h-6 relative" />
        <div className="AddEvent text-[#4c4c4c] text-base font-medium font-['Manrope'] leading-normal">Add Event</div>
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="Frame495 h-[339px] p-6 bg-[#f6f6f6] rounded-lg flex-col justify-start items-center gap-4 inline-flex">
            {event.isEditing ? (
              <>
                <input
                  type="text"
                  value={event.title}
                  onChange={(e) => handleInputChange(event.id, 'title', e.target.value)}
                  className="text-[#2d2e2e] text-base font-semibold font-['Inter']"
                />
                <input
                  type="date"
                  value={event.date}
                  onChange={(e) => handleInputChange(event.id, 'date', e.target.value)}
                  className="w-[243px] h-[21px] text-center text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug"
                />
                <textarea
                  value={event.description}
                  onChange={(e) => handleInputChange(event.id, 'description', e.target.value)}
                  className="border p-2 w-full mb-2"
                />
                <button
                  className="bg-264065 text-black px-4 py-2 rounded mr-2"
                  onClick={() => handleSave(event.id)}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => handleEdit(event.id)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-gray-200 h-16 w-16"></div>
                </div>
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p>{event.date}</p>
                <p>{event.description}</p>
                <div className="flex mt-4">
                  <button
                    className="bg-264065 text-black px-4 py-2 rounded mr-2"
                    onClick={() => handleEdit(event.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-264065 text-black px-4 py-2 rounded"
                    onClick={() => handleDelete(event.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
    </AdminLayout>
  );
};

export default AdminDashboardMainContent;
