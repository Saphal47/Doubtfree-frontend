import React, { useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { Link } from "react-router-dom";

import { ArrowLeftOutlined } from "@ant-design/icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GetDoubtsService } from "../services/doubts/get";
import { renderers } from "./doubts/rederers";
import { message } from "antd";

const mdParser = new MarkdownIt({
  html: true,
  renderers: renderers,
});

const NewQ = () => {
  const dispatch = useDispatch();
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDetails, setQuestionDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const userprofile = useSelector((state) => state.getuser?.result?.result);
  const [messageApi, contextHolder] = message.useMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (questionTitle.trim() === "" || questionDetails.trim() === "") {
      messageApi.open({
        type: "error",
        content: "Please fill required field first",
      });
      return;
    }
    setLoading(true);
    try {
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const data = {
        title: questionTitle,
        details: questionDetails,
        user_id: userprofile?._id,
      };
      const response = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/Askquestions`,
        data,
        { headers }
      );
      messageApi.open({
        type: "success",
        content: "Question has been added",
      });
      GetDoubtsService(dispatch);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      messageApi.open({
        type: "error",
        content: "Server Error",
      });
    }
    setLoading(false);
    setQuestionTitle("");
    setQuestionDetails("");
  };

  const handleEditorChange = ({ text }) => {
    setQuestionDetails(text);
  };
  const handleImageUpload = async (file) => {
    try {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          const base64String = reader.result;
          resolve(base64String);
        };

        reader.onerror = (error) => {
          reject(error);
        };

        reader.readAsDataURL(file);
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  return (
    <>
      {contextHolder}
      <form onSubmit={handleSubmit} className="my-4">
        <header className="font-extrabold text-center mb-2 text-3xl">
          Ask a New Question
        </header>
        <div className="mb-3">
          <label htmlFor="title" className="font-bold form-label">
            Title or Summary
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="e.g. Why do we use #define for declaration?"
            value={questionTitle}
            onChange={(e) => setQuestionTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="details" className="form-label font-semibold">
            Details
          </label>
          <MdEditor
            id="details"
            placeholder="e.g. I didn't understand this part,here is the attached screenshot..."
            value={questionDetails}
            style={{ height: "200px" }}
            renderHTML={(text) => {
              const modifiedText = text.replace(/\+\+(.+?)\+\+/g, "<u>$1</u>");
              return mdParser.render(modifiedText);
            }}
            onChange={handleEditorChange}
            onImageUpload={handleImageUpload}
            view={{
              markdown: true,
              html: false,
              fullScreen: false,
              hideMenu: false,
            }}
            config={{
              view: {
                menu: true,
                md: true,
                html: false,
              },
              canView: {
                menu: true,
                md: true,
                html: true,
                fullScreen: true,
                hideMenu: true,
              },
              markdownClass: "markdown-body",
            }}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
        >
          {loading ? "Loading.." : "Publish"}
        </button>
        <section className="mt-4">
          <ArrowLeftOutlined className="mr-1" />
          <Link to="/dashboard/qna" className="font-bold">
            Back to All Questions
          </Link>
        </section>
      </form>
    </>
  );
};

export default NewQ;
