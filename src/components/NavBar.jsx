import React from 'react'
import { NavLink} from 'react-router-dom'

function NavBar() {

  return (

<div className="min-h-full">
   <nav className="bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {/* <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"> */}
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              
              <div className="bg-orange-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer" aria-current="page">
                My KPI REPORT </div>
                
                {/* <NavLink to="/login">
              <div className="text-orange-400 hover:bg-orange-500 hover:text-white hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium">
                Services
                </div>
                </NavLink>

                <NavLink to="/employeeList">
              <div className="text-orange-400 hover:bg-orange-500 hover:text-white hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium">
                Rapports</div>
                </NavLink>
                <NavLink to="/employeeList">
              <div className="text-orange-400 hover:bg-orange-500 hover:text-white hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium">
                Resumé du suivi des indicateurs</div>
                </NavLink> */}
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
        </div>
      </div>
    </div>

    {/* <!-- Mobile menu, show/hide based on menu state. --> */}
    <div className="md:hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <div className="bg-orange-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer" aria-current="page">My KPI REPORT </div>

        <div className="text-gray-300 hover:bg-orange-700 hover:text-white hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium">Services</div>

        <div className="text-gray-300 hover:bg-orange-700 hover:text-white hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium">Rapports</div>
      </div>
      <div className="pt-4 pb-3 border-t border-orange-700">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            {/* <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
          </div>
        </div>
      </div>
    </div>
  </nav>
  <header className="bg-gradient-to-r from-orange-500 via-white to-green-500">
  <div className="max-w-8xl h-2 mx-auto  sm:px-6 lg:px-8">
    </div>
  </header>
</div>
  )
}

export default NavBar