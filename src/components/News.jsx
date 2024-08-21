import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminLayout from './AdminLayout';

const News = () => {
  const [news, setNews] = useState([]);
  const adminId = localStorage.getItem('userID');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get(`http://127.0.0.1:5000/admins/${adminId}/news`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Initialize fields to ensure they are never undefined
        const newsWithDefaults = response.data.map(newsItem => ({
          ...newsItem,
          title: newsItem.title || '',
          date: newsItem.date || '',
          description: newsItem.description || '',
          isEditing: false, // Add isEditing flag if it's not in the backend response
        }));

        setNews(newsWithDefaults);
      } catch (error) {
        console.error('Error fetching news', error);
      }
    };

    if (adminId) {
      fetchNews();
    }
  }, [adminId]);

  const handleEdit = id => {
    setNews(news.map(newsItem =>
      newsItem.id === id ? { ...newsItem, isEditing: !newsItem.isEditing } : newsItem
    ));
  };

  const handleDelete = async id => {
    try {
      const token = localStorage.getItem('jwtToken');
      await axios.delete(`http://127.0.0.1:5000/admins/${adminId}/news/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setNews(news.filter(newsItem => newsItem.id !== id));
    } catch (error) {
      console.error('Error deleting news item', error);
    }
  };

  const handleInputChange = (id, field, value) => {
    setNews(news.map(newsItem =>
      newsItem.id === id ? { ...newsItem, [field]: value } : newsItem
    ));
  };

  const handleSave = async id => {
    const newsToUpdate = news.find(newsItem => newsItem.id === id);
    try {
      const token = localStorage.getItem('jwtToken');
      await axios.put(`http://127.0.0.1:5000/admins/${adminId}/news/${id}`, newsToUpdate, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setNews(news.map(newsItem =>
        newsItem.id === id ? { ...newsItem, isEditing: false } : newsItem
      ));
    } catch (error) {
      console.error('Error updating news item', error);
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <Link to="/create-news" className="Frame3 h-10 pl-4 pr-6 py-2 bg-[#cfebf9] rounded justify-start items-center gap-3 inline-flex cursor-pointer">
          <div className="IcRoundPlus w-6 h-6 relative" />
          <div className="AddNews text-[#4c4c4c] text-base font-medium font-['Manrope'] leading-normal">Add News</div>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map(newsItem => (
            <div key={newsItem.id} className="Frame495 h-[339px] p-6 bg-[#f6f6f6] rounded-lg flex-col justify-start items-center gap-4 inline-flex">
              {newsItem.isEditing ? (
                <>
                  <input
                    type="text"
                    value={newsItem.title}
                    onChange={(e) => handleInputChange(newsItem.id, 'title', e.target.value)}
                    className="text-[#2d2e2e] text-base font-semibold font-['Inter']"
                  />
                  <input
                    type="date"
                    value={newsItem.date}
                    onChange={(e) => handleInputChange(newsItem.id, 'date', e.target.value)}
                    className="w-[243px] h-[21px] text-center text-[#2d2e2e] text-base font-normal font-['Inter'] leading-snug"
                  />
                  <textarea
                    value={newsItem.description}
                    onChange={(e) => handleInputChange(newsItem.id, 'description', e.target.value)}
                    className="border p-2 w-full mb-2"
                  />
                  <button
                    className="bg-264065 text-black px-4 py-2 rounded mr-2"
                    onClick={() => handleSave(newsItem.id)}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                    onClick={() => handleEdit(newsItem.id)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-gray-200 h-16 w-16"></div>
                  </div>
                  <h3 className="text-lg font-semibold">{newsItem.title}</h3>
                  <p>{newsItem.date}</p>
                  <p>{newsItem.description}</p>
                  <div className="flex mt-4">
                    <button
                      className="bg-264065 text-black px-4 py-2 rounded mr-2"
                      onClick={() => handleEdit(newsItem.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-264065 text-black px-4 py-2 rounded"
                      onClick={() => handleDelete(newsItem.id)}
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

export default News;
