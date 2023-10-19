import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductShow from "./ProductShow";


const Products = () => {
    const brandName = useParams()
   
    const products = useLoaderData()
   

    const [cards, setCards] = useState([])

    useEffect( ()=> {
        const cardshow = products.filter(card => card.brand.toUpperCase() == brandName.name.toUpperCase())
    
        setCards(cardshow)
    }, [brandName,products])
    
    return (
        <div className="grid md:grid-cols-2 md:gap-10 my-10">
            {
                cards.map((card , ind) => <ProductShow key={ind} card={card}></ProductShow>)
            }
        </div>
    );
};

export default Products;