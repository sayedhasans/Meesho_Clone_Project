import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
function Products({setval}){
    const [Products,SetProducts] = useState(null)
    let {id} = useParams()
    useEffect(()=>{
        fetch('https://dummyjson.com/products/'+id).then(hello=>hello.json()).then((v)=>SetProducts(v))

    },[])

    return(
        <div>
            {Products ? <div className="sm:flex justify-evenly  p-6">
                <img src={Products.images[0]} alt=""/>
                <div className=" space-y-2 p-5 text-xl h-[250px] ">
                    <p>Brand  : {Products.brand}</p>
                    <p>Model  : {Products.category}</p>
                    <div className="flex items-center gap-1">Rating : {Products.rating} <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf/> </div>
                    <p>Price  : Rs. {Products.price} /-</p>
                    <button onClick={()=>setval(Products)} className="rounded-xl bg-pink-500 p-3 hover:bg-pink-700">Add to Cart</button>
                    </div>
            </div> : <div>loading...</div>}
        </div>
    )
   
}
export default Products;