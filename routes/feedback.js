// routes/feedback.js 

const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/review', async (req, res) => {
  const { student_id, tutor_id, rating, comment } = req.body;

  try {
    const result = await db.query(
      `INSERT INTO reviews (student_id, tutor_id, rating, comment)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [student_id, tutor_id, rating, comment]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Get reviews for a specific tutor
router.get('/:id/reviews', async (req, res) => {
  const tutorId = req.params.id;

  try {
    const result = await db.query(
      `SELECT r.*, u.name AS student_name 
       FROM reviews r 
       JOIN users u ON r.student_id = u.id
       WHERE r.tutor_id = $1`, [tutorId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error while fetching reviews');
  }
});



module.exports = router;