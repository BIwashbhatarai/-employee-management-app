import React, { useState, useEffect } from 'react';
import Toast from '../tasksList/Toast';
import { v4 as uuidv4 } from 'uuid'; 

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskPriority, setTaskPriority] = useState('');
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [error, setError] = useState("");
  const [toast, setToast] = useState(null);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('Employees') || '[]');
    setEmployees(data);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!taskTitle || !taskDate || !assignTo || !category || !taskDescription || !taskPriority) {
      setError("Please fill in all fields.");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    const data = JSON.parse(localStorage.getItem('Employees'));
    const employee = data.find(e => e.firstName.toLowerCase() === assignTo.toLowerCase());

    if (!employee) {
      setError(`No employee found with name "${assignTo}".`);
      return;
    }

    const task = {
      id: uuidv4(),
      taskTitle,
      taskDate,
      taskPriority,
      assignTo,
      category,
      taskDescription,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    employee.tasks.push(task);
    employee.taskCounts.newTask += 1;

    localStorage.setItem('Employees', JSON.stringify(data));
    window.dispatchEvent(new Event('storage'));

    setToast({ message: `Task assigned to ${employee.firstName} successfully!`, type: 'success' });
    setTaskTitle("");
    setTaskDate("");
    setTaskPriority("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
  };

  return (
    <div className='mt-6 p-3'>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)}/>}

      <form onSubmit={handleSubmit} className='text-white w-full flex flex-wrap items-start justify-between gap-6'>

        <div className='w-[48%] flex flex-col gap-4'>

          <div>
            <h3 className='font-semibold text-lg mb-1'>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder='Make a UI design'
              className='w-full p-2 rounded bg-zinc-800 border border-zinc-600 outline-none focus:border-emerald-500 transition'
            />
          </div>

         <div>
            <h3 className='font-semibold text-lg mb-1'>Task Priority</h3>
            <select
              value={taskPriority}
              onChange={(e) => { setTaskPriority(e.target.value); setError(""); }}
              className='w-full cursor-pointer p-2 rounded bg-zinc-800 border border-zinc-600 outline-none focus:border-emerald-500 transition text-white'
            >
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
            </select>
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-1'>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className='w-full p-2 rounded bg-zinc-800 border border-zinc-600 outline-none focus:border-emerald-500 transition'
            />
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-1'>Assign To</h3>
            <select
              value={assignTo}
              onChange={(e) => { setAssignTo(e.target.value); setError(""); }}
              className='w-full cursor-pointer p-2 rounded bg-zinc-800 border border-zinc-600 outline-none focus:border-emerald-500 transition text-white'
            >
              <option value="">Select an employee</option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.firstName}>
                  {emp.firstName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-1'>Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder='design, dev, etc.'
              className='w-full p-2 rounded bg-zinc-800 border border-zinc-600 outline-none focus:border-emerald-500 transition'
            />
          </div>

        </div>

        <div className='w-[48%] flex flex-col'>
          <h3 className='font-semibold text-lg mb-1'>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            rows="10"
            className='w-full p-3 rounded bg-zinc-800 border border-zinc-600 outline-none resize-none focus:border-emerald-500 transition'
            placeholder='Write task description...'
          ></textarea>
        </div>

        <div className='w-full flex items-center gap-4 mt-2'>
          <button
            type='submit'
            className='bg-emerald-500 cursor-pointer hover:bg-emerald-600 px-6 py-2 rounded font-semibold transition'
          >
            Create Task
          </button>
          {error && <p className="text-red-400 text-sm font-medium">{error}</p>}
        </div>

      </form>
    </div>
  );
};

export default CreateTask;