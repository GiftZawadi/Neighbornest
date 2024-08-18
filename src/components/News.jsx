// components/News.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';

export default function News() {
  return (
    <AdminLayout>
        <div className="p-4">
      <Link to="/create-news" className="bg-blue-500 text-white px-4 py-2 rounded">Create News</Link>
      <div className="news-cards grid grid-cols-3 gap-4 mt-4">
        {/* Map through news data */}
        <div className="news-card bg-white shadow p-4 rounded">
          <img src="/assets/news-image.svg" alt="News" className="w-full h-32 object-cover rounded" />
          <div className="mt-2">
            <h3 className="font-semibold">News Title</h3>
            <p className="text-sm">News Description...</p>
            <p className="text-xs text-gray-500">Date Created: 2023-08-18</p>
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
