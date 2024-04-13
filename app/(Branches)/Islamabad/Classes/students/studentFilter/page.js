import React from "react";

const ClassFilterSection = ({ students, onSelectClass, selectedClass, loading }) => {
  const getData = (data, property) => {
    if (!data || data.length === 0) {
      // Handle the case where data is undefined or empty
      return ["All"];
    }

    let uniqueClasses = Array.from(new Set(data.map((curElement) => curElement[property])));
    return ["All", ...uniqueClasses];
  };

  const classes = getData(students, "className");

  const handleClassFilter = (className) => {
    onSelectClass(className);
  };

  return (
    <div>
      <div>
        <h3 className="text-center text-3xl mb-9">Classes</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="list-none pl-4">
            {classes.map((curElement, index) => (
              <li
                key={index}
                className={`bg-gray-200 p-2 mb-2 mr-2 ${selectedClass === curElement ? "font-bold" : ""}`}
                onClick={() => handleClassFilter(curElement)}
              >
                {curElement}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ClassFilterSection;
