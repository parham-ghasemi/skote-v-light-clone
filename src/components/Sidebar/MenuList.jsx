import clsx from "clsx";
import MenuSection from "./MenuSection";

export default function MenuList({ list = [], isCollapsed }){
   return(
      <ul className={clsx("bg-[#2A3042] min-h-full w-5/6 py-12 font-black flex flex-col", isCollapsed ? 'items-center' : '')}>
         {
            list && list.length ? 
               list.map(listItem => <MenuSection item={listItem} key={list.indexOf(listItem)} isCollapsed={isCollapsed} />)
               :null
         }
      </ul>
   )
}
