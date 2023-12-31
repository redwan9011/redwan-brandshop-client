import React from 'react'
import ReactDOM from 'react-dom/client'

import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOuts from './LayOuts/LayOuts';
import Home from './Pages/Home/Home';
import AdProduct from './Pages/AddProduct/AdProduct';
import MyCart from './Pages/MyCart/MyCart';
import Login from './Pages/Login/Register/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import Products from './HomeComponents/Products/Products';
import ProductDetails from './HomeComponents/ProductDetails/ProductDetails';
import Update from './HomeComponents/Update/Update';
import PrivateRout from './PrivateRout/PrivateRout';
import ErrorPage from './Pages/ErrorPage/ErrorPage';




const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOuts></LayOuts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: "/products/:name",
        element:<Products></Products> ,
        loader: ()=> fetch('https://redwan-brandshop-server-dhu9wjsv3-redwan-islams-projects.vercel.app/products')
       
      },
      {
        path: "/details/:id",
        element: <PrivateRout><ProductDetails></ProductDetails></PrivateRout>,
        loader: ()=> fetch(`https://redwan-brandshop-server-dhu9wjsv3-redwan-islams-projects.vercel.app/products`)
        
       
      },
      {
        path: "/update/:id",
        element: <PrivateRout><Update></Update></PrivateRout> ,
        loader: ({params})=> fetch(`https://redwan-brandshop-server-dhu9wjsv3-redwan-islams-projects.vercel.app/products/${params.id}`)
      },
 

      {
        path: "/addproduct",
        element: <PrivateRout><AdProduct></AdProduct></PrivateRout> ,
      },
      {
        path: "/mycart",
        element: <PrivateRout><MyCart></MyCart></PrivateRout> ,
        loader: ()=> fetch('https://redwan-brandshop-server-dhu9wjsv3-redwan-islams-projects.vercel.app/carts')
      },
      {
        path: "/login",
        element: <Login></Login> ,
       
      },
      {
        path: "/register",
        element: <Register></Register> ,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
