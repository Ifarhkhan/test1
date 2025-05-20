 // src/pages/CreateProfile.js
// import React, { useState } from "react";
// import { createTutorProfile } from "../api/api";
// import { useNavigate } from "react-router-dom";

// const CreateProfile = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     subject: "",
//     email: "",
//     experience: "",
//     bio: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createTutorProfile(formData);
//       alert("Profile created successfully!");
//       navigate("/tutors");
//     } catch (err) {
//       console.error("Error creating profile:", err);
//       alert("Failed to create profile.");
//     }
//   };

// return (
//   <div className="min-h-screen pt-24 bg-gradient-to-br from-blue-50 to-purple-100 px-4">
//     <div className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-2xl transition duration-300 hover:shadow-[0_10px_40px_rgba(124,58,237,0.2)]">
//       <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-8">
//         ✨ Create Tutor Profile
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         />
//         <input
//           type="text"
//           name="subject"
//           placeholder="Subject"
//           value={formData.subject}
//           onChange={handleChange}
//           className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         />
//         <input
//           type="number"
//           name="experience"
//           placeholder="Experience (in years)"
//           value={formData.experience}
//           onChange={handleChange}
//           className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <textarea
//           name="bio"
//           placeholder="Short Bio"
//           value={formData.bio}
//           onChange={handleChange}
//           rows={4}
//           className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white py-3 rounded-xl text-lg font-semibold shadow-md transition-all duration-300 transform hover:scale-105"
//         >
//           Create Profile
//         </button>
//       </form>
//     </div>
//   </div>
// );

// };

// export default CreateProfile;



import React, { useState } from "react";
import { createTutorProfile } from "../api/api";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_id: 1, // Temporary hardcoded user_id
    bio: "",
    experience: "",
    location: "",
    subjects: [], // Array of subject IDs like [1, 2]
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubjectsChange = (e) => {
    const value = e.target.value;
    const subjectArray = value
      .split(",")
      .map((s) => parseInt(s.trim()))
      .filter((id) => !isNaN(id));
    setFormData({ ...formData, subjects: subjectArray });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTutorProfile(formData);
      alert("Profile created successfully!");
      navigate("/tutors");
    } catch (err) {
      console.error("Error creating profile:", err);
      alert("Failed to create profile.");
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <div className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-2xl transition duration-300 hover:shadow-[0_10px_40px_rgba(124,58,237,0.2)]">
        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-8">
          ✨ Create Tutor Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="bio"
            placeholder="Short Bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="number"
            name="experience"
            placeholder="Experience (in years)"
            value={formData.experience}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
            required
          />
          <input
            type="text"
            name="subjects"
            placeholder="Subjects (comma separated subject IDs)"
            value={formData.subjects.join(",")}
            onChange={handleSubjectsChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white py-3 rounded-xl text-lg font-semibold shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;

