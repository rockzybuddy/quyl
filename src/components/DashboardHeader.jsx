import React from "react";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div>
        <select className="border bg-gray-200 p-2 px-5 rounded">
          <option>AY 2024-25</option>
          <option>AY 2023-24</option>
        </select>
        <select className="ml-4 border bg-gray-200 px-5 p-2 rounded">
          <option>CBSE 9</option>
          <option>CBSE 10</option>
        </select>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded">
          + Add new Student
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
