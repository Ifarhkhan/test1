const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');  // ✅ yeh tumhari auth.js hai

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Mount the route
app.use('/api/auth', authRoutes);  // Now all routes start with /api/auth

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
