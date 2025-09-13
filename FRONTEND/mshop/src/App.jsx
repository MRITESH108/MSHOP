import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './app.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Login from "./components/Login";
import SignUp from "./components/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="app-homebox">
      <Navbar/>
      <Product/>
    </div>,
  },
  {
     path: "/login",
    element: <div className="app-homebox">
      <Navbar/>
      <Login/>
    </div>,
  },
  {
     path: "/signup",
    element: <div className="app-homebox">
      <Navbar/>
      <SignUp/>
    </div>,
  },
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
