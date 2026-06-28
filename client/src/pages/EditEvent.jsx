import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditEvent() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
const { id } = useParams();
useEffect(() => {
  fetchEvent();
}, []);

const fetchEvent = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/events");

    const event = response.data.find((e) => e._id === id);

    if (event) {
      setEventName(event.eventName);
      setEventDate(event.eventDate);
      setEventLocation(event.eventLocation);
      setDescription(event.description);
    }
  } catch (error) {
    console.log(error);
  }
};
 const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5000/api/events/${id}`,
        {
          eventName,
          eventDate,
          eventLocation,
          description,
        }
      );

      alert(response.data.message);

      navigate("/events");
    } catch (error) {
      alert("Update Failed");
    }
  };
  return (
    <div className="container mt-5">
      <div className="card shadow p-4 col-md-6 mx-auto">

        <h2 className="text-center mb-4">
          Edit Event
        </h2>

        <form onSubmit={handleUpdate}>

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

          <button type="submit" className="btn btn-warning w-100">
          </button>

        </form>

      </div>
    </div>
  );
}

export default EditEvent;