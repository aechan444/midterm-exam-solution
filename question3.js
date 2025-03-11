const express = require('express');
const app = express();
const port = 3000;

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Ravanes,Christian Joseph O.' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});