const Employees = [
  { id: 1, firstName: "Aarav", email: "aarav.sharma@company.com", password: "123", taskCounts: { active: 0, newTask: 0, completed: 0, failed: 0 }, tasks: [] },
  { id: 2, firstName: "Sita", email: "sita.khadka@company.com", password: "123", taskCounts: { active: 0, newTask: 0, completed: 0, failed: 0 }, tasks: [] },
  { id: 3, firstName: "Ram", email: "ram.gurung@company.com", password: "123", taskCounts: { active: 0, newTask: 0, completed: 0, failed: 0 }, tasks: [] },
  { id: 4, firstName: "Maya", email: "maya.thapa@company.com", password: "123", taskCounts: { active: 0, newTask: 0, completed: 0, failed: 0 }, tasks: [] },
  { id: 5, firstName: "Sabin", email: "sabin.rai@company.com", password: "123", taskCounts: { active: 0, newTask: 0, completed: 0, failed: 0 }, tasks: [] },
  { id: 6, firstName: "Nabin", email: "nabin.poudel@company.com", password: "123", taskCounts: { active: 0, newTask: 0, completed: 0, failed: 0 }, tasks: [] }
];

const Admin = [
  { id: 1, firstName: "Admin", email: "admin@company.com", password: "123" }
];

const VERSION = "v3";

export const setLocalStorage = () => {
  if (localStorage.getItem('dataVersion') !== VERSION) {
    localStorage.removeItem('Employees');
    localStorage.removeItem('Admin');
    localStorage.removeItem('loggedInUser');
    localStorage.setItem('dataVersion', VERSION);
  }
  if (!localStorage.getItem('Employees')) localStorage.setItem('Employees', JSON.stringify(Employees));
  if (!localStorage.getItem('Admin')) localStorage.setItem('Admin', JSON.stringify(Admin));
};

export const getLocalStorage = () => {
  const employees = localStorage.getItem('Employees');
  const admin = localStorage.getItem('Admin');
  return {
    employees: employees ? JSON.parse(employees) : [],
    admin: admin ? JSON.parse(admin) : []
  };
};