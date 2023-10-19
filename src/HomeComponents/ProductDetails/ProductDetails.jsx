import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import Swal from "sweetalert2";




const ProductDetails = () => {
    const loadedProducts = useLoaderData()

    const { id } = useParams()
 
    const [product, setProduct] = useState([])

    useEffect(() => {
        const productdetails = loadedProducts.find(detail => detail._id === id)
        setProduct(productdetails)
    }, [id, loadedProducts])
// console.log(product.name);
// console.log(product.brand);

const name =product.name;
const brand = product.brand;
const type = product.type;
const price = product.price;
const rating = product.rating;
const image = product.image;
const details = product.details;
const alldata = {name, brand, type, price, rating, image, details}
console.log();
//    const { name, brand, type, price, rating, image, details,} = product

    const handleAdCart = ()=> {
        fetch('http://localhost:3000/carts' , {
            method: "POST",
            headers: { 'content-type' : 'application/json'},
            body: JSON.stringify(alldata)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                Swal.fire('Add to Cart Succesfully')
            }
        })
    }

    return (
        <div className="my-8">
           
            <div className="card card-compact  bg-base-100 shadow-xl mt-10 px-2 md:px-4">
                <figure><img src={product.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title md:text-2xl lg:text-3xl">{product.name}</h2>
                    <p className="text-xl font-semibold">Brand: {product.brand}</p>
                    <p className="text-base font-semibold">Type: {product.type}</p>
                    <p className="text-slate-600 pb-4">{product.details}</p>
                    <div>
                        <button className="btn w-full bg-red-600 hover:bg-red-800 text-white" onClick={handleAdCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;