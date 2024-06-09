const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('website')); // Serve static files from the 'website' directory

app.post('/submitForm', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received submission: Name - ${name}, Email - ${email}, Message - ${message}`);
    
    // Simulate successful form submission response
    res.status(200).json({ message: 'Form submitted successfully!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
