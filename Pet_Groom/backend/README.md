# Appointment System Backend

## Overview
This is a simple appointment system built using the MERN stack (MongoDB, Express, React, Node.js). The backend is responsible for handling user authentication and managing appointments.

## Technologies Used
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)

## Setup Instructions

### Prerequisites
- Node.js installed on your machine
- MongoDB installed and running (or use MongoDB Atlas)
- Postman or any API testing tool (optional)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd appointment-system/backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:
   ```
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

4. Start the server:
   ```
   npm start
   ```

## API Endpoints

### Authentication
- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Login an existing user

### Appointments
- **POST /api/appointments**: Create a new appointment
- **GET /api/appointments**: Retrieve all appointments for the logged-in user
- **DELETE /api/appointments/:id**: Delete an appointment by ID

## Folder Structure
- `src/controllers`: Contains the logic for handling requests.
- `src/models`: Contains Mongoose models for User and Appointment.
- `src/routes`: Contains route definitions for authentication and appointments.
- `src/middleware`: Contains middleware for authentication.
- `src/server.js`: Entry point for the application.

## License
This project is licensed under the MIT License.