import React from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Left from "./Left";
import Main from "./Main";

import RightSite from "./RightSite";
import { CirclesWithBar } from "react-loader-spinner";

const Home = () => {
  const location = useLocation();
  const navigation=useNavigation()
  return (
    <div className="">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Left></Left>
        </div>
        <div className="col-span-7">
         {
          navigation.state==='loading'? <div className="flex justify-center items-center min-h-screen">
          <CirclesWithBar
          height="100"
          width="100"
          color="#403F3F"
          outerCircleColor="#403F3F"
          innerCircleColor="#403F3F"
          barColor="#403F3F"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        ></CirclesWithBar>
        </div>:
          <Outlet></Outlet>
         }
        </div>
        <div className="col-span-3">
          <RightSite></RightSite>
        </div>
      </div>
    </div>
  );
};

export default Home;
