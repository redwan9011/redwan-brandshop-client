import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const ProductShow = ({card}) => {
    const {name, brand, type, price, rating, image, _id,} = card || {}
    return (
        <div>
       <div className="card card-side  shadow-xl">
  <figure><img src={image} alt="apple image"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{brand}</p>
    <p>{type}</p>
    <h2>{price}$</h2>
    <h4>{rating}</h4>
    
    <div className="flex gap-8">
        <Link to={`/details/${_id}`}><button className="btn">Details</button></Link>
        <Link to={`/update/${_id}`}><button className="btn"> Update</button></Link>
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