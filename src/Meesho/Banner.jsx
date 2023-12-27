import { CiDeliveryTruck } from "react-icons/ci";
import { GiTakeMyMoney } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Google from "../images/Google_Play-Icon-Logo.wine.png"
import first from "../images/1678691617864_512.webp"
function Banner(){
    return(
        <div className=" sm:flex justify-center p-6 ">
            <div className="flex flex-col bg-gray-100 p-10 ">
                <p className="text-5xl font-semibold text-gray-800 p-2">Lowest Prices</p>
                <p className="text-5xl font-semibold text-gray-800 p-2">Best Quality Shopping</p>

                <div className="sm:flex justify-between bg-white  my-2">
                   <div className="flex items-center ">
                    <p>
                    <CiDeliveryTruck className="text-4xl border-2 rounded-full"/>
                    </p>
                    <p className="px-3 font-medium">
                        Free <br />Delivery </p>

                   </div>

                   <div className="flex justify-between bg-white  my-10">
                   <div className="flex items-center ">
                    <p className="border-l-2 border-gray-600 p-2">
                    <GiTakeMyMoney  className="text-4xl border-2 rounded-full"/>
                    </p>
                    <p className="px-3 font-medium ">
                        Cash on <br />Delivery </p>
                        </div>

                   </div>

                   <div>
                   <div className="flex justify-between bg-white my-10">
                   <div className="flex items-center ">
                    <p className="border-l-2 border-gray-600 p-2">
                    <HiOutlineShoppingBag   className="text-4xl border-2 rounded-full"/>
                    </p>
                    <p className="px-3 font-medium">
                        Easy <br />Returns </p>
                        </div>

                   </div>

                   </div>
                </div>

                <div>
                    <button className="bg-pink-600 flex items-center border-none text-white p-2 rounded-sm"><img src={Google} alt="Googleplay" className="w-20 " />Download the Meesho App</button>
                </div>
            </div>

            <div>
                    <img src={first} alt="img" className="h-[450px]" />
            </div>
        </div>
    )
}
export default Banner;