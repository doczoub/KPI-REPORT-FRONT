import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className=" relative ">
      <hr className=" border-gray-300" />
      <div className="text-center text-gray-700 p-4 bg-transparent mt-auto">
      Copyright © {new Date().getFullYear()} KPI REPORT by{" "}
    <a className="text-gray-700 hover:text-orange-500" href="#">DTD</a>
  </div>
      </footer>

    </>
  )
}

export default Footer
