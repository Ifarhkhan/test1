// src/pages/TutorProfile.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTutorProfile } from "../api/api";

const TutorProfile = () => {
  const { id } = useParams(); // URL se id le rahe hain
  const [tutor, setTutor] = useState(null);

  useEffect(() => {
    getTutorProfile(id)
      .then((res) => setTutor(res.data))
      .catch((err) => console.error("Error fetching tutor profile:", err));
  }, [id]);

  if (!tutor) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">{tutor.name}</h2>
      <p className="text-lg text-gray-700 mb-2">
  <strong>Subjects:</strong> {tutor.subjects?.join(', ') || 'N/A'}
</p>

      <p className="text-gray-600 mb-2">
        <strong>Email:</strong> {tutor.email}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Experience:</strong> {tutor.experience} years
      </p>
      <p className="text-gray-600">
        <strong>Bio:</strong> {tutor.bio}
      </p>
    </div>
  );
};




export default TutorProfile;
