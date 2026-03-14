import React from "react";

const Toast = ({ message, type }) => {
  const typeStyles = {
    success: "bg-green-600",
    error: "bg-red-600",
    warning: "bg-yellow-500",
    info: "bg-blue-600",
  };

  return (
    <div
      className={`fixed top-6 right-6 z-50 flex items-center gap-3 text-white px-5 py-3 rounded-xl shadow-lg border ${typeStyles[type] || 'bg-slate-800'}`}
    >
      {/* Icon */}
      <div className="text-xl">{type === 'success' ? '✓' : '!'}</div>

      {/* Message */}
      <p className="text-sm font-medium">{message}</p>

      {/* Close button */}
    </div>
  );
};

export default Toast;