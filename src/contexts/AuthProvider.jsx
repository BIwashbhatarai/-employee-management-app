import React, { useEffect, useState, createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState({
    employees: [],
    admin: []
  });

  useEffect(() => {
    setLocalStorage();
    const data = getLocalStorage();

    if (data) {
      setUserData({
        employees: data.employees,
        admin: data.admin
      });
    }
  }, []);

  const updateEmployees = (employees) => {
    setUserData(prev => ({
      ...prev,
      employees
    }));

    localStorage.setItem("Employees", JSON.stringify(employees));
  };

  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;