// Create web server    

// Import the express module3.
const express = require('express');

// Create an express application

const app = express();

// Create a route for the path /comments
app.get('/comments', (req, res) => {
    res.send('This is the comments page');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Run the server by running the following command in the terminal:
// node comments.js

