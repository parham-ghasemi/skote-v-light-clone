import Sidebar from "./components/Sidebar/Index"
import { menus } from "./components/Sidebar/data";

function App() {

  return (
    <>
      <Sidebar menus={menus} />
    </>
  )
}

export default App
