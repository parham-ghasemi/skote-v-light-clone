import clsx from "clsx";
import MenuSection from "./MenuSection";
import menuList from "./menuList";

export default function MegaMenu({isSidebarOpen}) {
  return (
    <div className={clsx("animate-fade-up animate-once animate-duration-200 absolute overflow-hidden z-50 top-[6vh] -left-[25vw] shadow-dropdowns bg-neutral-50 h-[42.5vh] rounded-md", isSidebarOpen ? 'w-[78vw]' : 'w-[91vw]')}>
      <MenuSection list={menuList} />
    </div>
  )
}
