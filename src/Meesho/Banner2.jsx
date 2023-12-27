import Image from "../images/1678691686252_400.webp"
import Image2 from "../images/1678691699680_300.webp"
import Image3 from "../images/1678691712594_299.webp"
import Image4 from "../images/1678691846068_200.webp"
import Image5 from "../images/1678691832099_201.webp"
import Image6 from "../images/1678691796046_202.webp"
import Image7 from "../images/1678691960553_203.webp"
import Image8 from "../images/1678691936892_205.webp"
import Image9 from "../images/1678691925419_206.webp"
function Banner2(){
    return(
        <div className="flex flex-col justify-center items-center  ">
                <p className="text-4xl text-gray-800 font-semibold p-10 ">Top Categories to choose from</p>
                <div className=" w-[350px] sm:grid p-5 sm:w-[85%]  gap-16 space-y-16">
                <div className="sm:flex pt-14 bg-gradient-to-b from-orange-200 to-gray-200 rounded-md">
                    
                <img src={Image} alt="1" className=" p-5" />
                <div className="flex-col ">
                    <p className=" text-xl sm:p-10 font-bold sm:text-5xl pl-36">Be fashion forward</p>
                    <div className=" sm:flex justify-evenly gap-8 pl-24 pt-10">
                    <img src={Image2} alt="2" className="w-[200px] sm:w-full" />
                    <img src={Image3} alt="3" className="w-[200px] sm:w-full" />
                    </div>
                </div>
                </div>

                <div className=" sm:flex justify-evenly  bg-gradient-to-t from-orange-200 to-gray-200 rounded-md">
                    <div className=" sm:flex sm:flex-col items-center justify-center ">
                        <p className="text-6xl text-gray-900 font-bold p-5">Essentials</p>
                        <button className="ml-20 sm:text-white bg-pink-600 rounded-md text-2xl p-3 px-10">View All</button>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex flex-col py-20">
                        <img src={Image4} alt="4" />
                        <button className="bg-black text-white border-none rounded-md p-3 mt-3 ">Home Decor</button>
                        </div>
                        <div className="flex flex-col py-20">
                        <img src={Image5} alt="5" />
                        <button className="bg-black text-white border-none rounded-md p-3 mt-3 ">Kitchen Appliances</button>
                        </div>
                        <div className="flex flex-col py-20">
                        <img src={Image6} alt="6" />
                        <button className="bg-black text-white border-none rounded-md p-3 mt-3 ">Health Care</button>
                        </div>
                    </div>

                </div>
                    
                <div className="sm:flex justify-evenly pt- bg-gradient-to-b from-orange-200 to-gray-100 rounded-md">
                    <div className="flex flex-col items-center justify-center ">
                        <p className="text-6xl text-gray-900 font-bold p-5">New styles</p>
                        <button className="text-white bg-pink-600 rounded-md text-2xl p-3 px-10">View All</button>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex flex-col py-20">
                        <img src={Image7} alt="7" />
                        <button className="bg-black text-white border-none rounded-md p-3 mt-3 ">Accessories</button>
                        </div>
                        <div className="flex flex-col py-20">
                        <img src={Image8} alt="8" />
                        <button className="bg-black text-white border-none rounded-md p-3 mt-3 ">Footwear</button>
                        </div>
                        <div className="flex flex-col py-20">
                        <img src={Image9} alt="9" />
                        <button className="bg-black text-white border-none rounded-md p-3 mt-3 ">Electronics</button>
                        </div>
                    </div>

                </div>

                </div>
        </div>
    )
}
export default Banner2;
