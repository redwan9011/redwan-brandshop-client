
import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";




const Brands = () => {
    
    const products = useLoaderData()
    // console.log(products);

    return (
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-14">
            {
                products.map(product => <Brand key={product.id} product={product}></Brand>)
            }
        </div>
    );
};

export default Brands;