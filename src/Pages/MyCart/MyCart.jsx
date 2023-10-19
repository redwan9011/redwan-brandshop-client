import { useLoaderData } from "react-router-dom";
import Cart from "./cart";
import { useEffect, useState } from "react";




const MyCart = () => {
   const loadedCarts = useLoaderData()
   const [ carts, setCarts] = useState(loadedCarts)

   useEffect( ()=> {

   },[])

  
    return (
        <div>
          <div className="grid grid-cols-2 mt-3 mb-10 md:grid-cols-3 gap-8">
          {
            carts.map(cart => < Cart key={cart._id} 
              
              cart={cart}
              carts ={carts}
              setCarts={setCarts}
              ></Cart> )
          }
        </div>
        </div>
    );
};

export default MyCart;