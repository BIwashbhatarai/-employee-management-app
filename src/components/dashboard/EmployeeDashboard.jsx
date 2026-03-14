import React, { useState } from 'react';
import Header from '../other/Header';
import Tasks from '../other/Tasks';
import Tasklist from '../tasksList/Tasklist';

const EmployeeDashboard = ({ data, handleLogout }) => {
  const [employeeData, setEmployeeData] = useState(data);

  const handleTaskUpdate = (updatedEmployee) => {
    setEmployeeData(updatedEmployee);
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "user", data: { id: updatedEmployee.id } }));
  };

  return (
    <div className='w-full min-h-screen bg-[#1c1c1c] p-10 text-white'>
      <Header data={employeeData} handleLogout={handleLogout} />
      <Tasks data={employeeData} />
      <Tasklist data={employeeData} onTaskUpdate={handleTaskUpdate} />
    </div>
  );
};

export default EmployeeDashboard;
