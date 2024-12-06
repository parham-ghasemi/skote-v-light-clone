import { useState } from "react";
import clsx from 'clsx'
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { IconContext } from "react-icons";



export default function MenuSection({ item, isCollapsed }) {

  const [displayChildren, setDisplayChildren] = useState(false);


  return (
    <li className="mb-3" >
      {
        item ? (
          <>
          {
            !isCollapsed && <p className="text-xs text-[#474D62] mb-4">{item.label}</p>
          }
            

            <ul className="font-normal text-neutral-300">
              {
                item.content && item.content.map((item) => (
                  <li>
                    <p className="cursor-pointer flex opacity-70 items-baseline w-full justify-between hover:opacity-100 transition-opacity" onClick={() => setDisplayChildren(prevState => !prevState)}>{
                      item.icon ?
                        <div className="flex items-center gap-2">
                          <div className={clsx(isCollapsed ? 'h-6 w-6 my-1' : 'h-4 w-4')}>
                            <img src={item.icon} className="h-full w-full" alt="" />
                          </div>
                          {
                            isCollapsed ? null : item.label
                          }

                        </div> : item.label
                    }
                      {
                        item.children && !isCollapsed && (
                          displayChildren ? (
                            <IconContext.Provider value={{ size: '15px' }}>
                              <HiChevronUp />
                            </IconContext.Provider>
                          ) : (
                            <IconContext.Provider value={{ size: '15px' }}>
                              <HiChevronDown />
                            </IconContext.Provider>
                          )
                        )
                      }</p>
                    <ul className={clsx('mt-2 overflow-hidden cursor-pointer transition-[max-height] duration-200 ease-in-out flex flex-col', displayChildren ? 'max-h-[100px]' : 'max-h-0')}>
                      {
                        item.children && !isCollapsed && item.children.map((item) => (
                          <i className="ml-1">{item.label}</i>
                        ))
                      }
                    </ul>
                  </li>
                ))
              }
            </ul>

          </>
        ) : null
      }
    </li>
  )
}
