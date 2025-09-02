import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './app.css'
import Navbar from './components/Navbar'
import Product from './components/Product'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="app-homebox">
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
