// 1. Pull in the Express framework we installed earlier
const express = require('express');

// 2. Initialize the Express application
const app = express();

// 3. Define the port number our server will listen on
const PORT = 5001;

// 4. Create our first "Route". 
// When someone visits http://localhost:5001/, this function triggers.
app.get('/', (req, res) => {
    res.send('Auth Service API is live and running!');
});

// 5. Tell the server to start listening for incoming traffic
app.listen(PORT, () => {
    console.log(`Server is running smoothly on http://localhost:${PORT}`);
});