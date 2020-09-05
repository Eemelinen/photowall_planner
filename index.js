const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

// Create the server
const app = express();

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')));

// Serve our api route
app.get('/api/test/:msg', cors(), async (req, res) => {
  try {
    const text = req.params.msg;
    res.json({ text });
  } catch (err) {
    next(err);
  }
})

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})