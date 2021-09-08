import React from "react";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <div className="apple">
        <div className="p-4">
          <div className="text-white inline font-bold">
            Lpardo
            <ul className="inline float-right">
              <li className="text-white inline text-sm">
                <a href="#">Home</a>
              </li>
              <li className="text-white ml-4 inline text-sm">
                <a href="#">Pages</a>
              </li>
              <li className="text-white ml-4 inline text-sm underline">
                <a href="#">About</a>
              </li>
              <li className="text-white ml-4 inline text-sm">
                <a href="#">Blog</a>
              </li>
              <li className="text-white ml-4 inline text-sm">
                <a href="#">Contacts</a>
              </li>
              <li className="text-white ml-4 inline text-sm">
                <a href="#">Contacts</a>
              </li>
            </ul>
            <div className="p-9">
              <div className="text-white text-5xl transform translate-y-12 translate-x-32 ">
                About Us
              </div>
              <div className="">
                <ul className="transform translate-y-12 translate-x-32">
                  <li className="text-white inline ml-2">
                    <a href="#">HOME /</a>
                  </li>
                  <li className="text-white inline ml-2">
                    <a href="#">PAGES /</a>
                  </li>
                  <li className="text-white inline ml-2 font-bold">
                    <a href="#">ABOUT US</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
