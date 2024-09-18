import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPage.css";

const AddPage = ({ onAddEvent }) => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    image: "",
    status: "Upcoming",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      newEvent.title &&
      newEvent.date &&
      newEvent.time &&
      newEvent.location &&
      newEvent.image
    ) {
      onAddEvent(newEvent);
      navigate("/");
    } else {
      alert("Please fill all the required fields!");
    }
  };

  return (
    <div className="add-event-container">
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit} className="add-event-form">
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Event Description"
          value={newEvent.description}
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <input
          type="time"
          value={newEvent.time}
          onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newEvent.location}
          onChange={(e) =>
            setNewEvent({ ...newEvent, location: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newEvent.image}
          onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
        />

        <select
          value={newEvent.status}
          onChange={(e) => setNewEvent({ ...newEvent, status: e.target.value })}
        >
          <option value="Upcoming">Upcoming</option>
          <option value="Past">Past</option>
        </select>

        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddPage;
