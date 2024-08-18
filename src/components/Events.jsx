// components/Events.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';


export default function Events() {
  return (
    <AdminLayout>
        <div className="p-4">
      <Link to="/create-event" className="bg-blue-500 text-white px-4 py-2 rounded">Create Event</Link>
      <div className="event-cards grid grid-cols-3 gap-4 mt-4">
        {/* Map through events data */}
        <div className="event-card bg-white shadow p-4 rounded">
          <img src="/assets/events-image.svg" alt="Event" className="w-full h-32 object-cover rounded" />
          <div className="mt-2">
            <h3 className="font-semibold">Event Title</h3>
            <p className="text-sm">Event Description...</p>
            <p className="text-xs text-gray-500">Date: 2023-08-18</p>
            <div className="mt-4 flex justify-between">
              <button className="bg-green-500 text-white px-4 py-2 rounded">Edit</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AdminLayout>
  );
}
