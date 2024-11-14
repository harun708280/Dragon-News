import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import Header from "../Component/Header/Header";
import Home from "../Component/Home/Home";
import Layout from "../Layout/Layout";
import News from "../Component/Home/News";
import Details from "../Component/Home/Details";
import Login from "../Component/Security/Login";
import Register from "../Component/Security/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          children:[
            {
              path:'/',
              element:<Navigate to='/category/01'></Navigate>
            },
            {
              path:'/category/:id',
              element:<News></News>,
              loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                           
            }
          ]
        },
        {
          path:'/item/:id',
          element:<Details></Details>,
          loader:({params})=>fetch(` https://openapi.programming-hero.com/api/news/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
        
      ]
    },
  ]);

export default router;