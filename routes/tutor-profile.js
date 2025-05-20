// routes/tutor-profile.js 

const express = require('express');
const router = express.Router();
const db = require('../db');


// POST /api/tutor-profile
router.post('/tutor-profile', async (req, res) => {
  const { user_id, bio, experience, location, subjects } = req.body;

  try {
    // Insert into tutor_profiles
    const profileResult = await db.query(
      `INSERT INTO tutor_profiles (user_id, bio, experience, location)
       VALUES ($1, $2, $3, $4)
       RETURNING id`,
      [user_id, bio, experience, location]
    );

    const tutorProfileId = profileResult.rows[0].id;

    // Insert into tutor_subjects
    for (let subject_id of subjects) {
      await db.query(
        `INSERT INTO tutor_subjects (tutor_id, subject_id) VALUES ($1, $2)`,
        [tutorProfileId, subject_id]
      );
    }

    res.status(201).json({ msg: 'Profile created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});
module.exports = router;