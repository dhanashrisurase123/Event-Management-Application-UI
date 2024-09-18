import React, { useState } from "react";
import "./HomePage.css";
import EventPage from "../EventPage/EventPage";
import { Link } from "react-router-dom";

const HomePage = ({ events }) => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="container">
      <div className="content-box">
        <h1 className="title">Event</h1>

        <Link to="/add-event">
          <button className="add-event-btn">Add New Event</button>
        </Link>

        <select
          className="event-filter"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="All">All Events</option>
          <option value="Upcoming">Upcoming Events</option>
          <option value="Past">Past Events</option>
        </select>

       
        <EventPage filter={filter} events={events} />
      </div>
    </div>
  );
};

export default HomePage;
