import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayouts from './Layouts/MainLayouts.jsx';
import Home from './Components/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import OurProduct from './Components/OurProduct.jsx';
import CoffeeDetails from './Components/CoffeeDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
   Component:MainLayouts,
   children:[
    {
      index:true,
      Component:Home,
    },
    {
      path:"ourProduct",
      loader:()=>fetch('http://localhost:3000/coffees'),
      Component:OurProduct
    },
    {
      path:"addCoffee",
      Component:AddCoffee
    },
    {
      path:'coffee/:id',
      Component:CoffeeDetails,
    },
    {
      path:'updateCoffee/:id',
      loader:({params})=>(`http://localhost:3000/coffees/${params.id}`),
      Component:UpdateCoffee
    }

   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
