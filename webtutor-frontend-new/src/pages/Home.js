// src/pages/Home.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaUserGraduate, FaQuoteLeft } from "react-icons/fa";

const Home = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/tutors");
        const data = await res.json();
        setTutors(data);
      } catch (err) {
        console.error("Failed to fetch tutors:", err);
      }
    };

    fetchTutors();
  }, []);

  const testimonials = [
    {
      quote: "WebTutor helped me understand concepts I struggled with for years!",
      student: "Hina, FSC Student",
    },
    {
      quote: "Amazing tutors and great platform to prepare for exams.",
      student: "Zain, O-Levels",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen py-12 px-4">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
          Welcome to <span className="text-purple-600">WebTutor</span> 🎓
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Connect with expert tutors or become one. Boost your learning journey today!
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            to="/tutors"
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <FaUserGraduate /> View Tutors
          </Link>
          <Link
            to="/create-profile"
            className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            <FaChalkboardTeacher /> Become a Tutor
          </Link>
        </div>
      </div>

      {/* Featured Tutors Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Featured Tutors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tutors.length === 0 ? (
            <p className="text-center text-gray-500 col-span-3">Loading tutors...</p>
          ) : (
            tutors.map((tutor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-purple-700">{tutor.name}</h3>
                <p className="text-gray-600">{(tutor.subjects || []).join(', ')}</p>
                <Link
                  to={`/tutors/${tutor.user_id}`}
                  className="text-blue-600 text-sm mt-4 inline-block hover:underline"
                >
                  View Profile →
                </Link>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">What Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <FaQuoteLeft className="text-2xl text-blue-400 mb-2" />
              <p className="text-gray-700 italic mb-2">"{testi.quote}"</p>
              <p className="text-sm text-right font-semibold text-purple-600">- {testi.student}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
