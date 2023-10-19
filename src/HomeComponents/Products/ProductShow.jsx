import PropTypes from "prop-types"
import { Link } from "react-router-dom";

import { BsFillStarFill } from "react-icons/bs";
const ProductShow = ({card}) => {
    const {name, brand, type, price, rating, image, _id,} = card || {}
    return (
        <div className=" md:my-2">
       <div className="card md:flex-col lg:flex-row card-side  shadow-xl">
  <figure><img className="md:w-44 lg:w-48 md:h-40 lg:h-44"  src={image} alt="apple image"/></figure>
  <div className="card-body ">
    <h2 className="card-title text-md md:text-2xl">{name}</h2>
   <div className="flex justify-between">
   <p className=" text-sm md:text-xl font-semibold">Brand: {brand}</p>
    <p className="text-sm md:text-xl font-semibold">Type: {type}</p>
   </div>
   <div className="flex ">
   <p className=" text-sm md:text-base font-medium">Price: {price}$</p>
    <p className=" text-sm md:text-base flex items-center gap-1 font-medium">Rating: {rating} <BsFillStarFill ></BsFillStarFill></p>
   </div>
    
    <div className="flex gap-8 mt-4">
        <Link to={`/details/${_id}`}><button className="btn text-xs md:px-8 bg-red-600 hover:bg-red-800 text-white">Details</button></Link>
        <Link to={`/update/${_id}`}><button className="btn text-xs md:px-8 bg-black text-white hover:bg-black"> Update</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

ProductShow.propTypes = {
    card:PropTypes.object
}

export default ProductShow;