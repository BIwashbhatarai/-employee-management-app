import React from 'react';


const Tasks = ({data}) => {
  return (
    <div className="mt-10 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="cursor-pointer bg-[#1f1f1f] p-7 rounded-2xl border border-gray-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <span className="text-5xl font-bold">{data.taskCounts.newTask}</span>
          <h2 className="mt-4 text-lg font-medium text-gray-300">New Tasks</h2>
        </div>

        <div className="cursor-pointer bg-[#1f1f1f] p-7 rounded-2xl border border-gray-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <span className="text-5xl font-bold text-green-400">{data.taskCounts.completed}</span>
          <h2 className="mt-4 text-lg font-medium text-gray-300">Completed</h2>
        </div>

        <div className="cursor-pointer bg-[#1f1f1f] p-7 rounded-2xl border border-gray-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <span className="text-5xl font-bold text-yellow-400">{data.taskCounts.active}</span>
          <h2 className="mt-4 text-lg font-medium text-gray-300">Accepted</h2>
        </div>

        <div className="cursor-pointer bg-[#1f1f1f] p-7 rounded-2xl border border-gray-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <span className="text-5xl font-bold text-red-400">{data.taskCounts.failed}</span>
          <h2 className="mt-4 text-lg font-medium text-gray-300">Failed</h2>
        </div>

      </div>
    </div>
  );
};

export default Tasks;