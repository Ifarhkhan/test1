// src/components/TutorCard.js 

import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const TutorCard = ({ tutor }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 transition hover:shadow-xl duration-300">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-blue-600">
          {tutor.name}
        </h3>

        <p className="text-gray-600 text-sm">
          <strong>Location:</strong> {tutor.location}
        </p>

        <p className="text-gray-600 text-sm">
          <strong>Experience:</strong> {tutor.experience} years
        </p>

        <p className="text-gray-600 text-sm">
          <strong>Subjects:</strong>{" "}
          {tutor.subjects && tutor.subjects.length > 0
            ? tutor.subjects.join(", ")
            : "N/A"}
        </p>

        <p className="text-gray-700 mt-2 text-sm line-clamp-3">
          {tutor.bio}
        </p>

        {tutor.rating && (
          <div className="flex items-center gap-1 mt-2">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm text-gray-700">
              {tutor.rating.toFixed(1)} / 5
            </span>
          </div>
        )}

        <Link
  to={`/tutor/${tutor.id}`} // ✅ match with App.js
  className="mt-4 inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
>
  View Profile
</Link>

      </div>
    </div>
  );
};

export default TutorCard;
