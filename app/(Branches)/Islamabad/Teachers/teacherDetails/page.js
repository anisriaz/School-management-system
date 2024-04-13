"use client"


import React from "react";

const TeacherstDetails = ({ teacher }) => {
  return (
    <>
      <section className="bg-white py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
            <aside>
              <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5">
                <img
                  className="object-cover inline-block"
                  src={teacher.profilePictureUrl}
                  alt={teacher.name}
                  width="340"
                  height="340"
                />
              </div>
            </aside>
            <main>
              <h2 className="font-semibold text-2xl mb-4">{teacher.name}</h2>
              <div className="mb-4">
                <b className="font-medium">Qualifications:</b>{" "}
                <span className="text-gray-500">{teacher.qualifications}</span>
              </div>
              <div className="mb-4">
                <b className="font-medium">Age:</b>{" "}
                <span className="text-gray-500">{teacher.age} years old</span>
              </div>
              <div className="mb-4">
                <b className="font-medium">Gender:</b>{" "}
                <span className="text-gray-500">{teacher.gender}</span>
              </div>
              <div className="mb-4">
                <b className="font-medium">Class Joined:</b>{" "}
                <span className="text-gray-500">{teacher.class}</span>
              </div>
              <div className="mb-4">
                <b className="font-medium">Experience:</b>{" "}
                <span className="text-gray-500">{teacher.experience}</span>
              </div>
            </main>
          </div>
        </div>
      </section>

      <div className="text-center mt-4 text-gray-500">use client</div>

    
    </>
  );
};

export default TeacherstDetails;


