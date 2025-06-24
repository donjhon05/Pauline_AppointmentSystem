import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
