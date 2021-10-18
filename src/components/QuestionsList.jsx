import React from "react";

export default function QuestionsList(props) {
  const multiple = props.userData?.answers;
  const essays = props.userData?.essays;

  return (
    <div className="grid grid-cols-5">
      {props.questions.length === 0 ? (
        <div className="flex col-span-5 w-full justify-center items-center h-40">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <>
          {props.paginatedQuestions.map((question, index) => {
            return (
              <div
                className={`cursor-pointer flex justify-center items-center w-14 h-14 mx-2 mt-2 px-2 py-2 rounded-md transition duration-150 ${
                  props.pageNumber - 1 === props.indexOfFirstQuestion + index
                    ? "bg-gray-400 "
                    : props.clientUnsure[question.id]
                    ? "bg-yellow-300 hover:bg-yellow-400"
                    : multiple?.[question.id] || essays?.[question.id]
                    ? "bg-green-300 hover:bg-green-400"
                    : "bg-gray-300 hover:bg-gray-400"
                } `}
                onClick={() =>
                  props.setPageNumber(props.indexOfFirstQuestion + index + 1)
                }
                key={`ql-${index}`}
              >
                {props.indexOfFirstQuestion + index + 1}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
