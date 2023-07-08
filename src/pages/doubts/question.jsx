import React from "react";
import { Link } from "react-router-dom";
import { renderers } from "./rederers";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

const QuestionCard = ({ question }) => {
  const { user, title, details, date, _id } = question;
  const mdParser = new MarkdownIt({
    html: true,
    renderers: renderers,
  });
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-full">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">{title}</h2>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <p className="text-gray-700 mb-2">Posted by: {user}</p>

      <MdEditor
        value={details}
        renderHTML={(text) => {
          const modifiedText = text.replace(/\+\+(.+?)\+\+/g, "<u>$1</u>");
          return mdParser.render(modifiedText);
        }}
        view={{ menu: false, md: false, html: true }}
      />
      <p className="text-gray-500 text-sm mt-2">Question ID: {_id}</p>
      <div className="pt-3">
        <Link
          to={`view/${_id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          View Question
        </Link>
      </div>
    </div>
  );
};

export default QuestionCard;
