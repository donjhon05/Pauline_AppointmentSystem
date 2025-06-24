import React from "react";
import AppointmentList from "../components/AppointmentList";
import AppointmentForm from "../components/AppointmentForm";
import "../css/Dashboard.css"; // Create this file for custom styles

const Dashboard = () => {
  return (
    <div className="dashboard-bg">
      <div className="dashboard-container">
        <h1 className="dashboard-title">Appointment Dashboard</h1>
        <div className="dashboard-sections">
          <div className="dashboard-form-section">
            <AppointmentForm />
          </div>
          <div className="dashboard-list-section">
            <AppointmentList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
