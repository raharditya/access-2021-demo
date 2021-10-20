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
import Modal from "react-modal";

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

  const [openModal, setOpenModal] = useState(false);

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

      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        style={{
          overlay: {
            backgroundColor: "#00000060",
          },
        }}
      >
        <div className="container mx-auto">
          <h1 className="text-xl font-bold text-center mb-8">
            Notes about this demo
          </h1>

          <div className="bg-gray-100 p-6 w-2/6 mx-auto rounded-md border mb-6 text-center">
            <p>
              Email: <span className="font-bold">demo@mail.com</span>
            </p>
            <p>
              Pass: <span className="font-bold">123456</span>
            </p>
          </div>

          <p className="mb-4 text-center">
            This is a demo version of a project I made with my freelance team
            called Kognitif for a client. I handled the full-stack development
            of this project.
          </p>
          <p className="mb-4 text-center">
            Due to the nature of this demo, some features had to be removed.
            Below is the detailed information of this feature removal.
          </p>

          <div className="flex bg-gray-100 rounded-md p-6 border">
            <div className="flex-1 mr-4">
              <h2 className="font-bold text-lg mb-2">Preserved Features</h2>
              <ul>
                <li className="list-disc list-inside mb-4">
                  Real-time Database
                  <div className="ml-6">
                    The data in this demo syncs to the database in real time.
                    You can open this demo in multiple browser to see the data
                    update as you change it in one browser.
                  </div>
                </li>
                <li className="list-disc list-inside mb-4">
                  Authentication
                  <div className="ml-6">
                    Authentication still works using Firebase Auth, although
                    there is only one account assigned for this demo.
                  </div>
                </li>
                <li className="list-disc list-inside mb-4">
                  LocalStorage
                  <div className="ml-6">
                    LocalStorage usage for answer data still works in this demo.
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <h2 className="font-bold text-lg mb-2">Removed Features</h2>
              <ul>
                <li className="list-disc list-inside mb-4">
                  NodeJS Backend
                  <div className="ml-6">
                    Everything that uses the NodeJS backend was removed. This
                    includes user creation, questions fetching, and server time
                    fetching for synchronized countdown.
                  </div>
                </li>
                <li className="list-disc list-inside mb-4">
                  Admin dashboard and control
                  <div className="ml-6">
                    The original implementation used an admin dashboard to start
                    and end the session so that every participant will all start
                    at the same time. This is removed from the demo and is
                    replaced with a start button instead.
                  </div>
                </li>
                <li className="list-disc list-inside mb-4">
                  Real questions
                  <div className="ml-6">
                    The questions shown in this demo had been changed since
                    they're not our property to use outside of the main event.
                    The questions consists of 50 questions with 45 multiple
                    choice question and the last 5 is essay question.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-4 text-sm">
            Nb: Please note that this is only intended for laptop and desktop
            screen, and thus might be displayed incorrectly if viewed in smaller
            devices.
          </p>

          <button
            onClick={() => setOpenModal(false)}
            className="py-2 px-6 mt-6 bg-red-600 hover:bg-red-500 transition block mx-auto text-white font-bold rounded-lg"
          >
            Close
          </button>
        </div>
      </Modal>

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
              <button
                onClick={() => setOpenModal(true)}
                className="block mx-auto bg-gray-200 hover:bg-gray-300 transition mt-6 py-3 px-6 rounded-lg font-bold"
              >
                Show Demo Info
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
