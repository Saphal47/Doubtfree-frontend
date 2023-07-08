import React from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { renderers } from "./rederers";

const mdParser = new MarkdownIt({
  html: true,
  renderers: renderers,
});

const NewAnswer = ({
  loading1,
  answerTitle,
  answerDetails,
  setAnswerDetails,
  setAnswerTitle,
}) => {
  const handleEditorChange = ({ text }) => {
    setAnswerDetails(text);
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
      <div className="mb-3">
        <label htmlFor="title" className="font-bold form-label">
          Title or Summary
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="e.g. Why do we use #define for declaration?"
          value={answerTitle}
          onChange={(e) => setAnswerTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="details" className="form-label font-semibold">
          Details
        </label>
        <MdEditor
          id="details"
          placeholder="e.g. I didn't understand this part,here is the attached screenshot..."
          value={answerDetails}
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
    </>
  );
};

export default NewAnswer;
