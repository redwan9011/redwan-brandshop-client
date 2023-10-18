import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const Brand = ({product}) => {
    // console.log(product);
    return (
         <div >
          
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img  src={product.image} alt="brand image" className="rounded-xl w-full h-52" />
                </figure>
                <div className="card-body items-center text-center">
             
                    <Link  to={`/products/${product.name}`} className="card-title text-2xl hover:text-blue-600 cursor-pointer hover:underline">{product.name} </Link>
                </div>
            </div>
           
        </div>
    );
};

Brand.propTypes = {
    product:PropTypes.object
}
export default Brand;