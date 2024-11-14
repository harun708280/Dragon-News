import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import classPng from "./class.png";
import swimming from "./swimming.png";
import playground from "./playground.png";
import video from './What.mp4'
const RightSite = () => {
  return (
    <div>
      <div className="w-full">
        <h1 className="text-xl font-bold">Login With </h1>
        <div className="space-y-3 mt-3">
          <button className="w-full flex items-center justify-center  border-2 p-1 rounded-lg border-blue-600 text-blue-600 gap-4 hover:bg-blue-600 hover:text-white">
            <FaGoogle></FaGoogle> Login With Google
          </button>
          <button className="w-full flex items-center justify-center border-2  border-black p-1 rounded-lg hover:bg-black hover:text-white">
            <FaGithub></FaGithub> Login With Github
          </button>
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-lg font-bold">Find Us On</h1>
        <div className="">
          <div className="join join-vertical w-full *:justify-start *:text-base *:text-gray-500">
            <button className="btn join-item">
              <span className="text-blue-700">
                <FaFacebook></FaFacebook>
              </span>{" "}
              Facebook
            </button>
            <button className="btn join-item">
              <span className="text-blue-500">
                <FaTwitter></FaTwitter>
              </span>
              Twitter
            </button>
            <button className="btn join-item">
              <span className="text-orange-600">
                <FaInstagram></FaInstagram>
              </span>
              Instagram
            </button>
          </div>
        </div>
      </div>
      <div className="px-2 py-7 bg-[#F3F3F3]">
        <h1 className="text-2xl font-bold">Q-Zone</h1>
        <div className="">
          <img className="w-full" src={swimming} alt="" />
        </div>
        <div className="">
          <img className="w-full" src={classPng} alt="" />
        </div>
        <div className="">
          <img className="w-full" src={playground} alt="" />
        </div>
      </div>
      <div className="">
        <div className="my-12 py-2 px-2">
          <video controls className="w-full h-[500px] object-cover ">
            <source src={video} type="video/mp4">
            
            </source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default RightSite;
