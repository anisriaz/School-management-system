"use client"


import React from 'react';

const StudentsList = ({ students }) => {


  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {students.map((student) => (
          <div key={student._id} className="bg-white rounded-lg shadow-md p-4">
            <p>Name: {student.name}</p>
            <p>Father's Name: {student.fatherName}</p>
            <p>Class: {student.ClassName}</p>
            <p>Section: {student.section}</p>
            <p>Roll Number: {student.rollNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsList;

