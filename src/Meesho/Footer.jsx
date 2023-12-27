import Image from "../images/playstore-icon-big.png"
import Image2 from "../images/appstore-icon-big.png"
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function Footer(){
    return(
        <div className="  sm:flex justify-evenly items-center bg-gray-100 p-5">
            <div className="flex flex-col gap-5">
                <p className="text-3xl text-gray-900">Shop Non-Stop on Meesho</p>
                <p className="text-gray-600">Trusted by more than 1 Crore Indians<br/>Cash on Delivery | Free Delivery</p>
                <p className="space-y-3 sm:flex gap-3"><img src={Image} alt="play" className="w-44 h-15"/>
                <img src={Image2} alt="app" className="w-44 h-15"/></p>
            </div>
            <ul className="text-gray-600 font-medium space-y-5">
                <li>Careers</li>
                <li>Become a Supplier</li>
                <li>Hall of Fame</li>
                <li>Sitemap</li>
            </ul>
            <ul className="text-gray-600 font-medium space-y-5">
                <li>Legal and Policies</li>
                <li>Meesho Tech Blog</li>
                <li>Notices and Returns</li>
            </ul>
            <div>
                <p className="font-medium text-lg text-gray-900 mb-3">Reach out to us</p>
                <div className="flex gap-3 text-2xl"><BiLogoFacebookCircle  className="  text-blue-600"/>
                <BsInstagram className="text-pink-600"/>
                <BsYoutube className="text-red-500"/>
                <BsLinkedin className="text-blue-700"/>
                <BsTwitter className="text-cyan-700"/>
                </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-900 mb-3 font-medium">Contact Us</p>
                    <p className="text-gray-700">Fashnear Technologies Private <br/>Limited,
<br/>CIN: U74900KA2015PTC082263
06-105-B, 06-102, (138 Wu) <br/>Vaishnavi Signature, No. 78/9, <br/>Maruthamalai <br/>Coimbatore-640612, <br/>Tamilnadu India
<br/>E-mail address: <br/>hasan786619@gmail.com
<br/>hasan clone Meesho.com</p>
            </div>
            
        </div>
    )
}
export default Footer;
