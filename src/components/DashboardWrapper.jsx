import React from "react";
import logo from "../assets/logo.png";

const DashboardWrapper = (props) => {
  return (
    <div className="flex min-h-screen justify-center bg-gray-200 m-0 py-10 items-center">
      <div className="flex h-5/6 w-96 flex-col justify-center bg-white shadow-lg items-center px-12 py-4 rounded-xl font-poppins">
        <div className="mx-8 mt-4 mb-8">
          <img src={logo} alt="logo" />
        </div>

        {props.isFinished ? (
          <div className="py-8 text-center font-light text-sm">
            <p>Lomba sudah selesai</p>
            <p className="mt-2">
              Hasil dari Prelimenary Round akan diumumkan pada 16 September 2021
            </p>
          </div>
        ) : (
          <>
            <div className="py-8 text-center text-sm">
              <h1 className="font-light">Selamat datang</h1>
              <h2 className="font-medium">{props.team}</h2>
            </div>
            {/* <div className="py-8 text-center font-light text-sm">
              <p>Mohon tunggu...</p>
              <p className="mt-2">
                Perlombaan akan segera dimulai dari pihak panitia
              </p>
            </div> */}
            <button
              className="bg-green-500 font-bold text-white hover:bg-green-400 py-3 px-8 rounded-lg"
              onClick={() => props.handleStart()}
            >
              Mulai
            </button>
          </>
        )}

        <div className="pt-8 pb-4 text-center">
          <p className="text-xs font-light">Powered by: </p>
          <p>KOGNITIF</p>
        </div>

        <button
          onClick={props.handleLogout}
          className="mt-4 py-2 px-6 bg-red-500 hover:bg-red-400 transition duration-150 rounded-lg font-bold text-white"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default DashboardWrapper;
