# 🧑‍💼 Employee Task Management System

A role-based **Task Management Web Application** built with **React.js** and **LocalStorage**.
This project allows an **Admin to assign tasks** to employees and lets **Employees manage and update their tasks** through a clean dashboard interface.

---

## 🚀 Features

### 👑 Admin Dashboard

* Login as Admin
* Create and assign tasks to employees
* View all employees and their task statistics
* Expand employee rows to see individual tasks
* Delete assigned tasks

### 👨‍💻 Employee Dashboard

* Login as Employee
* View assigned tasks
* Accept new tasks
* Mark tasks as **Completed** or **Failed**
* Dismiss completed/failed tasks
* Search tasks by **title or category**
* Filter tasks by:

  * All
  * New
  * Active
  * Completed
  * Failed

---

## 🛠️ Tech Stack

* **React.js**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **Font Awesome Icons**
* **LocalStorage (for data persistence)**

---

## 📂 Project Structure

```
src
 ├── components
 │   ├── Auth
 │   │   └── Login.jsx
 │   ├── dashboard
 │   │   ├── AdminDashboard.jsx
 │   │   └── EmployeeDashboard.jsx
 │   ├── other
 │   │   ├── Header.jsx
 │   │   ├── Tasks.jsx
 │   │   ├── AllTask.jsx
 │   │   └── CreateTask.jsx
 │   └── tasksList
 │       ├── Tasklist.jsx
 │       ├── NewTasks.jsx
 │       ├── AcceptTask.jsx
 │       ├── CompleteTask.jsx
 │       └── FailedTask.jsx
 │
 ├── contexts
 │   └── AuthProvider.jsx
 │
 ├── utils
 │   └── LocalStorage.js
 │
 ├── App.jsx
 └── main.jsx
```

---

## 🔑 Login Credentials

### Admin

```
Email: admin@company.com
Password: 123
```

### Employees

Example:

```
Email: aarav.sharma@company.com
Password: 123
```

Multiple employees are preloaded in LocalStorage.

---

## 📸 Application Flow

Admin:

1. Login as admin
2. Create tasks
3. Assign tasks to employees
4. Monitor employee progress

Employee:

1. Login with employee credentials
2. Accept assigned tasks
3. Complete or fail tasks
4. Manage task status

---

## 💡 Future Improvements

* Backend integration (Django)
* Database (MongoDB)
* JWT Authentication
* Real-time updates
* Task notifications
* Analytics dashboard
* Task deadline reminders

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/BIwashbhatarai/-employee-management-app.git
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

---

## 👨‍💻 Author

Developed by **Tilak (Biwash) Bhattarai**

---

⭐ If you like this project, consider giving it a **star** on GitHub!
