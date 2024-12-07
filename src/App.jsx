import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from "./pages/Default/Default";
import useWindowDimensions from "./hooks/useWindowDimensions";

function App() {
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(()=>{
    width < 1024 && setIsSideBarCollapsed(true);
  },[width])

  const handleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      document.body.requestFullscreen()
    }

    setIsFullScreen(prev => !prev);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Default handleFullScreen={handleFullScreen} isSideBarCollapsed={isSideBarCollapsed} setIsSideBarCollapsed={setIsSideBarCollapsed} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
