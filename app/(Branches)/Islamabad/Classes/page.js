import React from 'react';
import ClassesList from "./classesList/page";

async function Classes() {
  const classesData = await getData();
  const classes = classesData;

  return (
    <div>
      <ClassesList classes={classesData} />
    </div>
  );
}

export default Classes;





export async function getData() {
  try {
    const response = await fetch("http://localhost:3000/api/classes", {
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
