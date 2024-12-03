import clsx from "clsx";
import MenuSection from "./MenuSection";
import menuList from "./menuList";

export default function MegaMenu({isSidebarOpen}) {
  return (
    <div className={clsx("absolute overflow-hidden top-[7vh] -left-[25vw] bg-neutral-50 h-[42.5vh] rounded-md", isSidebarOpen ? 'w-[78vw]' : 'w-[91vw]')}>
      <MenuSection list={menuList} />
    </div>
  )
}
