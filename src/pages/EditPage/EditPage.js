import React, { useState } from "react";
import "./EditPage.css";

const EditPage = ({ event, onSave, onClose }) => {
  const [editedEvent, setEditedEvent] = useState({ ...event });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent({
      ...editedEvent,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(editedEvent);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Event</h2>
        <form>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={editedEvent.title}
            onChange={handleInputChange}
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={editedEvent.description}
            onChange={handleInputChange}
          />
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={editedEvent.date}
            onChange={handleInputChange}
          />
          <label>Time</label>
          <input
            type="time"
            name="time"
            value={editedEvent.time}
            onChange={handleInputChange}
          />
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={editedEvent.location}
            onChange={handleInputChange}
          />
          <label>Status</label>
          <select
            name="status"
            value={editedEvent.status}
            onChange={handleInputChange}
          >
            <option value="Upcoming">Upcoming</option>
            <option value="Past">Past</option>
          </select>
        </form>
        <div className="modal-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
