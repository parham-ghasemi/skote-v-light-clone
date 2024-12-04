
import { useState } from "react";
import Sidebar from "../components/Sidebar/Index"
import { menus } from "../components/Sidebar/data";
import Header from "../components/Header/Header";
import clsx from "clsx";
import { GoArrowRight } from "react-icons/go";
import { IconContext } from "react-icons";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { RiFileCopy2Line, RiInboxArchiveLine } from "react-icons/ri";

export default function Default({ handleFullScreen, isSideBarCollapsed, setIsSideBarCollapsed }) {
  return (
    <div className="flex bg-neutral-200">
      <aside className="fixed">
        <Sidebar menus={menus} isCollapsed={isSideBarCollapsed} />
      </aside>

      <main className={clsx("overflow-hidden", isSideBarCollapsed ? 'ml-[5vw]' : 'ml-[18.5vw]')}>
        <Header onHamburgerClick={() => setIsSideBarCollapsed(prevState => !prevState)} onFullScreen={handleFullScreen} />

        <div className="w-full h-full p-6 gap-5 flex flex-col">
          <div className="flex w-full justify-between">
            <p className="text-neutral-600 font-bold">DASHBOARD</p>
            <div className="flex text-sm gap-1">
              <p className="text-neutral-900">Dashboards</p>
              <p className="">/</p>
              <p className="text-neutral-500">Dashboard</p>
            </div>
          </div>

          <div className="flex w-full gap-5">
            <div className="flex flex-col w-1/3 rounded-md gap-5">
              <div className="h-60 rounded-md bg-neutral-50 overflow-hidden">
                <div className="w-full h-[40%] bg-slate-300 flex">
                  <div className="h-full w-[57%] flex flex-col gap-1 p-3">
                    <p className="text-blue-700 font-semibold text-lg">Welcome Back!</p>
                    <p className="text-blue-700 text-sm font-normal">Skote Dashboard</p>
                  </div>
                  <div className="h-full w-[43%]"><img src="/profileHeader.png" className="max-w-full max-h-full" alt="" /></div>

                </div>
                <div className="w-full h-[60%] flex">
                  <div className="h-full w-1/3 relative flex flex-col justify-end">
                    <div className="rounded-full overflow-hidden bg-neutral-100 h-16 w-16 absolute -top-[15%] left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <img src="/placeHolderPfp.png" alt="" />
                    </div>
                    <div className="p-3 flex flex-col gap-2 h-2/3 justify-start">
                      <p className="font-semibold text-neutral-700">Henry Pri...</p>
                      <p className="font-medium text-sm text-neutral-500">Ui/Ux Desi...</p>
                    </div>
                  </div>

                  <div className="h-full w-2/3 pl-4 pt-4 pr-9">
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-2">
                        <p className="text-neutral-700 font-semibold">124</p>
                        <p className="text-neutral-500 text-sm">Projects</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-neutral-700 font-semibold">$1245</p>
                        <p className="text-neutral-500 text-sm">Revenue</p>
                      </div>
                    </div>
                    <div className="flex items-end h-2/5">
                      <button className="bg-sky-600 hover:bg-sky-700 transition-colors text-neutral-50 text-xs px-3 py-1.5 rounded flex items-center gap-1">View Profile <GoArrowRight /> </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-72 rounded-md bg-neutral-50"></div>
            </div>

            <div className="flex rounded-md flex-col w-2/3 gap-5">
              <div className="h-24 rounded-md flex gap-5">
                <div className="h-full w-1/3 bg-neutral-50 rounded-md flex justify-between p-5">
                  <div className="h-full w-2/3 flex flex-col justify-between">
                    <p className="text-sm text-neutral-500">Orders</p>
                    <p className="font-semibold text-neutral-700 text-lg">1,235</p>
                  </div>
                  <div className="h-full w-1/3 flex items-center justify-center">
                    <div className="rounded-full h-12 w-12 bg-sky-600 flex items-center justify-center">
                      <IconContext.Provider value={{ size: '25px', color: 'white' }} >
                        <RiFileCopy2Line />
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>

                <div className="h-full w-1/3 bg-neutral-50 rounded-md flex justify-between p-5">
                  <div className="h-full w-2/3 flex flex-col justify-between">
                    <p className="text-sm text-neutral-500">Revenue</p>
                    <p className="font-semibold text-neutral-700 text-lg">$35,723</p>
                  </div>
                  <div className="h-full w-1/3 flex items-center justify-center">
                    <div className="rounded-full h-12 w-12 bg-sky-600 flex items-center justify-center">
                      <IconContext.Provider value={{ size: '25px', color: 'white' }} >
                        <RiInboxArchiveLine />
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>

                <div className="h-full w-1/3 bg-neutral-50 rounded-md flex justify-between p-5">
                  <div className="h-full w-2/3 flex flex-col justify-between">
                    <p className="text-sm text-neutral-500">Average Price</p>
                    <p className="font-semibold text-neutral-700 text-lg">$16.2</p>
                  </div>
                  <div className="h-full w-1/3 flex items-center justify-center">
                    <div className="rounded-full h-12 w-12 bg-sky-600 flex items-center justify-center">
                      <IconContext.Provider value={{ size: '25px', color: 'white' }} >
                        <BiPurchaseTagAlt />
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
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