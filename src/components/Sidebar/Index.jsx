import clsx from "clsx";
import MenuList from "./MenuList";

export default function Sidebar({ menus = [], isCollapsed }){

   return(
      <div className={clsx("bg-[#2A3042] h-[100vh] flex flex-col items-center z-50", isCollapsed ? 'lg:w-[5vw] w-0' : 'lg:w-[18.5vw] md:w-[35vw] w-[60vw]')}>
         <MenuList list={menus} isCollapsed={isCollapsed} />
      </div>
   )
}
