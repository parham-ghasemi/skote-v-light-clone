import { SlMagnifier, SlMenu } from "react-icons/sl";
import { HiChevronDown, HiOutlineBell } from "react-icons/hi2";
import { IconContext } from "react-icons";
import { useState } from "react";
import MegaMenu from "./dropdowns/megaMenu/MegaMenu";
import { DE, ES, IT, RU, US } from "country-flag-icons/react/3x2"
import { HiOutlineArrowsExpand, HiOutlineViewGridAdd } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import DropDown from "./dropdowns/apps/DropDown";
import LanguagesDropDown from "./dropdowns/languages/LanguagesDropDown";
import NotifDropDown from "./dropdowns/notification/NotificationDropDown";
import notifications from "./dropdowns/notification/data";
import ProfileDropDown from "./dropdowns/profile/ProfileDropDown";
import clsx from "clsx";

export default function Header({ onHamburgerClick, onFullScreen }) {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [appsDropDownOpen, setAppsDropDownOpen] = useState(false);
  const [languagesDropDown, setLanguagesDropDown] = useState(false);
  const [profileDropDownOpen, setProfileDropDownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState(
    {
      name: 'English',
      flag: <US title="Spain" />
    },
  )
  const [notificationDropDownOpen, setNotificationDropDownOpen] = useState(false);

  const handleSidebarColapse = () => {
    onHamburgerClick();
    setSidebarOpen(prev => !prev);
  }


  return (
    <>
      <div className={clsx("bg-neutral-100 h-[10vh] fixed z-50 flex justify-between items-center px-5 text-neutral-600", sidebarOpen ? 'w-[81.5vw]' : 'w-[95vw]')}>
        <div className="flex items-center gap-5">
          <SlMenu onClick={handleSidebarColapse} className="cursor-pointer" />

          <div className="bg-neutral-200 h-9 w-72 rounded-full flex items-center overflow-hidden">
            <div className="w-2/12 flex justify-center items-center">
              <SlMagnifier />
            </div>
            <input type="text" className="bg-neutral-200 w-10/12 outline-none text-sm" placeholder="Search..." />
          </div>

          <div className="flex relative items-center gap-2 cursor-pointer" onClick={() => setMegaMenuOpen(prev => !prev)}>
            <p className="text-sm">Mega Menu</p>
            <IconContext.Provider value={{ size: '10px' }}>
              <HiChevronDown />
            </IconContext.Provider>
            {
              megaMenuOpen && (
                <MegaMenu isSidebarOpen={sidebarOpen} />
              )
            }
          </div>


        </div>
        <div className="flex relative items-center gap-6">
          <div className="w-7 cursor-pointer" onClick={() => setLanguagesDropDown(prev => !prev)}>
            {
              currentLanguage.flag
            }
            {
              languagesDropDown && (
                <LanguagesDropDown currentLanguage={setCurrentLanguage} />
              )
            }
          </div>
          <IconContext.Provider value={{ size: '23px' }}>
            <HiOutlineViewGridAdd className="cursor-pointer" onClick={() => setAppsDropDownOpen(prev => !prev)} />
          </IconContext.Provider>
          {
            appsDropDownOpen && (
              <DropDown />
            )
          }

          <IconContext.Provider value={{ size: '23px' }} >
            <HiOutlineArrowsExpand onClick={onFullScreen} className="cursor-pointer" />
          </IconContext.Provider>

          <div className="relative">
            <div className="absolute bg-red-400 text-neutral-50 rounded-full text-xs -top-3 -right-1 px-1">{notifications.length}</div>

            <IconContext.Provider value={{ size: '23px' }}>
              <HiOutlineBell className="cursor-pointer animate-wiggle" onClick={() => setNotificationDropDownOpen(prev => !prev)} />
            </IconContext.Provider>

            {
              notificationDropDownOpen && (
                <NotifDropDown />
              )
            }
          </div>

          <div className="h-full w-28 flex gap-2 relative cursor-pointer" onClick={()=>setProfileDropDownOpen(prev=>!prev)}>
            <div className="h-8 w-8">
              <img src="/placeHolderPfp.png" alt="profile picture" />
            </div>
            <div className="flex items-center gap-1">
              <p className="text-sm">admin</p>
              <IconContext.Provider value={{ size: '10px' }}>
                <HiChevronDown  />
              </IconContext.Provider>
            </div>
            {
              profileDropDownOpen && (
                <ProfileDropDown />
              )
            }
          </div>

          <IconContext.Provider value={{ size: '23px' }}>
            <IoSettingsOutline className="animate-spin-slow " />
          </IconContext.Provider>
        </div>
      </div>
    </>
  )
}