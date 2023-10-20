import Banner from "../../HomeComponents/Banner/Banner";
import Brands from "../../HomeComponents/Brands/Brands";
import Service from "./Service";



const Home = () => {
    return (
        <div>
            <Banner></Banner>

           <Service></Service>
            <Brands></Brands>

            <div className="mt-8 mb-8">
            <div className="hero min-h-[35vh]" style={{backgroundImage: 'url(https://i.ibb.co/j6hrV3S/banner-4.jpg)'}}>
  <div className=" "></div>
  <div className="w-full flex justify-start pl-3 lg:pl-20">
    <div className="text-black text-left">
      <h2 className="text-xs lg:text-lg text-red-600">WEKEND DISCOUNT</h2>
      <h1 className="lg:mb-2 text-lg lg:text-3xl font-bold">Momentum 3 Headphone</h1>
      <p className="lg:mb-5 mb-2 text-sm lg:text-xl">Do not miss the last opportuinity </p>
      <button className="btn bg-red-600 text-xs text-white hover:bg-red-800 ">Shop Now</button>
    </div>
  </div>
</div>
        </div>

        </div>
    );
};

export default Home;