import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResidentEventCard from './ResidentEventCard';
import ResidentEventForm from './ResidentEventForm';

const ResidentEvents = ({ residentId, jwtToken }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    if (!residentId) {
      setError('Resident ID is undefined. Cannot load events.');
      setLoading(false);
      return;
    }

    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/residents/${residentId}/events`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );
        setEvents(response.data);
      } catch (err) {
        setError('Failed to fetch events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [residentId, jwtToken]);

  const handleAddEvent = async (eventData) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/residents/${residentId}/events`,
        eventData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      setEvents([...events, response.data]);
    } catch (err) {
      setError('Failed to add event');
    }
  };

  const handleUpdateEvent = async (eventData, eventId) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/residents/${residentId}/events/${eventId}`,
        eventData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      setEvents(events.map(event => (event.event_id === eventId ? response.data : event)));
    } catch (err) {
      setError('Failed to update event');
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(
        `http://localhost:5000/residents/${residentId}/events/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      setEvents(events.filter(event => event.event_id !== eventId));
    } catch (err) {
      setError('Failed to delete event');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <button onClick={() => {
        setEditingEvent(null);
        setShowForm(true);
      }}>Add Event</button>
      {showForm && (
        <ResidentEventForm
          residentId={residentId}
          event={editingEvent}
          onSave={(eventData) => {
            if (editingEvent) {
              handleUpdateEvent(eventData, editingEvent.event_id);
            } else {
              handleAddEvent(eventData);
            }
            setShowForm(false);
          }}
          onClose={() => setShowForm(false)}
        />
      )}
      {events.map((event) => (
        <ResidentEventCard
          key={event.event_id}
          event={event}
          onEdit={() => {
            setEditingEvent(event);
            setShowForm(true);
          }}
          onDelete={() => handleDeleteEvent(event.event_id)}
        />
      ))}
    </div>
  );
};

export default ResidentEvents;
