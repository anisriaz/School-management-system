import React from 'react';
import StudentsList from "./listStudents/page";

async function Students() {
  const studentsData = await getData();
  const Students = studentsData;
  console.log("studentsData:", studentsData);
  return (
    <div>
      <StudentsList students={studentsData} />
    </div>
  );
}

export default Students;


export async function getData() {
  try {
    const response = await fetch("http://localhost:3000/api/students", {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    // console.log("Data from API:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
}
