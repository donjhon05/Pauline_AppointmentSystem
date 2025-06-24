import React, { useState } from "react";
import axios from "axios";

const AppointmentForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formKey, setFormKey] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await axios.post("http://localhost:5000/api/appointments", {
        date,
        time,
        description,
      });
      setSuccess("Appointment created successfully!");
      setDate("");
      setTime("");
      setDescription("");
      setFormKey((k) => k + 1); // Reset form
    } catch (err) {
      setError("Failed to create appointment. Please try again.");
    }
  };

  const handleClear = () => {
    setDate("");
    setTime("");
    setDescription("");
    setError("");
    setSuccess("");
    setFormKey((k) => k + 1); // Reset form
  };

  return (
    <div>
      <h2>Create Appointment</h2>
      <form key={formKey} onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Appointment</button>
        <button
          type="button"
          onClick={handleClear}
          style={{ marginLeft: "1rem" }}
        >
          Clear
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default AppointmentForm;
