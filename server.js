//   // server.js

//   const cors = require("cors");
//   app.use(cors());
//   require("dotenv").config();

 
//   const express = require('express');

// require("dotenv").config();  // must come before using env

// const app = express();
// app.use(cors());
// app.use(express.json());
 
 
//   const tutorsRoutes = require('./routes/tutors');
//   const bookingRoutes = require('./routes/booking');
//   const revRoutes = require('./routes/feedback');
//   const sessionRoutes = require('./routes/shedsessions');
//   const authRoutes = require('./routes/auth');
//   const tutorProfRoutes = require('./routes/tutor-profile');


//   app.use(express.json());

//   // Routes
//   app.use('/api', tutorsRoutes);
//   app.use('/api', bookingRoutes);
//   app.use('/api', revRoutes);
//   app.use('/api/sessions', sessionRoutes);
//   app.use('/api/auth', authRoutes);
//   app.use('/api', tutorProfRoutes);


//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT} `);
//   });


const express = require('express');
const cors = require('cors');
require("dotenv").config();  // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());  // Middleware to parse JSON

// Import routes
const tutorsRoutes = require('./routes/tutors');
const bookingRoutes = require('./routes/booking');
const revRoutes = require('./routes/feedback');
const sessionRoutes = require('./routes/shedsessions');
const authRoutes = require('./routes/auth');
const tutorProfRoutes = require('./routes/tutor-profile');

// Use routes
app.use('/api', tutorsRoutes);
// app.use('/api', bookingRoutes);
app.use('/api/booking', bookingRoutes);


app.use('/api', revRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', tutorProfRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
