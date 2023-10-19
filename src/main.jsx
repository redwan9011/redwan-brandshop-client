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




const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOuts></LayOuts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: "/products/:name",
        element:<Products></Products> ,
        loader: ()=> fetch('http://localhost:3000/products')
       
      },
      {
        path: "/details/:id",
        element: <ProductDetails></ProductDetails> ,
        loader: ()=> fetch(`http://localhost:3000/products`)
        
       
      },
      {
        path: "/update/:id",
        element: <Update></Update> ,
        loader: ({params})=> fetch(`http://localhost:3000/products/${params.id}`)
      },
 

      {
        path: "/addproduct",
        element:<AdProduct></AdProduct> ,
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart> ,
        loader: ()=> fetch('http://localhost:3000/carts')
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
