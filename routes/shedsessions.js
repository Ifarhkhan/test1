// routes/shedsessions

const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  const { student_id, tutor_id } = req.query;

  let query = `SELECT * FROM sessions WHERE `;
  const values = [];

  if (student_id) {
    query += `student_id = $1`;
    values.push(student_id);
  } else if (tutor_id) {
    query += `tutor_id = $1`;
    values.push(tutor_id);
  } else {
    return res.status(400).send('student_id or tutor_id is required');
  }

  try {
    const result = await db.query(query, values);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error fetching sessions');
  }
});

module.exports = router;
