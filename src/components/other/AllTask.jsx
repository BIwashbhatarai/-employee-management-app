import React, { useState, useEffect } from 'react';

const AllTask = () => {
  const [employees, setEmployees] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  const loadEmployees = () => {
    const data = JSON.parse(localStorage.getItem('Employees') || '[]');
    setEmployees(data);
  };

  const handleDelete = (employeeID, taskID) => {
    if (!window.confirm("Delete this task?")) return;
    const data = JSON.parse(localStorage.getItem('Employees'))
    const emp = data.find((e) => e.id === employeeID)

    if (!emp) return;

    const task = emp.tasks.find((e) => e.id === taskID)

    if(!task) return;

    if(task.newTask) emp.taskCounts.newTask = Math.max(0, emp.taskCounts.newTask - 1)
    else if (task.active) emp.taskCounts.active = Math.max(0, emp.taskCounts.active - 1)
    else if(task.completed) emp.taskCounts.completed = Math.max(0, emp.taskCounts.completed - 1)
    else if(task.failed) emp.taskCounts.failed = Math.max(0, emp.taskCounts.failed - 1)

    emp.tasks = emp.tasks.filter((e) => e.id != taskID)

    localStorage.setItem('Employees', JSON.stringify(data))
    window.dispatchEvent(new Event ('storage'));
    loadEmployees();

  }

  useEffect(() => {
    loadEmployees();
    window.addEventListener('storage', loadEmployees);
    return () => window.removeEventListener('storage', loadEmployees);
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <div id='AllTask' className='mt-5 h-64 overflow-auto'>

      <div className='bg-slate-700 text-white grid grid-cols-5 px-4 py-3 rounded-t-xl font-semibold sticky top-0'>
        <h2>Employee Name</h2>
        <h3>New Task</h3>
        <h4>Active Task</h4>
        <h5>Completed</h5>
        <h5>Failed</h5>
      </div>

      {employees.map((elem) => (
        <div key={elem.id}>

          {/* Employee Row */}
          <div
            onClick={() => toggleExpand(elem.id)}
            className='bg-[#1a1a1a] border-2 border-slate-700 grid grid-cols-5 px-4 py-4 mt-2 rounded-xl items-center cursor-pointer hover:border-emerald-500 transition'
          >
            <h2 className='text-white font-medium flex items-center gap-2'>
              {elem.firstName}
              <span className='text-gray-400 text-xs'>
                {expandedId === elem.id ? '▲' : '▼'}
              </span>
            </h2>
            <h3 className='text-blue-400 font-bold'>{elem.taskCounts.newTask}</h3>
            <h4 className='text-yellow-400 font-semibold'>{elem.taskCounts.active}</h4>
            <h5 className='text-green-400 font-semibold'>{elem.taskCounts.completed}</h5>
            <h5 className='text-red-400 font-semibold'>{elem.taskCounts.failed}</h5>
          </div>

          {/* Expanded Task List */}
          {expandedId === elem.id && (
            <div className='bg-[#111] border-2 border-slate-700 border-t-0 rounded-b-xl px-4 py-3 mb-1'>
              {elem.tasks.filter(t => !t.dismissed).length === 0 ? (
                <p className='text-gray-500 text-sm py-2'>No tasks assigned yet.</p>
              ) : (
                elem.tasks.filter(t => !t.dismissed).map((task, idx) => (
                  <div key={idx} className='flex items-center justify-between py-2 border-b border-slate-700 last:border-0'>
                    <div>
                      <p className='text-white text-sm font-medium'>{task.taskTitle}</p>
                      <p className='text-gray-500 text-xs'>{task.category} • {task.taskDate}</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                    <span className={`text-xs font-semibold rounded-full px-4 py-2 ${
                      task.newTask ? 'bg-blue-100 text-blue-600' :
                      task.active ? 'bg-yellow-100 text-yellow-600' :
                      task.completed ? 'bg-green-100 text-green-600' :
                      task.failed ? 'bg-red-100 text-red-600' : ''
                      
                    }`}>
                      {task.newTask ? 'New' : task.active ? 'Active' : task.completed ? 'Completed' : 'Failed'}
                    </span>
                    <button onClick={() => handleDelete(elem.id, task.id)} className='bg-red-500 cursor-pointer hover:bg-red-600 transition-colors duration-300 text-white px-4 py-2 text-sm rounded-lg'>Delete</button>
                    </div>
                  </div>
                  
                ))
              )}
            </div>
          )}

        </div>
      ))}

    </div>
  );
};

export default AllTask;