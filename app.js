// import the express module
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// create __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// create an instance of express
const app = express();

// define a port number
const PORT = 3500;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Array to store appointments on the backend
const appointments = [];

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Handle form submission
app.post('/submit-appointment', (req, res) => {
    const { fname, lname, date, time } = req.body;

    const appointment = {
        firstName: fname,
        lastName: lname,
        date,
        time,
        submittedAt: new Date().toISOString()
    };

    appointments.push(appointment);

    console.log('New appointment received:', appointment);
    console.log('Total appointments:', appointments.length);

    res.redirect('/confirmation');
});

// Confirmation page
app.get('/confirmation', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'confirmation.html'));
});

// Admin route (view all appointments)
app.get('/admin', (req, res) => {
    res.json(appointments);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

