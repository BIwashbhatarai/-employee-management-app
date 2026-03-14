import React from 'react';

const NewTasks = ({ data, employeeId, onTaskUpdate }) => {

  const isOverdue = new Date(data.taskDate) < new Date();

  const handleAcceptTask = () => {
    const employees = JSON.parse(localStorage.getItem("Employees"));
    const emp = employees.find(e => e.id === employeeId);

    const task = emp.tasks.find(t => t.id === data.id);
    if (!task) return;

    task.newTask = false;
    task.active = true;
    emp.taskCounts.newTask -= 1;
    emp.taskCounts.active += 1;

    localStorage.setItem("Employees", JSON.stringify(employees));
    onTaskUpdate(employees.find(e => e.id === employeeId));
  };

  return (
    <div className="h-60 w-[350px] shrink-0 bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="flex justify-between items-center">
        <span className="bg-yellow-100 text-yellow-600 text-xs font-semibold px-3 py-1 rounded-full">
          {data.category}
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
        <p className="text-gray-500 mt-2 text-sm">
          {data.taskDescription}
        </p>
      </div>

      <div className="flex justify-between items-center mt-6">
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
        <button
          onClick={handleAcceptTask}
          className="bg-green-500 text-white text-xs px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Accept Task
        </button>
      </div>

    </div>
  );
};

export default NewTasks;