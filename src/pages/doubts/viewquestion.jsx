import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { renderers } from "./rederers";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { Button, Modal, message } from "antd";
import NewAnswer from "./addAns";

const ViewQuestion = () => {
  const mdParser = new MarkdownIt({
    html: true,
    renderers: renderers,
  });
  const { questionID } = useParams();
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const questions = useSelector((state) => state.getdoubts.result?.questions);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answerTitle, setAnswerTitle] = useState("");
  const [answerDetails, setAnswerDetails] = useState("");
  const [loading1, setLoading1] = useState(false);
  const userprofile = useSelector((state) => state.getuser?.result?.result);
  const filteredQuestion = questions?.filter(
    (question) => question._id === questionID
  );
  const question = filteredQuestion.length > 0 ? filteredQuestion[0] : null;
  const [messageApi, contextHolder] = message.useMessage();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const fetchAnswers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/getallans?questionID=${questionID}`
      );
      const fetchedAnswers = response.data.answers;
      setAnswers(fetchedAnswers);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchAnswers();
  }, [questionID]);
  const handleAddAnswer = async (e) => {
    e.preventDefault();
    if (answerTitle.trim() === "" || answerDetails.trim() === "") {
      messageApi.open({
        type: "error",
        content: "Please fill required fields",
      });
      return;
    }
    setLoading1(true);
    try {
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const data = {
        title: answerTitle,
        details: answerDetails,
        user_id: userprofile?._id,
        question: questionID,
      };
      await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/replyAns`, data, {
        headers,
      });
      messageApi.open({
        type: "success",
        content: "Answer has been successfuly added",
      });

      fetchAnswers();
    } catch (error) {
      console.log(error);
      messageApi.open({
        type: "error",
        content: "Error while adding answer",
      });
    }
    setLoading1(false);
    setAnswerTitle("");
    setAnswerDetails("");
    setIsModalOpen(false);
  };
  return (
    <div>
      {contextHolder}
      {question && (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h2 className="text-4xl font-bold mb-2">{question.title}</h2>
          <p className="text-gray-700 mb-2">Posted by: {question.user}</p>
          <MdEditor
            value={question.details}
            renderHTML={(text) => mdParser.render(text)}
            view={{ menu: false, md: false, html: true }}
          />
        </div>
      )}
      <div className="flex justify-between w-full items-end">
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
                Older First
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={showModal}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          style={{ height: "fit-content" }}
        >
          Add Answer
        </button>
      </div>
      <h3 className="text-lg font-bold my-2">Answers:</h3>
      {loading && (
        <>
          <div className="flex w-full justify-center p-5">Loading...</div>
        </>
      )}
      {!loading &&
        answers
          .slice()
          .reverse()
          .map((answer) => (
            <div
              className="bg-white rounded-sm shadow-lg p-4 mb-4 w-full"
              key={answer.id}
            >
              <MdEditor
                value={answer.details}
                renderHTML={(text) => mdParser.render(text)}
                view={{ menu: false, md: false, html: true }}
              />

              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-500 text-sm">
                  Answered by: {answer.user}
                </p>
                <p className="text-gray-500 text-sm">{answer.date}</p>
              </div>
            </div>
          ))}
      <Modal
        title="Add Answer"
        open={isModalOpen}
        onOk={handleAddAnswer}
        onCancel={handleCancel}
        footer={[
          <Button className="bg-gray-50" key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            className="bg-blue-600"
            loading={loading1}
            onClick={handleAddAnswer}
          >
            Submit
          </Button>,
        ]}
      >
        <form onSubmit={handleAddAnswer} className="my-4">
          <NewAnswer
            answerDetails={answerDetails}
            answerTitle={answerTitle}
            loading1={loading1}
            setAnswerDetails={setAnswerDetails}
            setAnswerTitle={setAnswerTitle}
          />
        </form>
      </Modal>
    </div>
  );
};

export default ViewQuestion;
