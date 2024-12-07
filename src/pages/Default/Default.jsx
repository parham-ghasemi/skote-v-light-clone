
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
import { FaArrowAltCircleRight, FaChevronRight, FaFacebook, FaInstagram, FaRegArrowAltCircleRight, FaTwitter } from "react-icons/fa";
import { PiMapPinSimpleArea } from "react-icons/pi";
import HorizontalPercentageVisualizer from "../../components/HorizontalPercentageVisualizer";
import LatestTransActionsTable from "./LatestTransActionsTable";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function Default({ handleFullScreen, isSideBarCollapsed, setIsSideBarCollapsed }) {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState('year');
  const { width } = useWindowDimensions();

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
      <aside className="fixed z-50 lg:top-0 top-[7vh]">
        <Sidebar menus={menus} isCollapsed={isSideBarCollapsed} />
      </aside>

      <main className={clsx("overflow-hidden", isSideBarCollapsed ? 'lg:ml-[5vw] ml-0' : 'lg:ml-[18.5vw] ml-0')}>
        <Header onHamburgerClick={() => setIsSideBarCollapsed(prevState => !prevState)} onFullScreen={handleFullScreen} />

        <div className="w-full h-full p-6 gap-5 flex flex-col mt-[10vh]">
          <div className="flex w-full justify-between">
            <p className="text-neutral-600 font-bold">DASHBOARD</p>
            <div className="flex text-sm gap-1">
              <p className="text-neutral-900">Dashboards</p>
              <p className="">/</p>
              <p className="text-neutral-500">Dashboard</p>
            </div>
          </div>

          <div className="flex w-full gap-5 flex-col xl:flex-row">
            <div className="flex flex-col xl:w-1/3 w-full rounded-md gap-5">
              <div className="xl:h-60 h-96 rounded-md bg-neutral-50 overflow-hidden">
                <div className="w-full xl:h-[40%] md:h-[60%] h-[25%] bg-slate-300 flex">
                  <div className="h-full w-[57%] flex flex-col gap-1 p-3">
                    <p className="text-blue-700 font-semibold text-lg">Welcome Back!</p>
                    <p className="text-blue-700 text-sm font-normal">Skote Dashboard</p>
                  </div>
                  <div className="h-full w-[43%]"><img src="/profileHeader.png" className="max-w-full max-h-full" alt="" /></div>
                </div>

                <div className="w-full xl:h-[60%] md:h-[40%] h-[75%] flex md:flex-row flex-col">
                  <div className="h-full w-1/3 relative flex flex-col justify-end">
                    <div className="rounded-full overflow-hidden bg-neutral-100 h-16 w-16 absolute -top-[15%] xl:left-1/2 -translate-x-1/2 md:left-[15%] left-1/2 flex items-center justify-center">
                      <img src="/placeHolderPfp.png" alt="" />
                    </div>
                    <div className="p-3 flex flex-col gap-2 h-2/3 justify-start">
                      <p className="font-semibold text-neutral-700">Henry Price</p>
                      <p className="font-medium text-sm text-neutral-500">Ui/Ux Designer</p>
                    </div>
                  </div>

                  <div className="h-full md:w-2/3 pl-4 pt-4 pr-9">
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-2">
                        <p className="text-neutral-700 font-semibold">124</p>
                        <p className="text-neutral-500 text-sm">Projects</p>
                      </div>
                      <div className="flex flex-col gap-2 w-1/2 xl:w-auto">
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

            <div className="flex rounded-md flex-col xl:w-2/3 w-full gap-5">
              <div className="md:h-24 h-auto flex rounded-md flex-col md:flex-row gap-5">
                <div className="h-full md:w-1/3 w-full bg-neutral-50 rounded-md flex justify-between p-5">
                  <div className="h-full w-2/3 flex flex-col justify-between">
                    <p className="text-sm text-neutral-500">Orders</p>
                    <p className="font-semibold text-neutral-700 text-lg">1,235</p>
                  </div>
                  <div className="h-full w-1/3 flex items-center justify-end md:justify-center">
                    <div className="rounded-full h-12 w-12 bg-sky-600 flex items-center justify-center">
                      <IconContext.Provider value={{ size: '25px', color: 'white' }} >
                        <RiFileCopy2Line />
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>

                <div className="h-full md:w-1/3 w-full bg-neutral-50 rounded-md flex justify-between p-5">
                  <div className="h-full w-2/3 flex flex-col justify-between">
                    <p className="text-sm text-neutral-500">Revenue</p>
                    <p className="font-semibold text-neutral-700 text-lg">$35,723</p>
                  </div>
                  <div className="h-full w-1/3 flex items-center justify-end md:justify-center">
                    <div className="rounded-full h-12 w-12 bg-sky-600 flex items-center justify-center">
                      <IconContext.Provider value={{ size: '25px', color: 'white' }} >
                        <RiInboxArchiveLine />
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>

                <div className="h-full md:w-1/3 w-full bg-neutral-50 rounded-md flex justify-between p-5">
                  <div className="h-full w-2/3 flex flex-col justify-between">
                    <p className="text-sm text-neutral-500">Average Price</p>
                    <p className="font-semibold text-neutral-700 text-lg">$16.2</p>
                  </div>
                  <div className="h-full w-1/3 flex items-center justify-end md:justify-center">
                    <div className="rounded-full h-12 w-12 bg-sky-600 flex items-center justify-center">
                      <IconContext.Provider value={{ size: '25px', color: 'white' }} >
                        <BiPurchaseTagAlt />
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:h-[65vh] h-[50vh] bg-neutral-50 rounded-md flex flex-col p-4">
                <div className="h-[10%] font-bold flex items-center justify-between">
                  <p className="font-bold">Emails Sent</p>
                  <ul className="flex gap-2">
                    <li>
                      <input className="peer hidden" type="radio" name="time" id="week" value="week" onClick={() => setSelectedRadioBtn('week')} checked={selectedRadioBtn === 'week' ? true : false} />
                      <label htmlFor="week" className="font-normal px-4 py-2 rounded text-neutral-800 peer-checked:bg-sky-600 peer-checked:text-neutral-50 cursor-pointer">week</label>
                    </li>
                    <li>
                      <input className="peer hidden" type="radio" name="time" id="month" value="month" onClick={() => setSelectedRadioBtn('month')} checked={selectedRadioBtn === 'month' ? true : false} />
                      <label htmlFor="month" className="font-normal px-4 py-2 rounded text-neutral-800 peer-checked:bg-sky-600 peer-checked:text-neutral-50 cursor-pointer">Month</label>
                    </li>
                    <li>
                      <input className="peer hidden" type="radio" name="time" id="year" value="year" onClick={() => setSelectedRadioBtn('year')} checked={selectedRadioBtn === 'year' ? true : false} />
                      <label htmlFor="year" className="font-normal px-4 py-2 rounded text-neutral-800 peer-checked:bg-sky-600 peer-checked:text-neutral-50 cursor-pointer">year</label>
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
                      <Bar dataKey="SeriesA" stackId="a" fill="#556EE6" barSize={7} />
                      <Bar dataKey="SeriesB" stackId="a" fill="#F1B44C" barSize={7} />
                      <Bar dataKey="SeriesC" stackId="a" fill="#34C38F" barSize={7} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col xl:flex-row  gap-5">
            <div className="xl:w-1/3 w-full h-[414px] bg-neutral-50 rounded-md p-4">
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

            <div className="xl:w-1/3 w-full bg-neutral-50 h-[468px] rounded-md p-4">
              <div className="w-full h-[10%]">
                <p className="font-bold text-lg text-neutral-700">Activity</p>
              </div>

              <ul className="h-[80%] flex flex-col justify-evenly gap-6 ">
                <li className="flex gap-2">
                  <div className="w-1/6 flex justify-center">
                    <IconContext.Provider value={{ size: '15px', color: '#555555' }}>
                      <FaRegArrowAltCircleRight />
                    </IconContext.Provider>
                  </div>
                  <div className="w-1/6">
                    <p className="font-semibold text-sm text-neutral-700">
                      22 Nov
                      <IconContext.Provider className='inline' value={{ size: '15px', color: '#4444ee' }}>
                        <GoArrowRight />
                      </IconContext.Provider>
                    </p>
                  </div>
                  <div className="w-3/6 flex justify-center">
                    <p className="text-sm text-neutral-600">Responded to need “Volunteer Activities”</p>
                  </div>
                </li>

                <li className="flex gap-2">
                  <div className="w-1/6 flex justify-center">
                    <IconContext.Provider value={{ size: '15px', color: '#555555' }}>
                      <FaRegArrowAltCircleRight />
                    </IconContext.Provider>
                  </div>
                  <div className="w-1/6">
                    <p className="font-semibold text-sm text-neutral-700">
                      17 Nov
                      <IconContext.Provider className='inline' value={{ size: '15px', color: '#4444ee' }}>
                        <GoArrowRight />
                      </IconContext.Provider>
                    </p>
                  </div>
                  <div className="w-4/6 flex justify-center">
                    <p className="text-sm text-neutral-600 text-pretty">Everyone realizes why a new common language would be desirable... Read More</p>
                  </div>
                </li>

                <li className="flex gap-2">
                  <div className="w-1/6 flex justify-center animate-fade-left animate-infinite animate-ease-in-out animate-alternate">
                    <IconContext.Provider value={{ size: '15px', color: '#4444ee' }}>
                      <FaArrowAltCircleRight />
                    </IconContext.Provider>
                  </div>
                  <div className="w-1/6">
                    <p className="font-semibold text-sm text-neutral-700">
                      15 Nov
                      <IconContext.Provider className='inline ' value={{ size: '15px', color: '#4444ee' }}>
                        <GoArrowRight />
                      </IconContext.Provider>
                    </p>
                  </div>
                  <div className="max-w-[65%] flex justify-center">
                    <p className="text-sm text-neutral-600">Joined the group “Boardsmanship Forum”</p>
                  </div>
                </li>

                <li className="flex gap-2">
                  <div className="w-1/6 flex justify-center">
                    <IconContext.Provider value={{ size: '15px', color: '#555555' }}>
                      <FaRegArrowAltCircleRight />
                    </IconContext.Provider>
                  </div>
                  <div className="w-1/6">
                    <p className="font-semibold text-sm text-neutral-700">
                      22 Nov
                      <IconContext.Provider className='inline' value={{ size: '15px', color: '#4444ee' }}>
                        <GoArrowRight />
                      </IconContext.Provider>
                    </p>
                  </div>
                  <div className="w-3/6 flex justify-center">
                    <p className="text-sm text-neutral-600">Responded to need “In-Kind Opportunity”</p>
                  </div>
                </li>

              </ul>

              <div className="w-full flex justify-center py-4">
                <button className="bg-sky-600 hover:bg-sky-700 transition-colors text-neutral-50 text-xs px-3 py-1.5 rounded flex items-center gap-1">View More <GoArrowRight /> </button>
              </div>
            </div>

            <div className="xl:w-1/3 w-full h-[406px] flex flex-col justify-between bg-neutral-50 rounded-md p-4 pb-9">
              <div className="w-full h-[10%]">
                <p className="font-bold text-lg text-neutral-700">Top Cities Selling Product</p>
              </div>
              <div className="w-full flex items-center justify-center">
                <IconContext.Provider value={{ size: '55px', color: '#4444ee' }}>
                  <PiMapPinSimpleArea />
                </IconContext.Provider>
              </div>
              <div className="w-full flex flex-col items-center gap-2">
                <p className="text-neutral-700 font-semibold text-2xl">1,456</p>
                <p className="text-neutral-500 text-sm">San Francisco</p>
              </div>
              <ul className="flex flex-col gap-4 w-full">
                <li className="border-b border-neutral-200 w-full flex py-1">
                  <p className="text-neutral-700 text-sm w-2/5">San Francisco</p>
                  <p className="text-neutral-700 w-1/5">1,456</p>
                  <div className="w-2/5 flex items-center">
                    <div className="w-10/12 h-1/5">
                      <HorizontalPercentageVisualizer percent='80' color='#4444ee' />
                    </div>
                  </div>
                </li>

                <li className="border-b border-neutral-200 w-full flex py-1">
                  <p className="text-neutral-700 text-sm w-2/5">Los Angeles</p>
                  <p className="text-neutral-700 w-1/5">1,123</p>
                  <div className="w-2/5 flex items-center">
                    <div className="w-10/12 h-1/5">
                      <HorizontalPercentageVisualizer percent='70' color='#00dd66' />
                    </div>
                  </div>
                </li>

                <li className="border-b border-neutral-200 w-full flex py-1">
                  <p className="text-neutral-700 text-sm w-2/5">San Diego</p>
                  <p className="text-neutral-700 w-1/5">1,026</p>
                  <div className="w-2/5 flex items-center">
                    <div className="w-10/12 h-1/5">
                      <HorizontalPercentageVisualizer percent='60' color='#efaa00' />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full h-[446px] bg-neutral-50 rounded-md p-6 flex flex-col justify-between overflow-x-scroll">
            <div className="w-full h-[10%]">
              <p className="font-bold text-lg text-neutral-700">Latest Transactions</p>
            </div>

            <div className="lg:w-full w-[950px] h-[85%] overflow-scroll">
              <LatestTransActionsTable />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}