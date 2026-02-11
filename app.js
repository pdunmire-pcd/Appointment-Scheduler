//import the express module
import express from 'express';

//create an instance of express
const app = express();

//define a port number
const PORT = 3500;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Array to store appointments on the backend
const appointments = [];

//set up a basic route
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// POST route to handle form submission
app.post('/submit-appointment', (req, res) => {
    // Get form data from request body
    const { fname, lname, date, time } = req.body;
    
    // Create appointment object with timestamp
    const appointment = {
        firstName: fname,
        lastName: lname,
        date: date,
        time: time,
        submittedAt: new Date().toISOString() // Timestamp of form submission
    };
    
    // Store appointment in array
    appointments.push(appointment);
    
    // Log to console (for debugging)
    console.log('New appointment received:', appointment);
    console.log('Total appointments:', appointments.length);
    
    // Redirect to confirmation page
    res.redirect('/confirmation');
});

// Confirmation page route
app.get('/confirmation', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

//start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});