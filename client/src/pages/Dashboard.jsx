import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container mt-5">

      <h2 className="text-center mb-2">
        College Event Management Dashboard
      </h2>

      <p className="text-center text-secondary mb-4">
        🎉 Welcome! Manage your college events easily using the MERN Stack.
      </p>

      <div className="row">

        <div className="col-md-4">
          <div className="card p-3 shadow text-center">
            <h4>➕ Add Event</h4>
            <Link to="/add-event" className="btn btn-success mt-3">
              Add Event
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow text-center">
            <h4>📅 View Events</h4>
            <Link to="/events" className="btn btn-primary mt-3">
              View Events
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow text-center">
            <h4>🚪 Logout</h4>
            <Link to="/login" className="btn btn-danger mt-3">
              Logout
            </Link>
          </div>
        </div>

      </div>

      <footer className="text-center mt-5 text-muted">
        <hr />
        <p>© 2026 College Event Management System</p>
        <p>Developed using MERN Stack 🚀</p>
      </footer>

    </div>
  );
}

export default Dashboard;