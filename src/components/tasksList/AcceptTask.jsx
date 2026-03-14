import React from 'react';

const AcceptTask = ({ data, employeeId, onTaskUpdate }) => {

  const isOverdue = new Date(data.taskDate) < new Date();

  const handleComplete = () => {
    if (!window.confirm("Mark this task as completed?")) return;

    const employees = JSON.parse(localStorage.getItem("Employees"));
    const emp = employees.find(e => e.id === employeeId);

    const task = emp.tasks.find(t => t.id === data.id);
    if (!task) return;

    task.active = false;
    task.completed = true;
    emp.taskCounts.active -= 1;
    emp.taskCounts.completed += 1;

    localStorage.setItem("Employees", JSON.stringify(employees));
    onTaskUpdate(employees.find(e => e.id === employeeId));
  };

  const handleFail = () => {
    if (!window.confirm("Mark this task as failed?")) return;

    const employees = JSON.parse(localStorage.getItem("Employees"));
    const emp = employees.find(e => e.id === employeeId);

    const task = emp.tasks.find(t => t.id === data.id);
    if (!task) return;

    task.active = false;
    task.failed = true;
    emp.taskCounts.active -= 1;
    emp.taskCounts.failed += 1;

    localStorage.setItem("Employees", JSON.stringify(employees));
    onTaskUpdate(employees.find(e => e.id === employeeId));
  };

  return (
    <div className="h-60 w-[350px] shrink-0 bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="flex justify-between items-center">
      <span
        className={`text-xs font-semibold px-3 py-1 rounded-full 
        ${
          data.taskPriority === 'High'
            ? 'bg-red-100 text-red-600'
            : data.taskPriority === 'Medium'
            ? 'bg-yellow-100 text-yellow-600'
            : 'bg-green-100 text-green-600'
        }`}
      >
        {data.taskPriority}
      </span>
        <div className="flex items-center gap-2">
          {isOverdue && (
            <span className="bg-red-100 text-red-500 text-xs font-semibold px-2 py-1 rounded-full">
              ⚠ Overdue
            </span>
          )}
          <span className="text-gray-500 text-xs font-medium">
            {data.taskDate}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800">
          {data.taskTitle}
        </h2>
        <p className="text-gray-500 mt-2 text-sm leading-relaxed">
          {data.taskDescription}
        </p>
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className='flex justify-between gap-2 w-full items-center'>
        <span className=" text-red-600 text-xs font-semibold rounded-full">
          {data.category}
        </span>
          <button
            onClick={handleComplete}
            className="bg-green-500 cursor-pointer text-white text-xs px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Mark as Completed
          </button>
          <button
            onClick={handleFail}
            className="bg-red-500 cursor-pointer text-white text-xs px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Mark as Failed
          </button>
        </div>
        
      </div>

    </div>
  );
};

export default AcceptTask;