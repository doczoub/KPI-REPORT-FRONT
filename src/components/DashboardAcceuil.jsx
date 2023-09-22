import React from "react";
import SideBar from "./SideBar";
import HeaderDirection from "./HeaderDirection";
import PerformanceResume from "./PerformanceResume";
import ListeToutCalcul from "./ListeToutCalcul";
import SideBar1 from "./SideBar1";

const DashboardAcceuil = () => {
  return (
    <div>
      <div className="sticky top-0">
        <HeaderDirection />
      </div>
      <div className="bg-neutral-200  flex flex-auto md:flex-row overflow-x-hidden h-screen">
        <div className="md:w-40">
          <SideBar />
          {/* <SideBar1 /> */}
        </div>
        <div className="md:ml-4 md:mt-4 flex-grow ">
          <div className="flex flex-wrap gap-1 justify-start">
            <div className=" flex-auto">
              <ListeToutCalcul />
              <PerformanceResume />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAcceuil;
