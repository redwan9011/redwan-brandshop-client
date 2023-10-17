

const Brands = () => {
    const handleBrand = () => {
        console.log('click name');
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-14">
            {/* card 1 */}
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img  src="https://i.ibb.co/S6PTGys/download.jpg" alt="brand image" className="rounded-xl w-full h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <a onClick={handleBrand} className="card-title text-2xl hover:text-blue-600 cursor-pointer hover:underline">Apple</a>
                </div>
            </div>
            {/* card 2 */}
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src="https://i.ibb.co/C8FbcLg/samsung-brand.jpg" alt="brand image" className="rounded-xl w-full h-48" />
                </figure>
                <div className="card-body items-center text-center">
                    <a onClick={handleBrand} className="card-title text-2xl hover:text-blue-600 cursor-pointer hover:underline">Samsung</a>
                </div>
            </div>
            {/* card 3 */}
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src="https://i.ibb.co/m6zTs7v/google-logo-on-the-side-of-a-building-at-google-head-office-campus-E94-EKB.jpg" alt="brand image" className="rounded-xl w-full h-48" />
                </figure>
                <div className="card-body items-center text-center">
                    <a className="card-title text-2xl hover:text-blue-600 cursor-pointer hover:underline">Google</a>
                </div>
            </div>
            {/* card 4 */}
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src="https://i.ibb.co/Hpr5yGq/xiaomi-brand-logo-phone-symbol-with-name-white-design-chinese-mobile-illustration-with-orange-backgr.jpg" alt="brand image" className="rounded-xl w-full h-48" />
                </figure>
                <div className="card-body items-center text-center">
                    <a onClick={handleBrand} className="card-title text-2xl hover:text-blue-600 cursor-pointer hover:underline">Xiomi</a>
                </div>
            </div>
            {/* card 5 */}
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src="https://i.ibb.co/jDxT5cG/intel-comet-lake-vpro-brand.webp" alt="brand image" className="rounded-xl w-full h-48" />
                </figure>
                <div className="card-body items-center text-center">
                    <a onClick={handleBrand} className="card-title text-2xl hover:text-blue-600 cursor-pointer hover:underline">Intel</a>
                </div>
            </div>
            {/* card 6 */}
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src="https://i.ibb.co/rcQ9GWM/vivo-new-logo.jpg" alt="brand image" className="rounded-xl w-full h-48" />
                </figure>
                <div className="card-body items-center text-center">
                    <a onClick={handleBrand} className="card-title text-2xl hover:text-blue-600 cursor-pointer hover:underline">Vivo</a>
                </div>
            </div>


        </div>
    );
};

export default Brands;