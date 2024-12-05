
import { useEffect, useMemo, useState } from "react";
import Sidebar from "../../components/Sidebar/Index"
import { menus } from "../../components/Sidebar/data";
import Header from "../../components/Header/Header";
import clsx from "clsx";
import { GoArrowRight, GoArrowUp } from "react-icons/go";
import { IconContext } from "react-icons";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { RiFileCopy2Line, RiInboxArchiveLine } from "react-icons/ri";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import barChartData from "./barChartData";
import { FaChevronRight, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


export default function Default({ handleFullScreen, isSideBarCollapsed, setIsSideBarCollapsed }) {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState('year');

  const handleRadioButtons = (name) => {
    setSelectedRadioBtn(name);
  }

  const chartData = useMemo(() => {
    if (selectedRadioBtn === 'year') {
      return barChartData.year;
    }
    if (selectedRadioBtn === 'month') {
      return barChartData.month;
    }
    if (selectedRadioBtn === 'week') {
      return barChartData.week;
    }
  }, [selectedRadioBtn])

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

              <div className="h-72 rounded-md bg-neutral-50 p-4">
                <div className="">
                  <p className="font-bold text-neutral-700 text-lg">Monthly Earning</p>
                </div>
                <div className="w-full h-5/6">
                  <div className="w-1/3 flex flex-col justify-evenly h-full">
                    <p className="text-xs text-neutral-500">This Month</p>
                    <p className="font-semibold text-2xl text-neutral-700">$34,252</p>
                    <p className="text-neutral-500 text-sm">
                      <span className="text-green-500 text-sm inline-block px-1">12% <GoArrowUp className="inline" /></span>
                      From previous period
                    </p>
                    <button className="bg-sky-600 hover:bg-sky-700 transition-colors text-neutral-50 text-xs px-3 py-1.5 rounded flex items-center gap-1">View More <GoArrowRight /> </button>
                  </div>
                  <div className=""></div>
                </div>
                <div className="">
                  <p className="text-sm text-neutral-500">We craft digital, graphic and dimensional thinking.</p>
                </div>
              </div>
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
              <div className="h-[65vh] bg-neutral-50 rounded-md flex flex-col p-4">
                <div className="h-[10%] font-bold flex items-center justify-between">
                  <p className="font-bold">Emails Sent</p>
                  <ul className="flex gap-2">
                    <li>
                      <input className="peer hidden" type="radio" name="time" id="week" value="week" onClick={() => handleRadioButtons('week')} checked={selectedRadioBtn === 'week' ? true : false} />
                      <label htmlFor="week" className="bg-sky-100 px-3 py-1 rounded text-neutral-800 peer-checked:bg-sky-600 peer-checked:text-neutral-50">week</label>
                    </li>
                    <li>
                      <input className="peer hidden" type="radio" name="time" id="month" value="month" onClick={() => handleRadioButtons('month')} checked={selectedRadioBtn === 'month' ? true : false} />
                      <label htmlFor="month" className="bg-sky-100 px-3 py-1 rounded text-neutral-800 peer-checked:bg-sky-600 peer-checked:text-neutral-50">Month</label>
                    </li>
                    <li>
                      <input className="peer hidden" type="radio" name="time" id="year" value="year" onClick={() => handleRadioButtons('year')} checked={selectedRadioBtn === 'year' ? true : false} />
                      <label htmlFor="year" className="bg-sky-100 px-3 py-1 rounded text-neutral-800 peer-checked:bg-sky-600 peer-checked:text-neutral-50">year</label>
                    </li>
                  </ul>
                </div>
                <div className="h-[90%] text-xs">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      width={500}
                      height={300}
                      data={chartData}
                      margin={{
                        top: 20,
                        bottom: 10,
                      }}
                    >
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="SeriesA" stackId="a" fill="#4444ff" barSize={7} />
                      <Bar dataKey="SeriesB" stackId="a" fill="#ffd022" barSize={7} />
                      <Bar dataKey="SeriesC" stackId="a" fill="#00bbbb" barSize={7} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full gap-5">
            <div className="w-1/3 h-[62vh] bg-neutral-50 rounded-md p-4">
              <div className="w-full h-[10%]">
                <p className="font-bold text-lg text-neutral-700">Social Source</p>
              </div>

              <div className="flex flex-col items-center h-[60%]">
                <div className="flex items-center justify-center w-full">
                  <div className="flex items-center justify-center p-4 rounded-full bg-blue-100">
                    <IconContext.Provider value={{ size: '20px', color: '#5555ff' }} >
                      <FaFacebook />
                    </IconContext.Provider>
                  </div>
                </div>

                <div className="flex flex-col items-center w-10/12 justify-evenly h-full">
                  <p className="font-semibold text-lg text-neutral-700">Facebook - <span className="text-neutral-500">125 Sales</span></p>
                  <p className="text-pretty text-center text-sm text-neutral-600">Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</p>
                  <a href="#" className="text-sm text-blue-600 flex items-center gap-1">
                    Learn more
                    <IconContext.Provider value={{ size: '8px' }}>
                      <FaChevronRight />
                    </IconContext.Provider>
                  </a>
                </div>
              </div>

              <div className="flex w-full h-[30%] mt-3">
                <div className="flex flex-col gap-3 w-1/3 items-center">
                  <div className="flex items-center justify-center p-2 rounded-full bg-[#5555ff]">
                    <IconContext.Provider value={{ size: '15px', color: '#f2f2f2' }} >
                      <FaFacebook />
                    </IconContext.Provider>
                  </div>
                  <p className="font-semibold text-md text-neutral-600">Facebook</p>
                  <p className="text-xs text-neutral-500">125 Sales</p>
                </div>

                <div className="flex flex-col gap-3 w-1/3 items-center">
                  <div className="flex items-center justify-center p-2 rounded-full bg-[#389fff]">
                    <IconContext.Provider value={{ size: '15px', color: '#f2f2f2' }} >
                      <FaTwitter />
                    </IconContext.Provider>
                  </div>
                  <p className="font-semibold text-md text-neutral-600">Twitter</p>
                  <p className="text-xs text-neutral-500">112 Sales</p>
                </div>

                <div className="flex flex-col gap-3 w-1/3 items-center">
                  <div className="flex items-center justify-center p-2 rounded-full bg-[#dd33aa]">
                    <IconContext.Provider value={{ size: '15px', color: '#f2f2f2' }} >
                      <FaInstagram />
                    </IconContext.Provider>
                  </div>
                  <p className="font-semibold text-md text-neutral-600">Instagram</p>
                  <p className="text-xs text-neutral-500">104 Sales</p>
                </div>
              </div>
            </div>

            <div className="w-1/3 h-96 bg-neutral-50 rounded-md p-4">
              <div className="w-full h-[10%]">
                <p className="font-bold text-lg text-neutral-700">Social Source</p>
              </div>
            </div>

            <div className="w-1/3 h-96 bg-neutral-50 rounded-md p-4">
              <div className="w-full h-[10%]">
                <p className="font-bold text-lg text-neutral-700">Social Source</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[68vh] bg-neutral-50 rounded-md"></div>
        </div>
      </main>
    </div>
  )
}