import React from "react";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div >
        <div className="apple">


            <p className = "text-white inline">Lpardo</p>
            <ul className = "float-right">
                <li className = "text-white inline"><a href="#">Home</a></li>
                <li className = "text-white ml-4 inline"><a href="#">Pages</a></li>
                <li className = "text-white ml-4 inline"><a href="#">About</a></li>
                <li className = "text-white ml-4 inline"><a href="#">Blog</a></li>
                <li className = "text-white ml-4 inline"><a href="#">Contacts</a></li>
                <li className = "text-white ml-4 inline"><a href="#">Contacts</a></li>
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
