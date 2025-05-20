// routes/booking.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/book-session', async (req, res) => {
  const { student_id, tutor_id, session_date, location, is_demo } = req.body;

  try {
    const result = await db.query(
      `INSERT INTO sessions (student_id, tutor_id, session_date, location, is_demo)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [student_id, tutor_id, session_date, location, is_demo]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
