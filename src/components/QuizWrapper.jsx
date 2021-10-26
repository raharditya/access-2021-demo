import React, { useState, useRef, useContext, useMemo } from "react";
import Header from "./Header";
import Question from "./Question";
import Countdown, { zeroPad } from "react-countdown";

import QuestionsList from "./QuestionsList";
import { firestore } from "../firebase";
import { UserContext } from "../providers/UserProvider";
import useLocalStorage from "../useLocalStorage";
import { ReactComponent as Alarm } from "../assets/alarm.svg";

const QuizWrapper = (props) => {
  const countdownRef = useRef(null);
  const user = useContext(UserContext);

  const [currentQuestion, setCurrentQuestion] = useState(1);

  const { userData } = props;

  let questionsNew = props.questions;

  const dbRef = firestore.collection("peserta").doc(user?.uid);

  const [questionsListPage, setQuestionsListPage] = useState(1);
  const questionsPerPage = 25;

  const indexOfLastQuestion = questionsListPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const paginatedQuestions = questionsNew.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(questionsNew.length / questionsPerPage); i++) {
    pageNumbers.push(i);
  }

  const countdownRenderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      props.handleFinish();
      return <span>Selesai !</span>;
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      );
    }
  };
  // console.log(new Date(props.serverTimer?.serverNow))

  // useEffect(() => {
  //   countdownRef.current.start();
  // }, [props.control]);

  const [clientUnsure, setClientUnsure] = useLocalStorage("clientUnsure", {});

  function handleQuizUnsure(id) {
    if (clientUnsure[id] === true) {
      setClientUnsure({ ...clientUnsure, [id]: false });
    } else {
      setClientUnsure({ ...clientUnsure, [id]: true });
    }
  }

  function handleQuizChange(id, answer) {
    console.log(`Updating answer: ${id}, ${answer}`);

    const updateItem = {};
    updateItem[`answers.${id}`] = answer;
    dbRef.update(updateItem);
  }

  function handleEssayChange(id, answer) {
    console.log(`Updating answer: ${id}, ${answer}`);

    const updateItem = {};
    updateItem[`essays.${id}`] = answer;
    dbRef.update(updateItem);
  }

  function handleQuizRemove(id) {
    console.log(`Deleting answer: ${id}`);

    const updateItem = {};
    updateItem[`answers.${id}`] = "";

    if (clientUnsure[id] === true) {
      setClientUnsure({ ...clientUnsure, [id]: false });
    }

    dbRef.update(updateItem);
  }

  function handleQuizNext() {
    if (currentQuestion < 50) {
      setCurrentQuestion(currentQuestion + 1);

      if (currentQuestion + 1 <= 25) {
        setQuestionsListPage(1);
      }
      if (currentQuestion + 1 > 25 && currentQuestion <= 50) {
        setQuestionsListPage(2);
      }
    }
  }

  function handleQuizPrev() {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);

      if (currentQuestion - 1 <= 25) {
        setQuestionsListPage(1);
      }
      if (currentQuestion - 1 > 25 && currentQuestion <= 50) {
        setQuestionsListPage(2);
      }
    }
  }

  const memoedTimer = useMemo(() => Date.now() + 300000, []);

  return (
    <div className={` bg-gray-200`}>
      <div>
        <Header team={userData.teamName} handleLogout={props.handleLogout} />

        <div className="flex gap-1 ">
          <div className="flex-grow mx-3 bg-white">
            <div className="flex flex-row items-center justify-between px-8 py-8 bg-gray-200">
              <h1 className="font-medium">Prelimenary Round</h1>
              <div className="inline-flex items-center">
                <Alarm />
                <p className="font-medium">
                  <Countdown
                    date={memoedTimer} //ms
                    // now={() => {
                    //   let now = new Date().valueOf();
                    //   now += 10000;

                    //   return new Date(now);
                    //   // if (props.serverTimer) {
                    //   //   return new Date(props.serverTimer?.serverNow);
                    //   // }
                    // }}
                    renderer={countdownRenderer}
                    ref={countdownRef}
                  />
                </p>
              </div>
            </div>
            <div className="px-20">
              <div className="flex flex-col py-12 pb-10">
                <Question
                  questions={questionsNew}
                  currentQuestion={currentQuestion}
                  userData={userData}
                  handleQuizChange={handleQuizChange}
                  handleEssayChange={handleEssayChange}
                  handleQuizPrev={handleQuizPrev}
                  handleQuizNext={handleQuizNext}
                  handleQuizRemove={handleQuizRemove}
                  handleQuizUnsure={handleQuizUnsure}
                  clientUnsure={clientUnsure}
                />
              </div>
              <small className="block mt-20 text-gray-500">
                UID: {user.uid}
              </small>
            </div>
          </div>

          <div className="max-w-sm min-h-screen mx-2 bg-white flex-shrink-0">
            <div className="items-center px-4 py-4">
              <h1 className="font-bold pt-10 pb-12">Daftar Pertanyaan (50)</h1>
              <div className="flex items-center justify-center">
                <QuestionsList
                  questions={questionsNew}
                  pageNumber={currentQuestion}
                  setPageNumber={setCurrentQuestion}
                  paginatedQuestions={paginatedQuestions}
                  currentQuestionsPage={questionsListPage}
                  indexOfFirstQuestion={indexOfFirstQuestion}
                  userData={userData}
                  clientUnsure={clientUnsure}
                />
              </div>
              <div className="flex items-center justify-between py-8 px-8 mx-auto">
                <button
                  className="mr-12 font-bold flex-1"
                  onClick={() => {
                    if (questionsListPage > 1) {
                      setQuestionsListPage(questionsListPage - 1);
                    }
                  }}
                >
                  {"Kembali"}
                </button>
                <ul className="flex-1 flex items-center justify-center w-full">
                  <li
                    className={`${
                      questionsListPage === 1 ? "font-bold" : ""
                    } mr-2 cursor-pointer`}
                    onClick={() => setQuestionsListPage(1)}
                  >
                    1
                  </li>
                  <li
                    className={`${
                      questionsListPage === 2 ? "font-bold" : ""
                    } mr-2 cursor-pointer`}
                    onClick={() => setQuestionsListPage(2)}
                  >
                    2
                  </li>
                </ul>
                <button
                  className="ml-12 font-bold flex-1"
                  onClick={() => {
                    if (questionsListPage < 2) {
                      setQuestionsListPage(questionsListPage + 1);
                    }
                  }}
                >
                  {"Lanjut"}
                </button>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-x-6 justify-center m-auto ">
                <div className="flex flex-row items-center pt-4">
                  <div className="h-2 w-8 rounded-sm bg-green-300 mr-4"></div>
                  <p className="text-sm">Sudah Dijawab</p>
                </div>
                <div className="flex flex-row items-center pt-4">
                  <div className="h-2 w-8 rounded-sm bg-yellow-300 mr-4"></div>
                  <p className="text-sm">Ragu-ragu</p>
                </div>
                <div className="flex flex-row items-center pt-4">
                  <div className="h-2 w-8 rounded-sm bg-gray-300 mr-4"></div>
                  <p className="text-sm">Belum Dijawab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizWrapper;
