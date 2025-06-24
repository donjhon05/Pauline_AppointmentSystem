const express = require('express');
const { createAppointment, getAppointments, deleteAppointment } = require('../controllers/appointmentController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, createAppointment);
router.get('/', verifyToken, getAppointments);
router.delete('/:id', verifyToken, deleteAppointment);

module.exports = router;