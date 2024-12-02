import MenuSection from "./MenuSection";

export default function MenuList({ list = [] }){
   return(
      <ul className="bg-neutral-900 min-h-full w-5/6 py-12 font-black">
         {
            list && list.length ? 
               list.map(listItem => <MenuSection item={listItem} key={list.indexOf(listItem)} />)
               :null
         }
      </ul>
   )
}
