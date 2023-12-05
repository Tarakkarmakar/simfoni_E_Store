import React, { useState } from "react";
import "./SearchProduct.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
const SearchProduct = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleSort = () => {
    setSort(!sort);
  };

  const toggleFilter = () => {
    setFilter(!filter);
  };
  return (
    <div className="mt-8 text-gray-600">
      <div className="flex   lg:mb-3 mb-6   flex-col sm:flex-row 
       justify-around lg:h-9 md:h-10 h-20 lg:w-6/12 md:w-8/12  w-full bg-blue-40
       ">
       
        <div className="flex lg:w-1/3 md:w-2/4 w-3/4 items-center text-sm  text-center
          ml-4 w-full border border-neutral-400 rounded-md bg-white">
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

        <div className="flex lg:w-2/3 w-full ">
        <div className="flex items-center
         text-sm text-center relative ml-4 lg:w-full sm:w-6/12 border
          border-neutral-400 rounded-md bg-white">
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
        <div className="flex  items-center
         text-sm text-center ml-4  lg:w-full sm:w-6/12 border border-neutral-400 
         rounded-md bg-white">
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

      <div className="flex w-full h-9 lg:mt-15 sm:mt-50 items-center ">
        <div className="flex lg:w-6/12 w-8/12 h-full border-2 bg-white rounded-md justify-between ml-3 ">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent h-100%  px-2 ml-3 no-outline"
          />
          <button className="flex bg-teal-500 px-2 w-2/12 justify-center items-center ">
            <IoSearchOutline className="icon_s" />
          </button>
        </div>

        <div
          className="hidden lg:flex md:flex h-8 w-16 font-medium  ml-2 border-2 border-neutral-500
         rounded-md border-black-500 content-center 
         text-gray-700 text-xs items-center justify-center"
        >
          <p>Upload</p>
        </div>

        <div className="hidden lg:flex md:flex w-6/12 font-medium  justify-center ">
          <div className="flex relative items-center text-sm text-center ml-4 w-4/12 border border-neutral-400 rounded-md bg-white">
            <button
              className="w-full flex items-center justify-between px-4 py-2 focus:outline-none"
              onClick={toggleFilter}
            >
              Filter
              <IoMdArrowDropdown className="h-5 w-5" />
            </button>
            {/* Dropdown content 1 */}
            <div
              className={`absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-none ${
                filter ? "" : "hidden"
              }`}
            >
              {/* Dropdown items */}

              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Filter Items
              </a>
            </div>
          </div>
          <div className="flex relative items-center text-sm text-center ml-4 w-4/12 border border-neutral-400 rounded-md bg-white">
            <button
              className="w-full flex items-center justify-between px-4 py-2 focus:outline-none"
              onClick={toggleSort}
            >
              Sort By
              <IoMdArrowDropdown className="h-5 w-5" />
            </button>
            {/* Dropdown content 1 */}
            <div
              className={`absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-none ${
                sort ? "" : "hidden"
              }`}
            >
              {/* Dropdown items */}

              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            Sort Items
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default SearchProduct;
