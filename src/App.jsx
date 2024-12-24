import React from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import StudentsTable from "./components/StudentsTable";
import SearchBarHeader from "./components/SearchBarHeader";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col p-4 bg-gray-100">
        <SearchBarHeader/>
        <DashboardHeader />
        <StudentsTable />
      </div>
    </div>
  );
};

export default App;
