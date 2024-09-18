import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AddPage from "./pages/AddPage/AddPage";
import eventData from "./event.json";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    } else {
      setEvents(eventData);
    }
  }, []);

  const handleAddEvent = (newEvent) => {
    const updatedEvents = [
      ...events,
      { ...newEvent, id: events.length + 1, status: "Upcoming" },
    ];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents)); // Store updated events in localStorage
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage events={events} />} />
          <Route
            path="/add-event"
            element={<AddPage onAddEvent={handleAddEvent} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
