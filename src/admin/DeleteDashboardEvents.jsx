import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import axios from 'axios';

const DeleteDashboardEvents = () => {
  const [events, setEvents] = useState([]);
  const token = sessionStorage.getItem('token');
  // console.log(token);
  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        'https://singer.boostupdigital.in/api/event/getDashboardEvents'
      );
      console.log(response.data);
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const deleteEvent = async (id) => {
    try {
      const response = await axios.delete(
        `https://singer.boostupdigital.in/api/event/deleteDashboardEvent/${id}`,{
            headers: {
              Authorization: `Bearer ${token}`
            }
        }
      );
      console.log(response.data);
      fetchEvents(); // Fetch events again after deleting to update the UI
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dashboard />
      <div className="container mt-4">
        <h2>Delete Dashboard Events</h2>
        <div className="row">
          {events.map((event, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={`https://singer.boostupdigital.in/api/uploads/${event.image}`} className="card-img-top" alt="Event" />
                <div className="card-body">
                  <h5 className="card-title">{event.name}</h5>
                  <p className="card-text">{event.description}</p>
                  <button className="btn btn-danger" onClick={() => deleteEvent(event._id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeleteDashboardEvents;
