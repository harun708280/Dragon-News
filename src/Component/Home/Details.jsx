import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useLoaderData, useNavigate, useRouteLoaderData } from "react-router-dom";
import RightSite from "./RightSite";

const Details = () => {
  const { data } = useLoaderData();
  console.log(data);
  const navigate=useNavigate()

  return (
    <div>
      <div className="grid grid-cols-12 gap-12 mb-20">
        <div className="col-span-9">
          {data.map((data) => (
            <div className="space-y-3 border p-7">
              <img className="w-full h-[411px]" src={data.image_url} alt="" />
              <h1 className="text-3xl w-10/12 font-medium">{data.title}</h1>
              <p>{data.details}</p>
              <button onClick={()=>navigate(`/category/${data.category_id}`)} className="bg-[#D72050] flex items-center py-2 px-7 space-x-3 text-white">
                <span>
                  <FaArrowLeftLong></FaArrowLeftLong>
                </span>{" "}
                <span>All news in this category</span>
              </button>
            </div>
          ))}
        </div>
        <div className="col-span-3">
          <RightSite></RightSite>
        </div>
      </div>
    </div>
  );
};

export default Details;
