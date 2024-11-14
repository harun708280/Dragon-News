import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Latest = () => {
  const [tittles, setTitle] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://openapi.programming-hero.com/api/news/category/08`
      );
      const data = await response.json();
      console.log(data.data);
      setTitle(data.data);
    };
    fetchData();
  }, []);
  return ( 
    <div className=" flex bg-base-200 items-center py-3 px-3 mt-4">
      <div className="">
        <h1 className="bg-[#D72050] py-1 px-2 text-white font-semibold">
          Latest
        </h1>
      </div>
      <div className="w-11/12 mx-auto ">
        <Marquee speed={70} pauseOnClick={true} >
          <div className="flex gap-7">
            {tittles.map((title) => (
              <div className="text-lg  space-x-4">
                <Link to={`/item/${title._id}`}> {title.title} </Link>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Latest;
