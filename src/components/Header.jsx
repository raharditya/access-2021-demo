import React from "react";
import logo from "../assets/logo.png";
import { ReactComponent as User } from "../assets/user.svg";

const Header = (props) => {
  return (
    <nav className="flex justify-between items-center bg-white shadow-lg relative top-0 w-full h-20 px-8">
      <img className="h-full py-4" src={logo} alt="logo" />

      <div className="flex gap-8 items-center">
        <div className="flex items-center">
          <h1 className="font-medium mr-2">{props.team} </h1>
          <User />
        </div>
        <button
          onClick={props.handleLogout}
          className="py-2 px-4 bg-red-500 hover:bg-red-400 transition duration-150 rounded-lg font-bold text-white"
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Header;
