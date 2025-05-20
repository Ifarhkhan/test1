 // src/pages/Tutors.js




import React, { useEffect, useState } from "react";
import { fetchTutors } from "../api/api";

const Tutors = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetchTutors()
      .then((res) => setTutors(res.data))
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 pt-24 px-6">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
        Meet Our Tutors
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tutors.map((tutor, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-bold text-green-700 mb-2">
              {tutor.name}
            </h3>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Subject:</span> {tutor.subject}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Email:</span> {tutor.email}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Experience:</span>{" "}
              {tutor.experience} years
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};





export default Tutors;
