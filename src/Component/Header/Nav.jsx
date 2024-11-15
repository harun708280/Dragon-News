import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import users from "./user.png";
import { AuthUserContext } from "../../Firebase/AuthContext";
const Nav = () => {
  const { user,logout } = useContext(AuthUserContext);
  return (
    <div className="flex justify-between items-center my-7  mx-auto">
      <div className=""></div>
      <div className="space-x-6 *:text-gray-500">
        <NavLink to="/">Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Career</NavLink>
      </div>
      {user ? (
        <div className="flex items-center gap-3">
          <img className="h-10 w-10 rounded-full" src={user?.photoURL || users} alt="" />
          
            <button onClick={logout} className="bg-black text-white py-1 px-4">LogOut</button>
         
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <img src={user?.photoURL || users} alt="" />
          <Link to="/login">
            <button className="bg-black text-white py-1 px-4">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
