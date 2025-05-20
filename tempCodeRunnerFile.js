// server.js
const express = require('express');
const app = express();
const tutorsRoutes = require('./routes/tutors');
const bookingRoutes = require('./routes/booking');
const revRoutes = require('./routes/feedback');
const sessionRoutes = require('./routes/shedsessions');
const authRoutes = require('./routes/auth');
const tutorProfRoutes = require('./routes/tutor-profile');


app.use(express.json());

// Routes
app.use('/api', tutorsRoutes);
app.use('/api', bookingRoutes);
app.use('/api', revRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', tutorProfRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} `);
});
