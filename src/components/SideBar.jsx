import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import { logout } from '../features/userAuhtSlice'
import { useAuth } from './Auth'
import DashboardAcceuil from './DashboardAcceuil'

const SideBar = () => {
  const [user, setUser] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const showUserData = useSelector((state) => state.dirIndicateurData)

  const dispatch = useDispatch()

  const location = useLocation();
  const currentPath = location.pathname;

  // const logOut = useCallback(() => {
  //   dispatch(logout());
  // }, [dispatch]);

  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    setUser(null)
    navigate('/')
  }
  let { id } = useParams()
  // if (
  //   !showUserData.loading && showUserData.datas.length
  //     ? (id = showUserData.datas[0].direction.id)
  //     : null
  // )

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


    return (
      <>
      {sidebarOpen ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed left-44 top-6 z-50"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
        </button>
      ) : (
        <svg
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed  z-30 flex items-center  cursor-pointer left-44 top-10"
          fill="#fff"
          viewBox="0 0 100 80"
          width="20"
          height="20"
        >
          <rect width="100" height="5"></rect>
          <rect y="30" width="100" height="5"></rect>
        </svg>
      )}
      <aside
      className={`md:left-0 md:block md:fixed md:top-0 md:bottom-0 flex-1 md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-[#121127] flex flex-wrap items-center justify-between md:w-fit w-1/6 z-10 py-4 px-6 ${
        sidebarOpen ? " md:-translate-x-56 " : "md:translate-x-0"
      }`}
    >
      <div className="h-screen rounded">
        {/* Mobile hamburger menu */}
        <div className="hidden">
          <button
            onClick={toggleSidebar}
            className="text-white text-2xl p-2 focus:outline-none"
          >
            <i className={`fas ${sidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
          <li>
            <NavLink
              to="/dashboardAcceuil"
              className="items-center flex flex-row"
              activeClassName="text-white"
            >
              <i className="fas fa-sharp fa-solid fa-house pr-2 text-white"></i>
              <span className="md:min-w-full text-white text-xs uppercase font-bold block pt-4 pb-4 no-underline">
                KPI REPORT
              </span>
            </NavLink>
          </li>
          <hr className="my-4 md:min-w-full" />
        
          <li>
            {currentPath === `/dashInnovation/${id}`&&(
          <NavLink
            to={`/calculForm/${id}`}
            onClick={() => navigate(`/calculForm/${id}`)}
            className="items-center flex"
            activeClassName="text-white"
          >
            <i className="fas fa-solid fa-file text-white pr-2"></i>
            <span className="flex-1 md:min-w-full text-white text-xs uppercase font-bold block pt-4 pb-4 no-underline">
              Faire un Nouveau Calcul
            </span>
          </NavLink>
        )}
          </li>
         
          <li>
            <a
              href="#"
              className="items-center flex"
              onClick={handleLogout}
            >
              <i className="fas fa-arrow-right-from-bracket pr-2 text-red-500"></i>
              <span className="md:min-w-full text-red-500 text-xs uppercase font-bold block pt-4 pb-4 no-underline">
                Déconnexion
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    </>
    )
}

export default SideBar
