import React from "react";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div >
        <div className="apple">

            


            <p className = "text-white inline ml-6 mt-4">Lpardo</p>
            <ul className = "float-right mt-4 mr-2">
                <li className = "text-white inline text-sm"><a href="#">Home</a></li>
                <li className = "text-white ml-4 inline text-sm"><a href="#">Pages</a></li>
                <li className = "text-white ml-4 inline text-sm"><a href="#">About</a></li>
                <li className = "text-white ml-4 inline text-sm"><a href="#">Blog</a></li>
                <li className = "text-white ml-4 inline text-sm"><a href="#">Contacts</a></li>
                <li className = "text-white ml-4 inline text-sm"><a href="#">Contacts</a></li>
            </ul>

        <div className = "text-white text-5xl transform translate-y-12 translate-x-32">About Us</div>
        <div className = "">
            <ul className = "transform translate-y-12 translate-x-32">
                <li className = "text-white inline ml-2"><a href="#">HOME /</a></li>
                <li className = "text-white inline ml-2"><a href="#">PAGES /</a></li>
                <li className = "text-white inline ml-2"><a href="#">ABOUT US</a></li>
            </ul>
        </div>


        </div>
      
    </div>
  );
}

export default Navbar;
