
import React, { useState, useEffect } from 'react';
import eventData from '../../event.json'; 
import "./EventPage.css";
import EditEventModal from '../EditPage/EditPage'; 

const EventPage = ({ filter }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    } else {
      setEvents(eventData); 
    }
  }, []);

  useEffect(() => {
    if (filter === "All") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.status === filter));
    }
  }, [filter, events]);

  const openEditModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const saveEditedEvent = (editedEvent) => {
    const updatedEvents = events.map((event) =>
      event.id === editedEvent.id ? editedEvent : event
    );
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="event-list">
        {filteredEvents.length === 0 ? (
          <p>No events available</p>
        ) : (
          filteredEvents.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} />
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p>{event.date} at {event.time}</p>
              <p>Location: {event.location}</p>
              <p className={event.status === "Upcoming" ? "status-upcoming" : "status-past"}>
                Status: {event.status}
              </p>
              <button onClick={() => openEditModal(event)} className="edit-btn">Edit Event</button>
              <button className="add-btn">Add Calendar</button>
            </div>
          ))
        )}
      </div>

      {isModalOpen && selectedEvent && (
        <EditEventModal
          event={selectedEvent}
          onSave={saveEditedEvent}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default EventPage;
