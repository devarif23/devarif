import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './layout/MainLayout';
import Home from './page/Home';
import Protfolio from './page/Protfolio';
import Blog from './page/Blog';
import About from './page/About';
import Service from './component/Service';
import Contact from './page/Contact';
import SinggelBlog from './component/SinggelBlog';






const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[{
      path: '/',
      element:<Home/>,
    },
    {
      path: '/Protfolio-page',
      element:<Protfolio/>,
    },
    {
      path: '/blog-page',
      element:<Blog/>,
    },
    {
      path: '/About-page',
      element:<About/>,
    },
    {
      path: '/Service-page',
      element:<Service/>,
    },
    {
      path: '/SinggelBlog-page',
      element:<SinggelBlog/>,
    },
   
    {
      path: '/Contatc-page',
      element:<Contact/>,
    }
      
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode >
    <div className=''>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
