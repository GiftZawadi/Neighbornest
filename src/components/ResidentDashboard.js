import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResidentNeighbors from './ResidentNeighbors';
import ResidentLayout from './ResidentLayout';

const ResidentDashboard = ({ residentId }) => {
  const [neighbors, setNeighbors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNeighbors = async () => {
      try {
        const token = localStorage.getItem('jwtToken'); // Retrieve the JWT token from localStorage
        const response = await axios.get(`http://localhost:5000/residents/${residentId}/neighbors`, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request header
          },
        });
        setNeighbors(response.data);
      } catch (err) {
        setError('Failed to fetch neighbors');
      } finally {
        setLoading(false);
      }
    };

    fetchNeighbors();
  }, [residentId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ResidentNeighbors neighbors={neighbors} />
    
  );
};

export default ResidentDashboard;
