import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResidentNewsCard from './ResidentNewsCard';

const ResidentNews = ({ residentId }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!residentId) {
      setError('Resident ID is undefined. Cannot load news.');
      setLoading(false);
      return;
    }

    const fetchNews = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get(`http://localhost:5000/residents/${residentId}/news`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setNews(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [residentId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {news.map((newsItem) => (
        <ResidentNewsCard key={newsItem.id} newsItem={newsItem} />
      ))}
      <button onClick={() => setNews((prevNews) => [
        ...prevNews,
        { id: Date.now(), title: 'New News', content: 'Description here', imageUrl: '', created_at: new Date().toISOString() },
      ])}>
        + Add News
      </button>
    </div>
  );
};

export default ResidentNews;
