import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { auth, firestore } from "../firebase";
import firebase from "firebase/app";
import { UserContext } from "../providers/UserProvider";
import DashboardWrapper from "../components/DashboardWrapper";
import QuizWrapper from "../components/QuizWrapper";
// import { toast } from "react-toastify";
import { DeviceLimitContext } from "../providers/DeviceLimitProvider";
import soal from "../questionsTest";

function Dashboard(props) {
  const user = useContext(UserContext);
  const deviceLimit = useContext(DeviceLimitContext);

  const [control, setControl] = useState({
    isFinished: false,
    isPaused: false,
    isStarted: false,
  });

  function handleFinish() {
    setControl({
      isFinished: true,
      isPaused: false,
      isStarted: false,
    });
  }

  function handleStart() {
    setControl({
      isFinished: false,
      isPaused: false,
      isStarted: true,
    });
  }

  // useEffect(() => {
  //   const unsub = firestore
  //     .collection("control-panel")
  //     .doc("master")
  //     .onSnapshot((doc) => {
  //       const fetchData = doc.data();
  //       console.log("Control received");

  //       setControl(fetchData);
  //     });

  //   return () => {
  //     unsub();
  //   };
  // }, []);

  // const [soal, setSoal] = useState([]);

  // useEffect(() => {
  //   if (control?.isStarted) {
  //     auth.currentUser.getIdToken(true).then((idToken) => {
  //       fetch("https://active-2021-backend.herokuapp.com/api/soal", {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json, text/plain, */*",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           token: idToken,
  //         }),
  //       })
  //         .then((res) => {
  //           console.log("Questions received");

  //           if (res.status === 200) {
  //             console.log("Questions succeeded!");
  //             return res.json();
  //           } else {
  //             console.log("Questions failed!");
  //             toast.error("Server: Pengambilan soal gagal!");
  //           }
  //         })
  //         .then((json) => {
  //           const combined = json.multiple;

  //           Array.prototype.push.apply(combined, json.essays);
  //           setSoal(combined);
  //         })
  //         .catch((err) => {
  //           console.error(`Questions: ${err}`);
  //           toast.error("Terjadi kesalahan pengambilan soal");
  //         });
  //     });
  //   }
  // }, [control]);

  const [userData, setUserData] = useState({});

  const dbRef = firestore.collection("peserta").doc(user?.uid);

  useEffect(() => {
    const unsub = firestore
      .collection("peserta")
      .doc(user?.uid)
      .onSnapshot((doc) => {
        const fetchData = doc.data();
        setUserData(fetchData);
      });

    return () => {
      unsub();
    };
  }, [user]);

  function handleLogout() {
    console.log("Logging out");
    dbRef
      .update({
        connectedDevices: firebase.firestore.FieldValue.arrayRemove(
          props.deviceId
        ),
      })
      .then(() => {
        console.log("UID deleted!");
        auth.signOut();
      });
  }

  return user ? (
    <div className="">
      {!deviceLimit.isAllowed ? (
        <Redirect to="/limit" />
      ) : control?.isStarted ? (
        <QuizWrapper
          questions={soal}
          userData={userData}
          handleLogout={handleLogout}
          control={control}
          setControl={setControl}
          handleFinish={handleFinish}
        />
      ) : (
        <DashboardWrapper
          team={userData?.teamName}
          isFinished={control?.isFinished}
          userData={userData}
          handleLogout={handleLogout}
          control={control}
          setControl={setControl}
          handleStart={handleStart}
        />
      )}
    </div>
  ) : (
    <Redirect to="/login"></Redirect>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
