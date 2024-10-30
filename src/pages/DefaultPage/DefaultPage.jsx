import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"


function DefaultPage() {
  return (
      <div>
          <Navbar />
          <div>
              <Outlet />
          </div>
      </div>
  )
}

export default DefaultPage