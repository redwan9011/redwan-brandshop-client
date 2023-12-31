import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const Update = () => {
    const product = useLoaderData()
   const {name, brand, type, price, rating, image, details,_id} = product || {}
   const handleUpdateProducts = e => {

    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const details = form.details.value;
    const prodcuts = { name, brand, type, price, rating, image, details, }
    console.log(prodcuts);

    fetch(`https://redwan-brandshop-server-dhu9wjsv3-redwan-islams-projects.vercel.app/products/${_id}` , {
        method: "PUT",
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify(prodcuts)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0) {
            Swal.fire('Product Add SuccessFully')
        }
    })

}

    return (
         <div className="my-10">
            <h1 className="text-center text-3xl font-bold mb-5">Update: {name}</h1>
            <form onSubmit={handleUpdateProducts} className=" space-y-5">

             <div className="grid md:grid-cols-2 gap-3 md:gap-8  w-full">
             <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24 ">Name</span>
                        <input type="text" name="name" defaultValue={name} placeholder="Product name" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24">Brand</span>
                        <input type="text" name="brand" defaultValue={brand} placeholder="Brand name" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
             </div>

             <div className="grid md:grid-cols-2 gap-3 md:gap-8   w-full">
             <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24 ">Type</span>
                        <input type="text" name="type" defaultValue={type} placeholder="Product type" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24">Price</span>
                        <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
             </div>
             <div className="grid md:grid-cols-2 gap-3 md:gap-8   w-full">
             <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24 ">Rating</span>
                        <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24">Image</span>
                        <input type="text" name="image" defaultValue={image} placeholder="image URL" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
             </div>

             <div className="  w-full">
             <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24 ">Details</span>
                        <input type="text" name="details" defaultValue={details} placeholder="Short description" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
             
             </div>
             <div className="  w-full">
           
               <input type="submit" value="Update Products" className="btn bg-red-600 w-full hover:bg-red-800 text-white md:text-xl" />
             </div>


            </form>
        </div>
    );
};

export default Update;