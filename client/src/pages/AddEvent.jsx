import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddEvent() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
  "http://localhost:5000/api/events/add",
      {
        eventName,
        eventDate,
        eventLocation,
        description,
      }
    );

    alert(response.data.message);
    navigate("/dashboard");
  } catch (error) {
  console.log(error);
  alert(error.response?.data?.message || error.message);
}
};

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 col-md-6 mx-auto">
        <h2 className="text-center mb-4">Add Event</h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label>Event Name</label>
            <input
              type="text"
              className="form-control"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Event Date</label>
            <input
              type="date"
              className="form-control"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Description</label>
            <textarea
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success w-100">
            Add Event
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddEvent;