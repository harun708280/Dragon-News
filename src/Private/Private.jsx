import React, { useContext } from "react";
import { AuthUserContext } from "../Firebase/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthUserContext);
  console.log(loading);
  const location=useLocation()
//   console.log(location);
  

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
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
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate state={location.pathname} to="/login"></Navigate>
    </div>
  );
};

export default Private;
