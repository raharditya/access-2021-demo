import React from "react";
import { ReactComponent as Trash } from "../assets/trash.svg";
import { ReactComponent as QuestionLogo } from "../assets/question.svg";

function Question(props) {
  const {
    questions,
    currentQuestion,
    userData,
    handleQuizChange,
    handleEssayChange,
    handleQuizPrev,
    handleQuizNext,
    handleQuizRemove,
    handleQuizUnsure,
    clientUnsure,
  } = props;

  const currentId = questions[currentQuestion - 1]?.id;

  return (
    <>
      {props.questions.length === 0 ? (
        <div className="flex justify-center items-center h-80">
          <div className="lds-ring transform scale-150">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="font-bold py-4">Pertanyaan ({currentQuestion})</h1>
          {questions[currentQuestion - 1]?.questionimage !== undefined ? (
            <div>
              <img
                src={questions[currentQuestion - 1]?.questionimage}
                alt=""
                className="px-2 py-2 w-2/4 mx-auto"
              />
              <p className="font-normal py-4 text-justify">
                {questions[currentQuestion - 1]?.question}
              </p>
            </div>
          ) : (
            <p className="font-normal py-4 text-justify">
              {questions[currentQuestion - 1]?.question}
            </p>
          )}
          <h1 className="font-bold py-4">Jawaban</h1>
          <form>
            {questions[currentQuestion - 1]?.isEssay !== undefined ? (
              <div className="flex flex-col">
                <input
                  type="number"
                  name="jawaban"
                  value={userData?.essays[currentId] || ""}
                  onChange={(e) => handleEssayChange(currentId, e.target.value)}
                  className="px-4 py-4 border border-gray-500 rounded-xl focus:outline-none"
                ></input>
                <p className="py-4">
                  Note : Format pengisian tanpa tanda baca "." dan "," contoh:
                  999999
                </p>
              </div>
            ) : (
              <div className="flex flex-col">
                {questions[currentQuestion - 1]?.options?.map(
                  (option, index) => (
                    <div
                      className={`flex flex-row w-4/5 px-6 items-center bg-white shadow-lg rounded-lg border mb-4 relative transition duration-150 ${
                        userData?.answers?.[currentId] === option.option
                          ? ` optionSelected ${
                              clientUnsure[currentId]
                                ? "bg-yellow-300 hover:bg-yellow-400"
                                : "bg-green-300 hover:bg-green-400"
                            }`
                          : "hover:bg-gray-100"
                      }`}
                      key={`opt-${questions[currentQuestion - 1].id}-${index}`}
                    >
                      <input
                        name={questions[currentQuestion - 1].id}
                        type="radio"
                        value={option.option}
                        id={option.option}
                        checked={
                          userData?.answers?.[currentId] === option.option
                        }
                        onChange={(e) =>
                          handleQuizChange(currentId, e.target.value)
                        }
                        className="cursor-pointer h-4 w-4 border-2 border-gray-700 rounded-full flex-shrink-0"
                      ></input>
                      <label
                        className={`cursor-pointer pl-4 block flex-grow h-full py-4 ${
                          userData?.answers?.[currentId] === option.option
                            ? "font-bold"
                            : ""
                        }`}
                        htmlFor={option.option}
                        dangerouslySetInnerHTML={{ __html: option.text }}
                      ></label>

                      <div
                        className={`${
                          userData?.answers?.[currentId] === option.option
                            ? "absolute -right-28 flex gap-4"
                            : "hidden"
                        }`}
                      >
                        <div
                          className="rounded-full w-10 h-10 shadow-lg cursor-pointer flex items-center justify-center bg-red-500 hover:bg-red-600 transition duration-150"
                          onClick={() => handleQuizRemove(currentId)}
                        >
                          <Trash />
                        </div>
                        <div
                          className={`rounded-full w-10 h-10 shadow-lg cursor-pointer flex items-center justify-center transition duration-150 ${
                            clientUnsure[currentId]
                              ? "bg-yellow-400 hover:bg-yellow-500 border-4 border-yellow-600"
                              : "bg-yellow-500 hover:bg-yellow-400 border-0"
                          }`}
                          onClick={() => handleQuizUnsure(currentId)}
                        >
                          <QuestionLogo />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </form>

          <div className="flex justify-between mt-10">
            <button
              onClick={handleQuizPrev}
              value=""
              className="py-3 px-8 rounded-md bg-gray-400 hover:bg-gray-500 transition duration-150 text-white 2xl:w-48 l:w-40"
            >
              Sebelumnya
            </button>
            <button
              type="button"
              onClick={handleQuizNext}
              value=""
              className="py-3 px-8 rounded-md bg-green-500 hover:bg-green-600 transition duration-150 text-white 2xl:w-48 l:w-40"
            >
              Selanjutnya
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Question;
