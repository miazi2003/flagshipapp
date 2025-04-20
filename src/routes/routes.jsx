import { createBrowserRouter } from "react-router";


import Home from "../pages/home";
import MainLayOut from "../layouts/MainLayOut";
import Favorites from "../pages/favorites";
import About from "../pages/about";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";

const route = createBrowserRouter([
    {
      path: "/",
      Component:MainLayOut,
      errorElement: <ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>,
          loader:()=> fetch('phones.json')
        },
        {
          path: "/favorite",
         element: <Favorites/>
        },
        {
          path: "/about",
         element: <About/>
        },
        {
          path : "/phone-details",
          element:<PhoneDetails/>
        }
        
      ]
    }
  ])

  export default route;