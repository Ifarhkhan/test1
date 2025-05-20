// src/components/TutorFilter.js

import React, { useEffect, useState } from "react";
import axios from "axios";

const TutorFilter = ({ onFilter }) => {
  const [subjects, setSubjects] = useState([]);
  const [filters, setFilters] = useState({
    subject: "",
    location: "",
  });

  useEffect(() => {
    // Fetch subjects from backend
    axios.get("/api/subjects")
      .then((res) => setSubjects(res.data))
      .catch((err) => console.log("Error fetching subjects:", err));
  }, []);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters); // send filters to parent component
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col sm:flex-row gap-4 items-center justify-center"
    >
      {/* Subject Dropdown */}
      <select
        name="subject"
        value={filters.subject}
        onChange={handleChange}
        className="border border-gray-300 rounded p-2 w-full sm:w-60"
      >
        <option value="">All Subjects</option>
        {subjects.map((subj) => (
          <option key={subj.id} value={subj.name}>
            {subj.name}
          </option>
        ))}
      </select>

      {/* Location Input */}
      <input
        type="text"
        name="location"
        value={filters.location}
        onChange={handleChange}
        placeholder="Enter Location (e.g. Lahore)"
        className="border border-gray-300 rounded p-2 w-full sm:w-60"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Find Tutors
      </button>
    </form>
  );
};

export default TutorFilter;
