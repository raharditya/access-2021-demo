import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { auth, firestore } from "../firebase";
import firebase from "firebase/app";
import { UserContext } from "../providers/UserProvider";
import BackgroundCover from "../assets/login-bg-web.jpg";
import BackgroundDecor from "../assets/login-decor.svg";
import LogoActive from "../assets/logo.png";
import { ReactComponent as LogoKognitif } from "../assets/kognitif1.svg";
import * as Unicons from "@iconscout/react-unicons";
import { toast } from "react-toastify";
import { DeviceLimitContext } from "../providers/DeviceLimitProvider";

function Login(props) {
  const user = useContext(UserContext);
  const deviceLimit = useContext(DeviceLimitContext);

  const [loginForm, setLoginForm] = useState({ email: "", pass: "" });
  const [loginLoading, setLoginLoading] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    setLoginLoading(true);

    auth
      .signInWithEmailAndPassword(loginForm.email, loginForm.pass)
      .then((user) => {
        setLoginLoading(false);

        console.log(user.user.uid);

        // deviceLimit.setIsAllowed(true);

        const userDataRef = firestore.collection("peserta").doc(user.user.uid);

        userDataRef
          .get()
          .then((res) => res.data())
          .then((data) => {
            const filtered = data?.connectedDevices?.filter(
              (id) => id === props.deviceId
            );

            if (filtered?.length > 0) {
              console.log("Limit: Already exist");
              return deviceLimit.setIsAllowed(true);
            }

            if (filtered?.length === 0 && data?.connectedDevices?.length < 3) {
              console.log("Limit: Pushing uid");
              userDataRef.update({
                connectedDevices: firebase.firestore.FieldValue.arrayUnion(
                  props.deviceId
                ),
              });

              return deviceLimit.setIsAllowed(true);
            } else {
              console.log("Limit: Not allowed");
              return deviceLimit.setIsAllowed(false);
            }
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message, {
          position: "bottom-right",
        });
        setLoginLoading(false);
      });
  }

  return user ? (
    <Redirect to="/dashboard" />
  ) : (
    <div
      className="min-h-screen flex justify-end"
      style={{
        backgroundImage: `url(${BackgroundCover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src={BackgroundDecor}
        alt="bg-decor"
        className="fixed z-10 h-screen top-0 left-0"
      />
      <h1 className="fixed z-10 font-poppins text-7xl font-semibold text-white bottom-12 left-1/4 opacity-10">
        Preliminary Round
      </h1>

      <div
        className="z-20  bg-white px-10 py-10 rounded-tl-6 flex flex-col right-0 shadow-xl items-center justify-center"
        style={{ maxWidth: 400 }}
      >
        <div className="">
          <img src={LogoActive} alt="logo-active" className="mb-12" />
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-xl mb-6 font-poppins text-gray-700">
              Silahkan Login
            </h1>

            <form className="w-full font-poppins">
              <div className="flex flex-row items-center mb-10">
                <Unicons.UilUserCircle
                  size="35"
                  color="rgb(22,48,60,0.9)"
                  className="mr-4"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border-b-2 border-gray-500 py-2 px-4 w-full text-gray-700 focus:outline-none focus:border-gray-700 transition duration-200"
                  value={loginForm.email}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, email: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-row">
                <Unicons.UilPadlock
                  size="35"
                  color="rgb(22,48,60,0.9)"
                  className="mr-4"
                />
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border-b-2 border-gray-500 py-2 px-4 w-full text-gray-700 focus:outline-none focus:border-gray-700 transition duration-200"
                  value={loginForm.pass}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, pass: e.target.value })
                  }
                />
              </div>

              <button
                className="relative block mx-auto py-2 mt-14 bg-gray-700 group hover:bg-gray-300 rounded-lg shadow-lg text-white hover:text-gray-800 font-semibold transition duration-200 focus:outline-none"
                onClick={handleLogin}
              >
                <div className="inline-flex gap-2 items-center px-8">
                  Masuk
                  <Unicons.UilArrowRight
                    size="30"
                    className="group-hover:translate-x-8"
                  />
                </div>
                <div
                  className={`absolute top-1 -right-14 ${
                    loginLoading ? "block" : "hidden"
                  }`}
                >
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center mt-16">
            <h1 className="text-s text-gray-500 font-light font-poppins">
              Powered by :{" "}
            </h1>
            <a href="https://kognitif.id" className="mt-4">
              <LogoKognitif />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
