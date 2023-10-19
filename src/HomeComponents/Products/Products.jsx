import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductShow from "./ProductShow";
import Slider from "./Slider";


const Products = () => {
    const brandName = useParams()
   
    const products = useLoaderData()
   

    const [cards, setCards] = useState([])

    useEffect( ()=> {
        const cardshow = products.filter(card => card.brand.toUpperCase() == brandName.name.toUpperCase())
    
        setCards(cardshow)
    }, [brandName,products])
    
    return (
       <div>
    

       {
        cards.length > 0 ?  <div>
            <div><Slider></Slider></div>
<div className="grid md:grid-cols-2 md:gap-10 my-10">
        {
            cards.map((card , ind) => <ProductShow key={ind} card={card}></ProductShow>)
        }
    </div>
        </div> :
    <div className=" h-[55vh] flex items-center justify-center"> 
        <h1 className="text-3xl font-bold">No Products Available Here</h1>


    </div>
       }
       </div>
    );
};

export default Products;