import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home"
import Navbar from "./Navbar/Navbar"
import Signup from "./pages/Signup"


const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
        <Navbar/>
        <Home/>
      </div>
    },

    {
      path:"/Signup",
      element: <div>
        <Navbar/>
        <Signup/>
      </div>
    }
  ]
)
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App