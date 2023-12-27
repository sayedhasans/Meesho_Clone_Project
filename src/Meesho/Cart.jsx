import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
function Cart({Array, setdel}){
    return(
        <div className="grid grid-cols-1 sm:grid sm:grid-cols-3 items-center ">
                {Array && Array.length > 0 ? Array.map((t, i)=>{
               
               return(
                   <div className=" flex flex-col items-center p-6">
                   <img src={t.images[0]} alt="" className="h-[350px] w-[350px]"/>
                   <div className="  space-y-2 p-5 text-xl  ">
                       <p>Brand  : {t.brand}</p>
                       <p>Model  :  {t.category}</p>
                       <div className="flex items-center justify-center gap-1">Rating : {t.rating} <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf/> </div>
                       <p>Price  : Rs. {t.price}/-</p>
                       <button onClick={()=>setdel(i)} className="border-2 border-green-500 p-3 text-[red] hover:bg-[pink]">Delete Cart</button>
                       </div>
                       </div>
               )
           })
           : "No Data"}
            
        </div>
    )
}
export default Cart;