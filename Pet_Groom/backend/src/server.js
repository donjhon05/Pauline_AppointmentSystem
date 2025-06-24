const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/AppointmentListDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Appointment schema
const appointmentSchema = new mongoose.Schema({
  date: String,
  time: String,
  description: String,
});
const Appointment = mongoose.model("Appointment", appointmentSchema);

// POST endpoint
app.post("/api/appointments", async (req, res) => {
  try {
    const { date, time, description } = req.body;
    const newAppointment = new Appointment({ date, time, description });
    await newAppointment.save();
    res.status(201).json({ message: "Appointment created!" });
  } catch (err) {
    res.status(500).json({ message: "Error creating appointment." });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
