import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home"
import Navbar from "./Navbar/Navbar"
import Signup from "./pages/Signup"
import Login from "./pages/Login"


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
    },
    {
      path:"/Login",
      element: <div>
        <Navbar/>
        <Login/>
      </div>
    },
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