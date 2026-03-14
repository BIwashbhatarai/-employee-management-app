import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import AcceptTask from './AcceptTask';
import NewTasks from './NewTasks';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const Tasklist = ({ data, onTaskUpdate }) => {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const visibleTasks = data.tasks?.filter(t => !t.dismissed) || [];

  if (visibleTasks.length === 0) {
    return (
      <div className="w-full py-16 flex flex-col items-center justify-center mt-10 bg-[#1c1c1c] rounded-2xl">
        <span className="text-5xl mb-4">📋</span>
        <p className="text-gray-500 text-lg font-medium">No tasks assigned yet</p>
        <p className="text-gray-600 text-sm mt-1">Your tasks will appear here once assigned.</p>
      </div>
    );
  }

  const filteredTasks = visibleTasks.filter((task) => {
    const matchesFilter =
      active === 'All' ||
      (active === 'New' && task.newTask) ||
      (active === 'Active' && task.active) ||
      (active === 'Completed' && task.completed) ||
      (active === 'Failed' && task.failed)

    const matchesSearch =
      search === '' ||
      task.taskTitle.toLowerCase().includes(search.toLowerCase()) ||
      task.category.toLowerCase().includes(search.toLowerCase())

    return matchesFilter && matchesSearch
  })

  return (
    <>
      <div className='flex my-9 gap-4'>
        <div className='relative w-full'>
          <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400"></i>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full bg-zinc-800 text-white px-12 py-4 border-3 border-zinc-800 rounded-xl text-xl transition duration-300 focus:border-zinc-600 outline-none'
            type="text"
            placeholder='Search by title or category...'
          />
        </div>

        <div className="flex gap-4 flex-nowrap">
          {['All', 'New', 'Active', 'Completed', 'Failed'].map((btn) => (
            <button
              key={btn}
              onClick={() => setActive(btn)}
              className={`px-6 py-4 rounded-lg transition-colors duration-500 cursor-pointer text-white
                ${active === btn ? 'bg-green-600' : 'bg-zinc-800'}`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="w-full py-16 flex flex-col items-center justify-center bg-[#1c1c1c] rounded-2xl">
          <span className="text-5xl mb-4">🔍</span>
          <p className="text-gray-500 text-lg font-medium">No tasks found</p>
          <p className="text-gray-600 text-sm mt-1">Try a different search or filter.</p>
        </div>
      ) : (
        <div
          id="taskList"
          className="w-full py-6 flex gap-6 overflow-x-auto mt-4 px-2 bg-[#1c1c1c]"
        >
          {filteredTasks.map((elem, idx) => {
            if (elem.newTask) return <NewTasks key={idx} data={elem} employeeId={data.id} onTaskUpdate={onTaskUpdate} />;
            if (elem.active) return <AcceptTask key={idx} data={elem} employeeId={data.id} onTaskUpdate={onTaskUpdate} />;
            if (elem.completed) return <CompleteTask key={idx} data={elem} employeeId={data.id} onTaskUpdate={onTaskUpdate} />;
            if (elem.failed) return <FailedTask key={idx} data={elem} employeeId={data.id} onTaskUpdate={onTaskUpdate} />;
            return null;
          })}
        </div>
      )}
    </>
  );
};

export default Tasklist;
