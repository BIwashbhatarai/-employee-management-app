import React from 'react'
import Header from '../other/Header'
import CreateTask from "../other/CreateTask"
import AllTask from '../other/AllTask'

const AdminDashboard = ({data, handleLogout}) => {
  return (
    <div className='w-full h-screen p-10 bg-zinc-900'>
      <Header data = {data}handleLogout={handleLogout}/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard