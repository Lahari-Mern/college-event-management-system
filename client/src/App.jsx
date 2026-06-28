import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddEvent from "./pages/AddEvent";
import ViewEvents from "./pages/ViewEvents";
import EditEvent from "./pages/EditEvent";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/events" element={<ViewEvents />} /> 
        <Route path="/edit-event/:id" element={<EditEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;