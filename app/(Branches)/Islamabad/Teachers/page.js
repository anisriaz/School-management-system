import React from 'react';
import TeachersList from "./teachersList/page";

async function Teachers() {
  const teachersData = await getData();
  const teachers = teachersData;



  return (
    <div>
      <TeachersList teachers={teachersData} />
    </div>
  );
}
export default Teachers;




export async function getData() {
  try {
    const response = await fetch("http://localhost:3000/api/teachers", {
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
