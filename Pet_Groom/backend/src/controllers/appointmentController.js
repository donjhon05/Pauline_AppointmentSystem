const Appointment = require('../models/Appointment');

// Create a new appointment
exports.createAppointment = async (req, res) => {
    const { userId, date, time } = req.body;

    try {
        const newAppointment = new Appointment({ userId, date, time });
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(500).json({ message: 'Error creating appointment', error });
    }
};

// Get all appointments for a user
exports.getAppointments = async (req, res) => {
    const userId = req.user.id;

    try {
        const appointments = await Appointment.find({ userId });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving appointments', error });
    }
};

// Delete an appointment
exports.deleteAppointment = async (req, res) => {
    const { id } = req.params;

    try {
        const appointment = await Appointment.findByIdAndDelete(id);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting appointment', error });
    }
};