
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Meesho/Navbar';
import Navbar2 from './Meesho/Navbar2';
import Home from './Meesho/Home';
import Products from './Meesho/Products';
import { useState } from 'react';
import Cart from './Meesho/Cart';


function App() {
    const [Array,SetArray] = useState([])

    
    function setval(val){
      SetArray([...Array , val])
    }
    function setdel(del){
 
     let temp = Array.filter((v,i)=>{
         if(i !== del){
           return v
         }
      })
      SetArray(temp)
     }


  return (
    <div>
      <BrowserRouter>
       <Navbar len = {Array.length}/>
       <Navbar2/>
     
       <Routes>
    
       <Route path='/' element = {<Home/>}></Route>
       <Route path='/products/:id' element = {<Products setval={setval}/>}></Route>
       <Route path = "/cart" element ={<Cart Array={Array}  setdel={setdel} />}></Route>

       </Routes>
       </BrowserRouter>
     
   </div>
  );
}

export default App;
