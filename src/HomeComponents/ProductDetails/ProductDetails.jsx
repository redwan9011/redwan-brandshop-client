import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Slider from "./Slider";



const ProductDetails = () => {
    const loadedProducts = useLoaderData()

    const { id } = useParams()
    console.log(id);
    const [product, setProduct] = useState([])
    useEffect(() => {
        const productdetails = loadedProducts.find(detail => detail._id === id)
        setProduct(productdetails)
    }, [id, loadedProducts])

    const handleCart = () => {
        
        fetch('http://localhost:3000/carts' , {
            method: "POST",
            headers: {
                'content-type' : 'application.json',
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
      
    }

    return (
        <div>
            <Slider></Slider>
            <div className="card card-compact  bg-base-100 shadow-xl mt-10">
                <figure><img src={product.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.details}</p>
                    <p>{product.brand}</p>
                    <p>{product.type}</p>
                    <h2>{product.price}$</h2>
                    <h4>{product.rating}</h4>
                    <div>
                        <button onClick={handleCart}  className="btn w-full">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;