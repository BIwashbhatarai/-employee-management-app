import React from "react";

const Header = ({ data, handleLogout}) => {

  return (
    <header className="flex items-center p-3 justify-between rounded-xl shadow-md ">
      <div>
        <h1 className="text-3xl sm:text-3xl font-bold text-white">
          Hello, <span>{data?.firstName || "User"}</span><span className="animate-wave">👋</span>
        </h1>
        <p className="text-gray-500 mt-1">Welcome back to your dashboard</p>
      </div>

      <button onClick={handleLogout} className="cursor-pointer bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-md">
        Log Out
      </button>
    </header>
  );
};

export default Header;