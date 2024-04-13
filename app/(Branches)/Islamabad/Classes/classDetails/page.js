"use client"

import React from "react"


const ClassDetails = ({ params }) => {
  return (
    <>

    <h1>Class Details</h1>


      <section className="bg-white py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
            <aside>
              <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5">
                <img
                  className="object-cover inline-block"
                  src={params?.profilePictureUrl}
                  alt={params?.name}
                  width="340"
                  height="340"
                />
              </div>
            </aside>
            <main>
              <h2 className="font-semibold text-2xl mb-4">Class {params?.className}</h2>
              <div className="flex flex-wrap items-center space-x-2 mb-2">
                <span className="text-yellow-500">Teacher Name: {params?.teacherName}</span>
              </div>
              <p className="mb-4 font-semibold text-xl">Class Time: {params?.classTime}</p>
              
              <ul className="mb-5">
                <li className="mb-1">
                  {" "}
                  <b className="font-medium w-36 inline-block">Total Students</b>
                  <span>{params?.totalStudents}</span>
                </li>
                <li className="mb-1">
                  {" "}
                  <b className="font-medium w-36 inline-block">Class in Week</b>
                  <span>{params?.classinWeek}</span>
                </li>
              </ul>
            </main>
          </div>
        </div>
      </section>
          </>
  );
};

export default ClassDetails;
