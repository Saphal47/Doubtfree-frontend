import React from "react";
import { Link } from "react-router-dom";
import QueryBar from "../components/QueryBar";
import askNewQ from "./NewQ";
import QuestionCard from "./doubts/question";
import { useSelector } from "react-redux";
const QnA = () => {
  const getdoubts = useSelector((state) => state.getdoubts).result;
  return (
    <div>
      <QueryBar />
      <div className="dropdown mt-2">
        {/* <Link className="btn btn-secondary dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </Link> */}
        <span className="mt-2">
          <div>Filters:</div>
        </span>
        <button
          type="submit"
          className="bg-white bg-clip-border dropdown-toggle border-2  text-black py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort By..
        </button>

        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="#">
              Newest First
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Oldest First
            </Link>
          </li>
        </ul>
      </div>
      <section className="mt-3">
        <h2 className="mb-6 mt-2 text-2xl font-bold tracking-tight  text-black-700 lg:mb-8 lg:text-2xl">
          All Questions asked:
        </h2>
      </section>
      <section className="mt-3 flex w-full justify-end">
        <Link
          to="/dashboard/newq"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Ask a New Question
        </Link>
      </section>
      <div className="flex justify-start align-top flex-wrap my-5 gap-3">
        {getdoubts &&
          getdoubts.questions
            ?.slice()
            .reverse()
            .map((question, index) => {
              return <QuestionCard key={index} question={question} />;
            })}
      </div>
    </div>
  );
};

export default QnA;
