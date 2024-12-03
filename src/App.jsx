import { useState } from "react";
import Sidebar from "./components/Sidebar/Index"
import { menus } from "./components/Sidebar/data";
import Header from "./components/Header/Header";

function App() {
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);


  const handleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      document.body.requestFullscreen()
    }

    setIsFullScreen(prev => !prev);
  }

  return (
    <div className="flex bg-neutral-200">
      <Sidebar menus={menus} isCollapsed={isSideBarCollapsed} />
      <Header onHamburgerClick={() => setIsSideBarCollapsed(prevState => !prevState)} onFullScreen={handleFullScreen} />
    </div>
  )
}

export default App
