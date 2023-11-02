const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse the body of HTTP requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint to process user input
app.post('/processInput', (req, res) => {
    const userInput = req.body.userInput;
    
    // Here you would add the logic to process the input, such as NLP and task automation
    // For demonstration, we'll just echo the input back to the user
    const response = `I received your input: ${userInput}`;
    
    res.send({ response });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
