

const Banner = () => {
    return (
        <div className="mt-8">
            <div className="hero min-h-[60vh]" style={{backgroundImage: 'url(https://i.ibb.co/Rj2RGsF/slider-banner-1.jpg)'}}>
  <div className=" "></div>
  <div className="w-full flex justify-start pl-3 lg:pl-20">
    <div className="text-black text-left">
      <h2 className="text-md lg:text-3xl font-light">Feel Good Shopping</h2>
      <h1 className="lg:mb-5 text-xl lg:text-5xl font-bold">Shop What  You Desire</h1>
      <p className="lg:mb-5 mb-2 lg:text-xl">last Call for upto <span className="text-red-600 font-bold lg:text-2xl text-xl">20%</span> off!!</p>
      <button className="btn bg-red-600 text-xs text-white hover:bg-red-800">Shop Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;