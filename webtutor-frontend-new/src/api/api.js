// src/api/api.js

import axios from "axios";

// Create Axios instance with backend base URL
const API = axios.create({
  baseURL: "http://localhost:5000/api",  // Tumhara Express backend yahan chalta hai
});

// Example request functions:

// Get all tutors
export const fetchTutors = () => API.get("/tutors");

// Create tutor profile
export const createTutorProfile = (formData) => API.post("/tutor-profile", formData);

// Book a session
export const bookSession = (data) => API.post("/booking", data);

// Get a specific tutor profile
export const getTutorProfile = (id) => API.get(`/tutor-profile/${id}`);

export default API;
