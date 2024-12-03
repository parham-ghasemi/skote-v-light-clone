import { IconContext } from "react-icons";
import { FiUser } from "react-icons/fi";
import { BiWallet, BiWrench, BiLockOpen, BiPowerOff } from "react-icons/bi";

export default function ProfileDropDown() {
  return(
    <div className="bg-neutral-50 absolute -left-10 top-[8vh] w-40 h-44 rounded-md py-3 justify-between flex flex-col">
      <div className="w-full hover:bg-neutral-100 px-6 flex items-center gap-1">
            <IconContext.Provider value={{ size: '15px' }}>
              <FiUser />
            </IconContext.Provider>
        <p className="text-sm">Propfile</p>
      </div>

      <div className="w-full hover:bg-neutral-100 px-6 flex items-center gap-1">
            <IconContext.Provider value={{ size: '15px' }}>
              <BiWallet />
            </IconContext.Provider>
        <p className="text-sm">My Wallet</p>
      </div>

      <div className="w-full hover:bg-neutral-100 px-6 flex items-center gap-1">
            <IconContext.Provider value={{ size: '15px' }}>
              <BiWrench />
            </IconContext.Provider>
        <p className="text-sm">Settings</p>
      </div>

      <div className="w-full hover:bg-neutral-100 px-6 flex items-center gap-1">
            <IconContext.Provider value={{ size: '15px' }}>
              <BiLockOpen />
            </IconContext.Provider>
        <p className="text-sm">Lock Screen</p>
      </div>

      <div className="w-full hover:bg-neutral-100 px-6 flex items-center gap-1 h-10 border-t border-neutral-200">
            <IconContext.Provider value={{ size: '15px', color:'#ff6666' }}>
              <BiPowerOff />
            </IconContext.Provider>
        <p className="text-sm">Lock Screen</p>
      </div>
    </div>
  )
}