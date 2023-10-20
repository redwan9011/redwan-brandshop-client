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

                fetch(`https://redwan-brandshop-server-dhu9wjsv3-redwan-islams-projects.vercel.app/carts/${_id}`, {
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
                <figure className="lg:px-10 lg:pt-10">
                    <img  src={image} alt="brand image" className="rounded-xl w-28 lg:w-40" />
                </figure>
                <div className="items-center text-center space-y-1">
                    <h2 className="font-bold ">{name}</h2>
                    <h4 className="font-semibold">{brand}</h4>
                    <p>{price}$</p>
                    <div className="px-5 pb-4">
                        <button className="bg-red-600 py-2 text-white text-sm rounded-xl w-full " onClick={() => handleDelte(_id)}>Delete</button>
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