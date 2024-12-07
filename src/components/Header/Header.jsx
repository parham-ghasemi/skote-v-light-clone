import { SlMagnifier, SlMenu } from "react-icons/sl";
import { HiChevronDown, HiOutlineBell } from "react-icons/hi2";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
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
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentDropdown, setCurrentDropdown] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState(
    {
      name: 'English',
      flag: <US title="Spain" />
    },
  )

  const handleSidebarColapse = () => {
    onHamburgerClick();
    setSidebarOpen(prev => !prev);
  }

  return (
    <>
      <div className={clsx("bg-neutral-100 lg:h-[10vh] h-[7.5vh] fixed z-50 flex justify-between items-center px-5 text-neutral-600", sidebarOpen ? 'lg:w-[81.5vw] w-full' : 'lg:w-[95vw] w-full')}>
        <div className="flex items-center gap-5">
          <SlMenu onClick={handleSidebarColapse} className="cursor-pointer" />

          <div className="bg-neutral-200 h-9 w-72 rounded-full lg:flex items-center overflow-hidden hidden">
            <div className="w-2/12 flex justify-center items-center">
              <SlMagnifier />
            </div>
            <input type="text" className="bg-neutral-200 w-10/12 outline-none text-sm" placeholder="Search..." />
          </div>

          <div className="lg:flex hidden relative items-center gap-2 cursor-pointer" onClick={() => setCurrentDropdown(prev => prev === 'megamenu' ? null : 'megamenu')}>
            <p className="text-sm">Mega Menu</p>
            <IconContext.Provider value={{ size: '10px' }}>
              <HiChevronDown />
            </IconContext.Provider>
            {
              currentDropdown === 'megamenu' && (
                <MegaMenu isSidebarOpen={sidebarOpen} />
              )
            }
          </div>
        </div>

        <div className="flex md:relative items-center gap-6">
          <IconContext.Provider value={{ size: '18px' }}>
            <SlMagnifier className="cursor-pointer lg:hidden block" onClick={() => setCurrentDropdown(prev => prev === 'apps' ? null : 'apps')} />
          </IconContext.Provider>

          <div className="w-7 cursor-pointer" onClick={() => setCurrentDropdown(prev => prev === 'languages' ? null : 'languages')}>
            {
              currentLanguage.flag
            }
            {
              currentDropdown === 'languages' && (
                <LanguagesDropDown currentLanguage={setCurrentLanguage} />
              )
            }
          </div>
          <IconContext.Provider value={{ size: '23px' }}>
            <HiOutlineViewGridAdd className="cursor-pointer hidden lg:block" onClick={() => setCurrentDropdown(prev => prev === 'apps' ? null : 'apps')} />
          </IconContext.Provider>
          {
            currentDropdown === 'apps' && (
              <DropDown />
            )
          }

          <IconContext.Provider value={{ size: '23px' }} >
            <HiOutlineArrowsExpand onClick={onFullScreen} className="cursor-pointer hidden lg:block" />
          </IconContext.Provider>

          <div className="relative">
            <div className="absolute  bg-red-400 text-neutral-50 rounded-full text-xs -top-3 -right-1 px-1">{notifications.length}</div>

            <IconContext.Provider value={{ size: '23px' }}>
              <HiOutlineBell className="cursor-pointer animate-wiggle" onClick={() => setCurrentDropdown(prev => prev === 'notification' ? null : 'notification')} />
            </IconContext.Provider>

          </div>
          {
            currentDropdown === 'notification' && (
              <NotifDropDown />
            )
          }

          <div className="h-full lg:w-28 w-8 flex gap-2 md:relative cursor-pointer" onClick={() => setCurrentDropdown(prev => prev === 'profile' ? null : 'profile')}>
            <div className="h-8 w-8">
              <img src="/placeHolderPfp.png" alt="profile picture" />
            </div>
            <div className="lg:flex hidden items-center gap-1">
              <p className="text-sm">admin</p>
              <IconContext.Provider value={{ size: '10px' }}>
                <HiChevronDown />
              </IconContext.Provider>
            </div>
            {
              currentDropdown === 'profile' && (
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