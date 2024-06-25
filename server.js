const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the 'website' directory
app.use(express.static('website'));

// Route to serve the contact.html page
app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'website/contact.html'));
});

// Route to handle form submission
app.post('/submitForm', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received submission: Name - ${name}, Email - ${email}, Message - ${message}`);
    
    // Simulate successful form submission response
    res.status(200).json({ message: 'Form submitted successfully!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
