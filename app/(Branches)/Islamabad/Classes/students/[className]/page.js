"use client"

import React from "react";

async function StudentsId({ params }) {
  const studentsData = await getStudentByclassName(params.className);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Students Class: {params.className}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {studentsData.map((student) => (
          <div key={student._id} className="bg-white rounded-lg shadow-md p-4">
            <p>Name: {student.name}</p>
            <p>Father's Name: {student.fatherName}</p>
            <p>Class: {student.className}</p>
            <p>Section: {student.section}</p>
            <p>Roll Number: {student.rollNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentsId;

const getStudentByclassName = async (className) => {
  console.log("Received className:", className);

  const res = await fetch(`http://localhost:3000/api/students/${className}`);
  const data = await res.json();
  return data;
};
