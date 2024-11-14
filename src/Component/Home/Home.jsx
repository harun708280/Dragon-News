import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Left from "./Left";
import Main from "./Main";
import Right from "./Right";
import RightSite from "./RightSite";

const Home = () => {
  const location = useLocation();
  return (
    <div className="">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Left></Left>
        </div>
        <div className="col-span-7">
          <Outlet></Outlet>
        </div>
        <div className="col-span-3">
          <RightSite></RightSite>
        </div>
      </div>
    </div>
  );
};

export default Home;
