import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1>College Event Management System</h1>

      <p>Welcome to College Event Management Portal</p>

      <Link to="/login" className="btn btn-primary me-3">
        Login
      </Link>

      <Link to="/register" className="btn btn-success">
        Register
      </Link>
    </div>
  );
}

export default Home;