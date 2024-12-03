
import { useState } from "react";
import Sidebar from "../components/Sidebar/Index"
import { menus } from "../components/Sidebar/data";
import Header from "../components/Header/Header";
import clsx from "clsx";

export default function Default({ handleFullScreen, isSideBarCollapsed, setIsSideBarCollapsed }) {
  return (
    <div className="flex bg-neutral-200">
      <aside className="fixed">
        <Sidebar menus={menus} isCollapsed={isSideBarCollapsed} />
      </aside>

      <main className={clsx("overflow-hidden", isSideBarCollapsed ? 'ml-[5vw]' : 'ml-[18.5vw]')}>
        <Header onHamburgerClick={() => setIsSideBarCollapsed(prevState => !prevState)} onFullScreen={handleFullScreen} />

        <div className="w-full h-full p-6 gap-5 flex flex-col">
          <div className="flex w-full justify-between pb-6">
            <p className="text-neutral-600 font-bold">DASHBOARD</p>
            <div className="flex text-sm gap-1">
              <p className="text-neutral-900">Dashboards</p>
              <p className="">/</p>
              <p className="text-neutral-500">Dashboard</p>
            </div>
          </div>

          <div className="flex w-full gap-5">
            <div className="flex flex-col w-1/3 rounded-md gap-5">
              <div className="h-60 rounded-md bg-neutral-50"></div>
              <div className="h-72 rounded-md bg-neutral-50"></div>
            </div>

            <div className="flex rounded-md flex-col w-2/3 gap-5">
              <div className="h-24 rounded-md flex gap-5">
                <div className="h-full w-1/3 bg-neutral-50 rounded-md"></div>
                <div className="h-full w-1/3 bg-neutral-50 rounded-md"></div>
                <div className="h-full w-1/3 bg-neutral-50 rounded-md"></div>
              </div>
              <div className="h-[65vh] bg-neutral-50 rounded-md"></div>
            </div>
          </div>

          <div className="flex w-full gap-5">
            <div className="w-1/3 h-96 bg-neutral-50 rounded-md"></div>
            <div className="w-1/3 min-h-96 bg-neutral-50 rounded-md"></div>
            <div className="w-1/3 h-96 bg-neutral-50 rounded-md"></div>
          </div>

          <div className="w-full h-[68vh] bg-neutral-50 rounded-md"></div>
        </div>
      </main>
    </div>
  )
}