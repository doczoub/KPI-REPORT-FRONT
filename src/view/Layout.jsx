import React from 'react'
import HeaderComuns from '../components/HeaderComuns'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <HeaderComuns />
      <div className='flex'>

      <div className=' w-1/6'>

      <SideBar />
      </div>
      <div className='w-5/6'>{<Outlet />}</div>
      </div>
    </div>
  )
}

export default Layout
