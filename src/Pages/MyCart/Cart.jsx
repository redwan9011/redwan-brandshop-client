import PropTypes from "prop-types"
import Swal from "sweetalert2";


const Cart = ({ cart , carts, setCarts}) => {
    console.log(cart);
    const { name, brand, price, image, _id } = cart || {}

    const handleDelte = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/carts/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                         const remaining = carts.filter( cart => cart._id !== _id)
                         setCarts(remaining)
                        }
                    })


            }
        })
    }

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="brand image" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h4>{brand}</h4>
                    <p>{price}$</p>
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={() => handleDelte(_id)}>Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object,
    carts:PropTypes.array,
    setCarts:PropTypes.func,
}

export default Cart;