import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { auth } from "../firebase";

function Limit() {
  useEffect(() => {
    auth.signOut();
  }, []);

  return (
    <div className="flex min-h-screen justify-center bg-gray-200 m-0 py-10 items-center">
      <div className="flex h-5/6 w-96 flex-col justify-center bg-white shadow-lg items-center px-12 py-4 rounded-xl font-poppins">
        <div className="mx-8 mt-4 mb-8">
          <img src={logo} alt="logo" />
        </div>

        <div className="py-8 text-center font-light text-sm">
          <p className="font-bold">Mohon maaf</p>
          <p className="mt-2">
            Device yang login melebihi jumlah yang diperbolehkan (3 device)
          </p>
        </div>

        <Link
          to="/login"
          className="mt-4 py-2 px-6 bg-green-500 hover:bg-green-400 transition duration-150 rounded-lg font-bold text-white"
        >
          Log in
        </Link>

        <div className="pt-8 pb-4 text-center">
          <p className="text-xs font-light">Powered by: </p>
          <p>KOGNITIF</p>
        </div>
      </div>
    </div>
  );
}

export default Limit;
