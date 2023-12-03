import React, { useState } from 'react'
import "./SearchProduct.css"
import { IoMdArrowDropdown } from "react-icons/io";
const SearchProduct = () => {

    const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <div className='mt-8 '>
      

      <div className="flex  justify-between h-9 w-full lg:w-6/12 lg:flex-row   sm:flex-col">
  {/* Dropdown 1: Product Organization */}
 <div className=" flex items-center text-sm  text-center relative ml-4 w-full border border-neutral-400 rounded-md bg-white">
        <button
          className="w-full flex items-center
            justify-between px-4 py-2 focus:outline-none"
          onClick={toggleDropdown1}
        >
     
      Purchase Organization
  
          <IoMdArrowDropdown className="h-5 w-5" />
        </button>
        {/* Dropdown content 1 */}
        <div
          className={`absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-none ${
            isOpen1 ? "" : "hidden"
          }`}
        >
          {/* Dropdown items */}

          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            Dropdown Item 1
          </a>
        </div>
      </div>
      <div className="flex items-center text-sm text-center relative ml-4 w-full border border-neutral-400 rounded-md bg-white">
        <button
          className="w-full flex items-center justify-between px-4 py-2 focus:outline-none"
          onClick={toggleDropdown2}
        >
         Company
          <IoMdArrowDropdown className="h-5 w-5" />
        </button>
        {/* Dropdown content 1 */}
        <div
          className={`absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-none ${
            isOpen2 ? "" : "hidden"
          }`}
        >
          {/* Dropdown items */}
          {/* Example dropdown item */}
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            Dropdown Item 2
          </a>
          {/* Add more dropdown items here */}
        </div>
      </div>
      <div className="relative items-center text-sm text-center ml-4 w-full border border-neutral-400 rounded-md bg-white">
        <button
          className="w-full flex items-center justify-between px-4 py-2 focus:outline-none"
          onClick={toggleDropdown3}
        >
         Plant
          <IoMdArrowDropdown className="h-5 w-5" />
        </button>
        {/* Dropdown content 1 */}
        <div
          className={`absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-none ${
            isOpen3 ? "" : "hidden"
          }`}
        >
          {/* Dropdown items */}
      
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            Dropdown Item 3
          </a>
         
        </div>
      </div>
</div>

    </div>
  )
}

export default SearchProduct
