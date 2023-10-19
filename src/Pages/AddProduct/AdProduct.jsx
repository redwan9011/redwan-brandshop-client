import Swal from "sweetalert2";


const AdProduct = () => {
    const handleaddProducts = e => {
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

        fetch('http://localhost:3000/products' , {
            method: "POST", 
            headers: { 'content-type' : 'application/json'},
            body: JSON.stringify(prodcuts)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged) {
                Swal.fire('Product Add SuccessFully')
            }
        })

    }

    return (
        <div className="my-10">
            <form onSubmit={handleaddProducts} className=" space-y-5">

             <div className="grid grid-cols-2 gap-8  w-full">
             <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24 ">Name</span>
                        <input type="text" name="name" placeholder="Product name" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24">Brand</span>
                        <input type="text" name="brand" placeholder="Brand name" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-8  w-full">
             <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24 ">Type</span>
                        <input type="text" name="type" placeholder="Product type" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24">Price</span>
                        <input type="text" name="price" placeholder="Brand name" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
             </div>
             <div className="grid grid-cols-2 gap-8  w-full">
             <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24 ">Rating</span>
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24">Image</span>
                        <input type="text" name="image" placeholder="image URL" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
             </div>

             <div className="  w-full">
             <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24 ">Details</span>
                        <input type="text" name="details" placeholder="Short description" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
             
             </div>
             <div className="  w-full">
           
               <input type="submit" value="Add Products" className="btn bg-red-600 w-full hover:bg-red-800 text-white md:text-xl" />
             </div>


            </form>
        </div>
    );
};

export default AdProduct;