const express = require('express');

// Initialize the app
const app = express();

// Define the root route
app.get('/', (req, res) => {
  const randomValue = Math.random(); // Generate a random value between 0 and 1
  res.json({ value: randomValue }); // Send the random value as JSON
});

// Start the server
const PORT = 3000; // You can change the port if needed
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});