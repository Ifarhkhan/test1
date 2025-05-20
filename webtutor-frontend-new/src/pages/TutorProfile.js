// src/pages/TutorProfile.js

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TutorProfile = () => {
  const { id } = useParams(); // user_id from URL
  const [tutor, setTutor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTutor = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/tutor-profile/${id}`);
        const data = await res.json();
        setTutor(data);
      } catch (err) {
        console.error("Error fetching tutor:", err);
      }
    };

    fetchTutor();
  }, [id]);

  const handleBookSession = () => {
    // Navigate to book-session page with tutor info as state
    navigate("/book-session", { state: { tutor } });
  };

  if (!tutor) return <div className="text-center mt-20">Loading tutor profile...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">{tutor.name}</h1>
      <p className="text-gray-700 mb-2"><strong>Location:</strong> {tutor.location}</p>
      <p className="text-gray-700 mb-2"><strong>Email:</strong> {tutor.email}</p>
      <p className="text-gray-700 mb-2"><strong>Experience:</strong> {tutor.experience} years</p>
      <p className="text-gray-700 mb-2"><strong>Subjects:</strong> {(tutor.subjects || []).join(', ')}</p>
      <p className="text-gray-600 italic mb-6">"{tutor.bio}"</p>

      <button
        onClick={handleBookSession}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Book Session
      </button>
    </div>
  );
};

export default TutorProfile;
