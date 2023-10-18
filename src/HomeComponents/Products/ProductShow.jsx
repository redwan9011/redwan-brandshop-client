import PropTypes from "prop-types"

const ProductShow = ({card}) => {
    return (
        <div>
        <div> <h1>brand: {card?.brand}</h1></div> 
        </div>
    );
};

ProductShow.propTypes = {
    card:PropTypes.array
}

export default ProductShow;