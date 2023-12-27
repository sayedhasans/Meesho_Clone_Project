import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../Meesho/Banner";
import Banner2 from "../Meesho/Banner2";
import Footer from "../Meesho/Footer";
function Home(){

    const [Home,SetHome] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products').then(hi=>hi.json()).then((p)=>SetHome(p.products)) 
    },[])

    return(
       <div>
        <Banner/>
        <Banner2/>

<div className="grid grid-cols-1 sm:grid-cols-3  gap-4 p-4 ">
        {Home.map((val,i)=>{
            return(
            <div className=" shadow-lg shadow-gray-400 rounded-md text-center p-7 text-lg ">
                <img src={val.images[0]} alt="" className="w-full h-[400px]" />
                <p>{val.brand}</p>
                <p>{val.category}</p>
                <p>{val.rating}</p>
                <p>{val.price}</p><br></br>
              <Link to = {"/products/"+val.id} className="border-none  p-5 px-20  bg-pink-500 text-white rounded-md text-xl hover:text-black" >View</Link>
                </div>
            )
        })}
    </div>
        <Footer/>
       </div>

    
    )
}
export default Home;