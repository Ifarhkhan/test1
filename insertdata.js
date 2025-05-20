// insertData.js

const client = require('./db'); // Import the DB client

// Inserting sample users
const insertUsers = async () => {
  try {
    await client.query(`
      INSERT INTO users (name, email, password, role) VALUES 
      ('John Doe', 'john@example.com', 'password123', 'student'),
      ('Jane Smith', 'jane@example.com', 'password123', 'tutor'),
      ('Emma Brown', 'emma@example.com', 'password123', 'tutor');
    `);
    console.log("Sample users added!");
  } catch (err) {
    console.error("Error inserting users:", err.stack);
  }
};

// Inserting sample tutors (we'll assume the tutors exist as users)
const insertTutors = async () => {
  try {
    await client.query(`
      INSERT INTO tutor_profiles (user_id, bio, experience, location, lat, lng) VALUES 
      (2, 'Experienced tutor in math and science.', 5, 'New York', 40.7128, -74.0060),
      (3, 'Passionate about teaching English literature.', 3, 'Los Angeles', 34.0522, -118.2437);
    `);
    console.log("Sample tutors added!");
  } catch (err) {
    console.error("Error inserting tutors:", err.stack);
  }
};

// Inserting sample subjects
const insertSubjects = async () => {
  try {
    await client.query(`
      INSERT INTO subjects (name) VALUES 
      ('Math'), 
      ('Science'), 
      ('English');
    `);
    console.log("Sample subjects added!");
  } catch (err) {
    console.error("Error inserting subjects:", err.stack);
  }
};

const linkTutorsToSubjects = async () => {
    try {
      await client.query(`
        INSERT INTO tutor_subjects (tutor_id, subject_id) VALUES 
        (2, 1), -- Jane Smith teaches Math
        (2, 2), -- Jane Smith teaches Science
        (3, 3); -- Emma Brown teaches English
      `);
      console.log("Tutors linked to subjects!");
    } catch (err) {
      console.error("Error linking tutors to subjects:", err.stack);
    }
  };

// Running the insert functions
const insertData = async () => {
  await insertUsers();
  await insertTutors();
  await insertSubjects();
  await linkTutorsToSubjects();
  client.end();
};

// Start the insertion process
insertData();
