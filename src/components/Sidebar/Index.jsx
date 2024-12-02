import MenuList from "./MenuList";

export default function Sidebar({ menus = [] }){

   return(
      <div className="bg-neutral-900 w-[18vw] h-[100vh] flex flex-col items-center">
         <MenuList list={menus} />
      </div>
   )
}
