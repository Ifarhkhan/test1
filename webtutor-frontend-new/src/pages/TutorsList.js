// import React, { useEffect, useState } from "react";
// import TutorCard from "../components/TutorCard";
// import TutorFilter from "../components/TutorFilter";
// import axios from "axios";

// const TutorsList = () => {
//   const [tutors, setTutors] = useState([]);

//   const fetchTutors = async (filters = {}) => {
//     try {
//       const res = await axios.get("/api/tutors", { params: filters });
//       setTutors(res.data);
//     } catch (error) {
//       console.log("Error fetching tutors:", error);
//     }
//   };

//   useEffect(() => {
//     fetchTutors(); // Initial load
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
//         Find the Best Tutors
//       </h1>

//       <TutorFilter onFilter={fetchTutors} />

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {tutors.length > 0 ? (
//           tutors.map((tutor) => (
//             <TutorCard key={tutor.id} tutor={tutor} />
//           ))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">
//             No tutors found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TutorsList;

// src/pages/TutorsList.js
import React, { useEffect, useState } from "react";
import TutorCard from "./TutorCard";
import axios from "axios";

const TutorList = () => {
  const [tutors, setTutors] = useState([]);
  const [subject, setSubject] = useState("");
  const [location, setLocation] = useState("");

  const fetchTutors = async () => {
    try {
      const queryParams = new URLSearchParams();
      if (subject) queryParams.append("subject", subject);
      if (location) queryParams.append("location", location);

      const res = await axios.get(`/api/tutors?${queryParams.toString()}`);
      setTutors(res.data);
    } catch (error) {
      console.error("Error fetching tutors:", error);
    }
  };

  useEffect(() => {
    fetchTutors(); // Load tutors by default
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchTutors();
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">Find Your Tutor</h1>

      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-center"
      >
        <input
          type="text"
          placeholder="Search by subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/3"
        />
        <input
          type="text"
          placeholder="Search by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/3"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {tutors.length > 0 ? (
        tutors.map((tutor) => (
          <TutorCard key={tutor.user_id} tutor={tutor} />
        ))
      ) : (
        <p className="text-center text-gray-600">No tutors found.</p>
      )}
    </div>
  );
};

export default TutorList;

