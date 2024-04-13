"use client"

import React from 'react';
import Link from 'next/link';

const ClassesList = ({ classes }) => {

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Classes page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {classes.map((classItem) => (
          <div key={classItem._id} className="bg-white rounded-lg shadow-md p-4">
            <div className="mb-4">
              <img
                src={classItem.profilePictureUrl}
                alt={classItem.name}
                className="w-32 h-32 mx-auto rounded-full"
              />
            </div>
            <div>
              <ul>
                <li>
                  <Link href={`/Islamabad/Classes/${classItem._id}`} >
                    <p className="text-xl font-semibold mb-2">Class {classItem.className}</p>
                  </Link>
                </li>
              </ul>
            </div>
            <p>Teacher Name: {classItem.teacherName}</p>
            <ul>
             <li>
              <Link href={`/Islamabad/Classes/students/${classItem.className}`} >
              <p>Students: {classItem.totalStudents} students</p>
              </Link>
              </li>
              </ul>
            <p>Class in Week: {classItem.classinWeek}</p>
            <p>Class Time: {classItem.classTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassesList;


