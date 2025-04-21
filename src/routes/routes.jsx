import { createBrowserRouter } from "react-router";


import Home from "../pages/home";
import MainLayOut from "../layouts/MainLayOut";

import About from "../pages/about";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";
import Favorites from "../pages/Favorites";

const route = createBrowserRouter([
    {
      path: "/",
      Component:MainLayOut,
      errorElement: <ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>,
          loader:()=> fetch('../phones.json')
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
          path : "/phone-details/:id",
          element:<PhoneDetails/>,
          loader:()=> fetch('../phones.json')
        }
        
      ]
    }
  ])

  export default route;