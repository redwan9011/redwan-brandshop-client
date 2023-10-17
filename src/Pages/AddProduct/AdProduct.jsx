

const AdProduct = () => {
    return (
        <div className="my-10">
            <form className=" space-y-5">

             <div className="grid grid-cols-2 gap-8  w-full">
             <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24 ">Name</span>
                        <input type="text" placeholder="Product name" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24">Brand</span>
                        <input type="text" placeholder="Brand name" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-8  w-full">
             <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24 ">Type</span>
                        <input type="text" placeholder="Product type" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24">Price</span>
                        <input type="text" placeholder="Brand name" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
             </div>
             <div className="grid grid-cols-2 gap-8  w-full">
             <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24 ">Rating</span>
                        <input type="text" placeholder="Rating" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24">Image</span>
                        <input type="text" placeholder="image URL" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
             </div>

             <div className="  w-full">
             <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24 ">Details</span>
                        <input type="text" placeholder="Short description" className="input input-bordered focus:outline-none w-full" />
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