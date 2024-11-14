import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { RiH1 } from "react-icons/ri";

const News = () => {
  const { data } = useLoaderData();
  const params = useParams();
  console.log(data);

  return (
    <div>
        {
            data.length<1 && <h1 className="h-[290px] text-4xl font-extrabold flex justify-center items-center">This News Not Found</h1>
        }
      {data.map((item) => {
        // Date formatting for each item
        const formattedDate = new Date(
          item.author.published_date
        ).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });

        return (
          <Link to={`/item/${item._id}`}>
            <div
              key={item._id}
              className="card w-full bg-base-100 shadow-lg rounded-lg p-4 mb-4"
            >
              <div className="flex items-center mb-3">
                <img
                  src={item.author.img}
                  alt={item.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <h2 className="text-md font-semibold">{item.author.name}</h2>
                  <p className="text-sm text-gray-500">{formattedDate}</p>
                </div>
                <div className="ml-auto text-gray-500 flex space-x-3">
                  {/* Bookmark and Share Icons */}
                  <button className="btn btn-ghost btn-sm">
                    <FaBookmark />
                  </button>
                  <button className="btn btn-ghost btn-sm">
                    <FaShareAlt />
                  </button>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2">{item.title}</h3>

              <img
                src={item.image_url}
                alt={item.title}
                className="w-full object-cover rounded-lg mb-3"
              />

              <p className="text-sm text-gray-600 mb-2">
                {item.details.slice(0, 150)}...{" "}
                <span className="text-orange-500">Read More</span>
              </p>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <div className="flex text-orange-500">
                    <Rating
                      initialRating={item.rating.number}
                      readonly
                      fullSymbol={<FaStar className="text-orange-500" />}
                      emptySymbol={<FaStar className="text-gray-300" />}
                    />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {item.rating.number}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  {item.total_view} views
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default News;
