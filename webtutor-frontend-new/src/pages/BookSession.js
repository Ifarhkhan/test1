
// // src/pages/Booksession
// import React, { useState } from "react";
// import { bookSession } from "../api/api";

// const BookSession = () => {
//   const [data, setData] = useState({
//     tutorName: "",
//     studentName: "",
//     email: "",
//     date: "",
//     time: "",
//   });

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await bookSession(data);
//       alert("Session booked successfully!");
//       setData({
//         tutorName: "",
//         studentName: "",
//         email: "",
//         date: "",
//         time: "",
//       });
//     } catch (err) {
//       console.error("Booking failed:", err);
//       alert("Failed to book session.");
//     }
//   };

//   return (
//   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-12 px-4">
//     <div className="max-w-md mx-auto p-8 bg-white shadow-xl rounded-2xl transition hover:shadow-2xl">
//       <h2 className="text-3xl font-extrabold text-center text-purple-600 mb-8">
//         📅 Book a Session
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="space-y-4">
//           <input
//             type="text"
//             name="tutorName"
//             placeholder="Tutor Name"
//             value={data.tutorName}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//             required
//           />
//           <input
//             type="text"
//             name="studentName"
//             placeholder="Your Name"
//             value={data.studentName}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={data.email}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//           <div className="flex gap-4">
//             <input
//               type="date"
//               name="date"
//               value={data.date}
//               onChange={handleChange}
//               className="flex-1 p-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//             <input
//               type="time"
//               name="time"
//               value={data.time}
//               onChange={handleChange}
//               className="flex-1 p-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-md hover:from-purple-700 hover:to-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
//         >
//           Confirm Booking
//         </button>
//       </form>
//     </div>
//   </div>
// );

// };

// export default BookSession;


// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router"; // ⭐ zaroori hai
// import { bookSession } from "../api/api";

// const BookSession = () => {
//   const router = useRouter(); // ⭐ yeh chahiye hoga redirect ke liye

//   // 🟡 1. Ye check karega user login hai ya nahi
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       router.push("/login"); // 🔴 login page pe redirect ho jayega
//     }
//   }, );

//   const [data, setData] = useState({
//     tutorName: "",
//     studentName: "",
//     email: "",
//     date: "",
//     time: "",
//   });

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await bookSession(data);
//       alert("Session booked successfully!");
//       setData({
//         tutorName: "",
//         studentName: "",
//         email: "",
//         date: "",
//         time: "",
//       });
//     } catch (err) {
//       console.error("Booking failed:", err);
//       alert("Failed to book session.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-12 px-4">
//       <div className="max-w-md mx-auto p-8 bg-white shadow-xl rounded-2xl">
//         <h2 className="text-3xl font-extrabold text-center text-purple-600 mb-8">
//           📅 Book a Session
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="space-y-4">
//             <input
//               type="text"
//               name="tutorName"
//               placeholder="Tutor Name"
//               value={data.tutorName}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-200 rounded-xl"
//             />
//             <input
//               type="text"
//               name="studentName"
//               placeholder="Your Name"
//               value={data.studentName}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-200 rounded-xl"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={data.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-200 rounded-xl"
//             />
//             <div className="flex gap-4">
//               <input
//                 type="date"
//                 name="date"
//                 value={data.date}
//                 onChange={handleChange}
//                 required
//                 className="flex-1 p-3 border border-gray-200 rounded-xl"
//               />
//               <input
//                 type="time"
//                 name="time"
//                 value={data.time}
//                 onChange={handleChange}
//                 required
//                 className="flex-1 p-3 border border-gray-200 rounded-xl"
//               />
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-xl"
//           >
//             Confirm Booking
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookSession;


// src/pages/Booksession.js
// src/pages/BookSession.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { bookSession } from "../api/api";
import { useMemo } from "react";


const BookSession = () => {
  const location = useLocation();
  const tutor = useMemo(() => {
  return location.state?.tutor || {};
}, [location.state]);

  const [data, setData] = useState({
    tutorName: "",
    studentName: "",
    email: "",
    date: "",
    time: "",
  });

  // 🧠 Prefill tutor name from passed state
  useEffect(() => {
    if (tutor?.name) {
      setData((prevData) => ({
        ...prevData,
        tutorName: tutor.name,
      }));
    }
  }, [tutor]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Check if user is logged in
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first to book a session.");
      window.location.href = "/login"; // Redirect to login page
      return;
    }

    try {
      await bookSession(data);
      alert("Session booked successfully!");
      setData({
        tutorName: tutor.name || "",
        studentName: "",
        email: "",
        date: "",
        time: "",
      });
    } catch (err) {
      console.error("Booking failed:", err);
      alert("Failed to book session.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-12 px-4">
      <div className="max-w-md mx-auto p-8 bg-white shadow-xl rounded-2xl transition hover:shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-purple-600 mb-8">
          📅 Book a Session
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <input
              type="text"
              name="tutorName"
              placeholder="Tutor Name"
              value={data.tutorName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              readOnly // 🔒 so user can’t change it
            />
            <input
              type="text"
              name="studentName"
              placeholder="Your Name"
              value={data.studentName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={data.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <div className="flex gap-4">
              <input
                type="date"
                name="date"
                value={data.date}
                onChange={handleChange}
                className="flex-1 p-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="time"
                name="time"
                value={data.time}
                onChange={handleChange}
                className="flex-1 p-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-md hover:from-purple-700 hover:to-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookSession;

