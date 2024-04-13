"use client"

import React, { useState } from 'react';
import Link from 'next/link'
import TeacherstDetails from '../teacherDetails/page';

const TeachersList = ({ teachers }) => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5 mt-10 ">Teachers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 ml-8 mt-20">
        {teachers.map((teacher) => (
          <div key={teacher._id} className="bg-white rounded-lg shadow-md p-4">

            <div className="mb-4">
              <img
                src={teacher.profilePictureUrl}
                alt={teacher.name}
                className="w-32 h-32 mx-auto rounded-full"
              />
            </div>
            <p className="text-xl font-semibold mb-2">{teacher.name}</p>
            <p>Qualifications: {teacher.qualifications}</p>
            <p>Age: {teacher.age}</p>
            <p>Gender: {teacher.gender}</p>
            <p className="mb-7">Joining: {new Date(teacher.createdAt).toLocaleDateString()}</p>
            
            {/* See Details button */}
            <Link href={`/Teacher/${teacher._id}`} className="ml-7 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              See Details
            </Link>
         
          </div>
        ))}
      </div>

      {selectedTeacher && <TeacherstDetails teacher={selectedTeacher} />}
    </div>
  );
};

export default TeachersList;

























// import React from 'react';

// const TeachersList = ({ teachers }) => {
    
//     // console.log("Received teachers data:", teachers);

//     return (
//         <div>
//             <h1 className="text-2xl font-bold mb-4">Teachers page</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {teachers.map((teacher) => (
//                     <div key={teacher._id} className="bg-white rounded-lg shadow-md p-4">
//                         <div className="mb-4">
//                             <img
//                                 src={teacher.profilePictureUrl}
//                                 alt={teacher.name}
//                                 className="w-32 h-32 mx-auto rounded-full"
//                             />
//                         </div>
//                         <p className="text-xl font-semibold mb-2">{teacher.name}</p>
//                         <p>Qualifications: {teacher.qualifications}</p>
//                         <p>Age: {teacher.age}</p>
//                         <p>Gender: {teacher.gender}</p>
//                         <p>Joining: {new Date(teacher.createdAt).toLocaleDateString()}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default TeachersList;
















