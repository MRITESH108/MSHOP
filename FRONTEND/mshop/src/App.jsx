import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './app.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Category from "./components/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="app-box">
      <Navbar/>
      <Product/>
    </div>,
  },
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
