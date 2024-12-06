import clsx from "clsx";
import MenuList from "./MenuList";

export default function Sidebar({ menus = [], isCollapsed }){

   return(
      <div className={clsx("bg-[#2A3042] h-[100vh] flex flex-col items-center", isCollapsed ? 'w-[5vw]' : 'w-[18.5vw]')}>
         <MenuList list={menus} isCollapsed={isCollapsed} />
      </div>
   )
}
