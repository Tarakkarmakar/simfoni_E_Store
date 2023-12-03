import React from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import lion from "../../assets/Lion-Avatar-icon.png"
const Navbar = () => {
  return (
    <div className="bg-white-300 flex flex-row justify-between h-14  border bottom-2">
      <div className="flex lg:basis-5/12 sm:basis-2/12 md:basis-2/12 ">
        <ul className="flex text-gray-700 font-semibold p-4 items-center list-none">
          <li className="block">
            <RxHamburgerMenu />
          </li>

          <li className="hidden lg:flex items-center ml-1">
            <img
            className="h-full w-20"
              src="https://simfoni.com/wp-content/uploads/2021/03/Artboard-1-2.png"
              alt="logo"
            />
          </li>

          <li className="hidden lg:flex items-center ml-4">Catalog</li>

          <li className="hidden lg:flex items-center ml-4">Buydesk</li>

          <li className="hidden lg:flex items-center ml-4">
            <div className="flex items-center">
              <div>History</div>
              <div className="ml-1">
                <IoMdArrowDropdown />
              </div>
            </div>
          </li>

          <li className="hidden lg:flex items-center ml-4">Dashboard</li>
        </ul>
      </div>

      <div className="flex lg:basis-6/12  md:basis-9/12 sm:basis-10/12 items-center">

        <div className="flex ">
           <div className=" hidden 
        lg:flex border border-neutral-400  rounded-md bg-white w-56 ml-2  h-6 ">
          <div className="flex h-full items-center bg-transparent right-1 text-sm ml-2">
            <select className="bg-transparent appearance-none border-none py-1">
              <option value="PO">Po</option>
              <option value="SO">So</option>
            </select>
            <div className="relative ml-3">
              <IoMdArrowDropdown className="absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
          </div>

          <div className=" h-full w-4/6 ml-1 border-l-2 border-grey-200">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent h-100%  px-2 no-outline"
            />
          </div>

          <div>
            <button className="bg-transparent rounded px-2">
              <IoSearchOutline />
            </button>
          </div>
        </div>
        <div className="sm:hidden lg:flex h-7 w-10  ml-2 border-2 
         rounded-md border-blue-300 content-center 
         text-gray-700 text-xs items-center justify-center">
<p>Help</p>
        </div>
        </div>
       

     <div className="flex lg:w-8/12  sm:w-full h-6 ml-6 mr-2">
    <div className="w-5/12 h-full flex items-center">
  <ul className="w-full h-full flex justify-between p-0">
    <li className="flex-1 flex justify-center items-center"><IoWalletOutline className="icon" /></li>
    <li className="flex-1 flex justify-center items-center"><IoMdHeartEmpty className="icon" /></li>
    <li className="flex-1 flex justify-center items-center">< IoCartOutline className="icon" /></li>
    <li className="flex-1 flex justify-center items-center"><FaRegBell className="icon" /></li>
  </ul>
</div>

 <div className=" w-5/12 h-full flex items-center ml-5 relative">
  <div className=" flex rounded-full border-2 border-grey overflow-hidden bg-green-300
   w-3/12 h-9 flex-shrink-0 items-center justify-center" >
    <img className="w-10/12 h-10/12 object-cover" src={lion} alt="" />
    </div>
  <p className="ml-2">Lion King</p>
  <button className="absolute right-0 mr-2 p-2">
  <IoMdArrowDropdown />
  </button>
</div>


     </div>
      </div>
    </div>
  );
};

export default Navbar;
