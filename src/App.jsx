import './App.css';
import Login from "./components/Auth/Login";
import EmployeeDashboard from './components/dashboard/EmployeeDashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';
import { useEffect, useState } from 'react';
import Loader from "./components/Loader/Loader";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInData, setLoggedInData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) return;

    const userData = JSON.parse(loggedInUser);
    setUser(userData.role);

    if (userData.role === "user") {
      const freshEmployees = JSON.parse(localStorage.getItem("Employees") || "[]");
      const freshEmployee = freshEmployees.find(e => e.id === userData.data?.id);
      setLoggedInData(freshEmployee || null);
    } else {
      setLoggedInData({ firstName: "Admin" });
    }
  }, []);

  const handleLogin = (email, password) => {
    if (!email || !password) {
      setLoginError("Please enter a valid email or password.");
      setTimeout(() => {
        setLoginError("");
      }, 3000);
      return;
    }
    if (email === 'admin@company.com' && password === '123') {
      setLoader(true);
      setTimeout(() => {
        setUser("admin");
        setLoggedInData({ firstName: "Admin" });
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
        setLoader(false);
      }, 2000);
    } else {
      const employees = JSON.parse(localStorage.getItem("Employees") || "[]");
      const employee = employees.find(e => e.email === email && e.password === password);

      if (employee) {
        setLoader(true);
        setTimeout(() => {
          setUser("user");
          setLoggedInData(employee);
          localStorage.setItem("loggedInUser", JSON.stringify({ role: "user", data: { id: employee.id } }));
          setLoader(false);
        }, 2000);
      } else {
        setLoginError("Invalid email or password. Please try again.");
        setTimeout(() => setLoginError(""), 3000);
      }
    }
  };

  const handleLogout = () => {
    setLoader(true);
    setTimeout(() => {
      setUser(null);
      setLoggedInData(null);
      localStorage.removeItem("loggedInUser");
      setLoader(false);
    }, 2000);
  };

  return (
    <>
      {loader && <Loader />}
      {!loader && !user && <Login handleLogin={handleLogin} loginError={loginError} />}
      {!loader && user === "admin" && <AdminDashboard data={loggedInData} handleLogout={handleLogout} />}
      {!loader && user === "user" && loggedInData && <EmployeeDashboard data={loggedInData} handleLogout={handleLogout} />}
    </>
  );
}

export default App;