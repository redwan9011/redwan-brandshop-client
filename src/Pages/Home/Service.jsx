

const Service = () => {
    return (
        <div className="bg-gray-100 py-10 mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 px-3 ">
            <div className="text-center flex flex-col  items-center">
                <div className=" w-16 h-16 hover:bg-red-500 delay-200 shadow-xl bg-slate-400 rounded-full flex justify-center items-center">
                <img src="https://i.ibb.co/QmZfnqr/a1.png" alt=""   />
                    
                </div>
                <h1 className="lg:text-xl text-slate-500 hover:text-red-500 delay-200 font-bold my-1">Safe Payment</h1>
                <p className="text-slate-500 text-xs md:text-sm ">Pay with the world’s most popular and secure payment methods.</p>
            </div>

            <div className="text-center flex flex-col  items-center">
                <div className=" w-16 h-16 hover:bg-red-500 delay-200 shadow-xl bg-slate-400 rounded-full flex justify-center items-center">
                <img src="https://i.ibb.co/M607jtF/a2.png" alt=""   />
                    
                </div>
                <h1 className="lg:text-xl text-slate-500 hover:text-red-500 font-bold delay-200 my-1">Worldwide Delivery</h1>
                <p className="text-slate-500 text-xs md:text-sm ">With sites in 5 languages, we ship to over 200 countries & regions.</p>
            </div>

            <div className="text-center flex flex-col  items-center">
                <div className=" w-16 h-16 hover:bg-red-500 delay-200 shadow-xl bg-slate-400 rounded-full flex justify-center items-center">
                <img src="https://i.ibb.co/MD4qQsf/a3.png" alt=""   />
                    
                </div>
                <h1 className="lg:text-xl my-1 text-slate-500 hover:text-red-500 font-bold delay-200">24/7 Help Center</h1>
                <p className="text-slate-500 text-xs md:text-sm ">Round-the-clock assistance for a smooth shopping experience.</p>
            </div>

            <div className="text-center flex flex-col  items-center">
                <div className=" w-16 h-16 hover:bg-red-500 delay-200 shadow-xl bg-slate-400 rounded-full flex justify-center items-center">
                <img src="https://i.ibb.co/G3dSJSk/a4.png" alt=""   />
                    
                </div>
                <h1 className="lg:text-xl my-1 text-slate-500 hover:text-red-500 font-bold delay-200">Daily Promotion</h1>
                <p className="text-slate-500 text-xs md:text-sm ">Get a new great bonus every day. Check out the Locamart</p>
            </div>
        </div>
    );
};

export default Service;