import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductShow from "./ProductShow";


const Products = () => {
    const brandName = useParams()
    console.log(brandName);
    const products = useLoaderData()
    // console.log(products);

    const [cards, setCards] = useState([])

    useEffect( ()=> {
        const cardshow = products.filter(card => card.brand == brandName.name)
    
        setCards(cardshow)
    }, [brandName,products])
    console.log(cards);
    return (
        <div>
            {
                cards.map(card => <ProductShow key={card._id} card={card}></ProductShow>)
            }
        </div>
    );
};

export default Products;