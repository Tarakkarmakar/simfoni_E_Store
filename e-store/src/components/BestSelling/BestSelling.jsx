import React from "react";
import th from "../../assets/th.jpeg";
import th1 from "../../assets/th_1.jpeg";
const BestSelling = () => {
  const bestItems = [
    {
      image: th,
      id: 0,
    },
    {
      image: th1,
      id: 1,
    },
    {
      image: th,
      id: 2,
    },
    {
      image: th1,
      id: 3,
    },
 
  ];

  return (
    <div className=" w-10/12 lg:w-full md:w-8/12  mx-auto">
      <div className="my-4">
        <div className="text-center lg:text-left">
          <h5 className="text-xl font-bold">BEST SELLING CATEGORIES</h5>
        </div>
        <div className="flex flex-wrap justify-center mt-4">
          {bestItems.map((res) => (
            <div key={res.id} className="m-2">
              <img src={res.image} alt="" className="w-32 h-32" />
              <h6 className="text-lg">Electronics</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
