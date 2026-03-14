import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = ({handleLogin, loginError}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setPassword("")
    setEmail("")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Login</h2>

        {/* Email input */}
        <div className="relative mb-6">
          <FontAwesomeIcon
            icon={faCircleUser}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full pl-12 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Password input */}
        <div className="relative mb-6">
          <FontAwesomeIcon
            icon={faLock}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full pl-12 pr-12 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        </div>

        {/* Remember & Forgot */}
        <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 accent-blue-500" />
            Remember me
          </label>
          <button type="button" className="cursor-pointer hover:underline">
            Forgot Password?
          </button>
        </div>

        {/* ErrorShow  */}
        {loginError && (
          <p className='text-red-500 text-sm font-medium  text-center mb-2'>{loginError}</p>
        )}

        {/* Login button */}
        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md"
        >
          Login
        </button>

        {/* Optional footer */}
        <p className="text-center text-gray-500 text-sm mt-4">
          Don't have an account? <button className="text-blue-600 hover:underline">Sign up</button>
        </p>
      </form>
    </div>
  );
};

export default Login;