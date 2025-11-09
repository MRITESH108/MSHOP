import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './app.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import ProdDesc from "./card/ProdDesc";


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
  {
     path: "/cart",
    element: <div className="app-homebox">
      <Navbar/>
      <Cart/>
    </div>,
  },
  {
     path: "/products/:id",
    element: <div className="app-homebox">
      <Navbar/>
      <ProdDesc/>
    </div>,
  },
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
