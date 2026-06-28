import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ViewEvents() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/events");
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEvent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      alert("Event Deleted Successfully");
      fetchEvents();
    } catch (error) {
      alert("Delete Failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">All Events</h2>
      <div className="mb-3">
  <input
    type="text"
    className="form-control"
    placeholder="🔍 Search Event..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {events
  .filter((event) =>
    event.eventName.toLowerCase().includes(search.toLowerCase())
  )
  .map((event) => (
            <tr key={event._id}>
              <td>{event.eventName}</td>
              <td>{event.eventDate}</td>
              <td>{event.eventLocation}</td>
              <td>{event.description}</td>

              <td>
                <Link
                  to={`/edit-event/${event._id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteEvent(event._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewEvents;