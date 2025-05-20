
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(10) CHECK (role IN ('student', 'tutor')) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE tutor_profiles (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  bio TEXT,
  experience INTEGER,
  location VARCHAR(100),
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION
);


CREATE TABLE subjects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL
);


CREATE TABLE tutor_subjects (
  id SERIAL PRIMARY KEY,
  tutor_id INTEGER REFERENCES tutor_profiles(id) ON DELETE CASCADE,
  subject_id INTEGER REFERENCES subjects(id) ON DELETE CASCADE
);

CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES users(id),
  tutor_id INTEGER REFERENCES users(id),
  session_date TIMESTAMP NOT NULL,
  is_demo BOOLEAN DEFAULT true,
  status VARCHAR(20) DEFAULT 'pending',
  location TEXT
);


CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES users(id),
  tutor_id INTEGER REFERENCES users(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
