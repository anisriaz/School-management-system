import React from "react";
import ClassDetails from "../classDetails/page";

async function CLassesId({ params }) {
  const classesData = await getClassById(params.id);

  return (
    <div>
      <ClassDetails params={classesData} />
    </div>
  );
}

export default CLassesId;

const getClassById = async (id) => {
  // console.log("Received id:", id);

  const res = await fetch(`http://localhost:3000/api/classes/${id}`);
  const data = await res.json();

  // console.log("API Response:", data);

  return data;
};



