import React from 'react'
import Login from './Login'
import NavBar from './NavBar'
import SideBar from './SideBar'
import background from "../Assets/images/Logo-QUIPUX.png"
import Footer from './Footer'

const Dashboard = () => {
  return (
      <div >
        <div className='bg-fixed max-h-screen h-screen min-h-screen flex-col'>
          <div className="text-4xl font-bold text-[#215967] text-center mb-4 bg-transparent">KPI REPORT  </div>
        <Login />
          <Footer />
        </div>
          {/* <NavBar /> */}
          
       {/* <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-orange-400"> My Kpi Dashboard</h1>
    </div>
  </header>
  <SideBar /> */}
    </div>
  )
}

export default Dashboard
