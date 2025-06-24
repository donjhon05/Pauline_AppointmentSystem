const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;