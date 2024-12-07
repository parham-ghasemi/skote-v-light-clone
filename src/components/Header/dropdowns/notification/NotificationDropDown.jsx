import { FiClock } from "react-icons/fi";
import notifications from "./data";

export default function NotifDropDown() {
  return (
    <div className="animate-fade-up animate-once animate-duration-200 bg-neutral-50 absolute lg:top-[6.5vh] md:top-[5.5vh] top-[7.7vh] left-3 right-3 shadow-dropdowns md:-left-44 lg:-left-40 md:w-80 rounded-md h-80 overflow-hidden flex flex-col justify-between">
      <div className="w-full h-1/6 flex items-center justify-between px-3">
        <p className="text-sm font-medium text-neutral-900">Notifications</p>
        <a href="#" className="text-xs font-light text-blue-700">View All</a>
      </div>
      <div className="w-full h-4/6">
        <ul className="flex flex-col gap-1 w-full h-full overflow-scroll">
          {
            notifications.map((item)=> (
              <li className="w-full h-full flex gap-3 hover:bg-neutral-200 p-2 cursor-pointer">
                <div className=" rounded-full overflow-hidden"><img src={item.pfp} height='30' width='30' /></div>
                <div className="">
                  <p className="font-medium text-sm text-neutral-900">{item.head}</p>
                  <p className="text-sm text-neutral-700">{item.body}</p>
                  <p className="text-sm text-neutral-700 flex items-center gap-1"><FiClock /> {item.time}</p>
                </div>

              </li>
            ))
          }
        </ul>
      </div>
      <div className="w-full h-1/6 p-1 border-t border-neutral-200">
        <button className="w-full h-full rounded-md active:border-4 text-sm text-blue-600 active:border-sky-400">View More...</button>
      </div>
    </div>
  )
}