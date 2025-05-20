// routes/tutors.js

// const express = require('express');
// const router = express.Router(); 
// const db = require('../db'); 

// router.get('/tutors', async (req, res) => {
//     const { subject, location } = req.query;
  
//     let query = `
//       SELECT u.id AS user_id, u.name, u.email, tp.bio, tp.experience, tp.location, 
//              ARRAY_AGG(s.name) AS subjects
//       FROM users u
//       JOIN tutor_profiles tp ON u.id = tp.user_id
//       LEFT JOIN tutor_subjects ts ON tp.id = ts.tutor_id
//       LEFT JOIN subjects s ON ts.subject_id = s.id
//       WHERE u.role = 'tutor'
//     `;
  
//     if (subject) {
//       query += ` AND s.name ILIKE '%${subject}%'`;
//     }
  
//     if (location) {
//       query += ` AND tp.location ILIKE '%${location}%'`;
//     }
  
//     query += ' GROUP BY u.id, tp.id;';
  
//     try {
//       const result = await db.query(query);
//       res.json(result.rows);
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Server Error');
//     }
//   });

//   // GET /api/tutor-profile/:user_id   to fetch a tutor’s profile (so we know if it’s complete).
// router.get('/tutor-profile/:user_id', async (req, res) => {
//   const { user_id } = req.params;

//   try {
//     const result = await db.query(
//       `SELECT tp.*, ARRAY_AGG(s.name) AS subjects
//        FROM tutor_profiles tp
//        LEFT JOIN tutor_subjects ts ON tp.id = ts.tutor_id
//        LEFT JOIN subjects s ON ts.subject_id = s.id
//        WHERE tp.user_id = $1
//        GROUP BY tp.id`,
//       [user_id]
//     );

//     if (result.rows.length === 0) {
//       return res.status(404).json({ msg: 'Profile not found' });
//     }

//     res.json(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });


  
//   module.exports = router;
  

// routes/tutors.js

const express = require('express');
const router = express.Router(); 
const db = require('../db'); 

// GET /api/tutors - fetch tutors with optional filtering
router.get('/tutors', async (req, res) => {
  const { subject, location } = req.query;

  let query = `
    SELECT u.id AS user_id, u.name, u.email, tp.bio, tp.experience, tp.location, 
           ARRAY_AGG(s.name) AS subjects
    FROM users u
    JOIN tutor_profiles tp ON u.id = tp.user_id
    LEFT JOIN tutor_subjects ts ON tp.id = ts.tutor_id
    LEFT JOIN subjects s ON ts.subject_id = s.id
    WHERE u.role = 'tutor'
  `;

  if (subject) {
    query += ` AND s.name ILIKE '%${subject}%'`;
  }

  if (location) {
    query += ` AND tp.location ILIKE '%${location}%'`;
  }

  query += ' GROUP BY u.id, tp.id;';

  try {
    const result = await db.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// GET /api/tutor-profile/:user_id - fetch single tutor profile
router.get('/tutor-profile/:user_id', async (req, res) => {
  const { user_id } = req.params;

  try {
    const result = await db.query(
      `SELECT tp.*, ARRAY_AGG(s.name) AS subjects
       FROM tutor_profiles tp
       LEFT JOIN tutor_subjects ts ON tp.id = ts.tutor_id
       LEFT JOIN subjects s ON ts.subject_id = s.id
       WHERE tp.user_id = $1
       GROUP BY tp.id`,
      [user_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ msg: 'Profile not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
