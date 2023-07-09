import React, { useState } from "react";
import SelectMenu from "../components/Select";
import TextArea from "antd/es/input/TextArea";

import CodeOutput from "../components/CodeOutput";

const options = [
  {
    value: "C++",
    label: "C++",
  },
  {
    value: "Java",
    label: "Java",
  },
  {
    value: "Python",
    label: "Python",
  },
  {
    value: "Kotlin",
    label: "Kotlin",
  },
];
const ide_theme = [
  {
    value: "Dark",
    label: "Theme",
  },
  {
    value: "Dark",
    label: "Dark",
  },
  {
    value: "Light",
    label: "Light",
  },
];
const LightTheme = {
  backgroundColor: "#FFFFFF",
  color: "#000",
  fontFamily: `"Source Code Pro", monospace`,
};


const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [theme, setTheme] = useState("Dark");
  const [language, setLanguage] = useState(options[0].label);
  const [showOutput, setShowOutput] = useState(false);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.value);
  };
  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "Dark" ? "Light" : "Dark"));
  };
  
  const handleRunCode = () => {
    // Run code logic
    setShowOutput(true);
  };

  const handleSaveCode = () => {
    // Save code logic
  };

  const handleSubmitCode = () => {
    // Submit code logic
    setShowOutput(true);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4 mt-4">Online Code Editor</h2>

      <div className="mb-4">
        <label htmlFor="language" className="block mb-2">
          Choose Language:
        </label>
        <SelectMenu
          options={options}
          handleChange={handleLanguageChange}
          size={"75%"}
        />
        <span style={{ width: "10px", marginLeft: "20px" }}></span>
        <button
          className="btn btn-light"
          onClick={handleThemeChange}
        >
          {theme === "Dark" ? <i class="bi bi-sun"></i> : <i class="bi bi-sun-fill"></i>}
        </button>
      </div>

      <div className="mb-4">
        <label htmlFor="code" className="block mb-2">
          Code({language}):
        </label>
        <TextArea
          value={code}
          onChange={handleCodeChange}
          placeholder={`Write code in ${language}`}
          className={theme === "Dark" ? "code-ide" : ""}
          autoSize={{
            minRows: 15,
            maxRows: 15,
          }}
          style={theme === "Light" ? LightTheme : {}}
        />
      </div>

      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 mt-3"
          onClick={handleRunCode}
        >
          Run
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleSaveCode}
        >
          Save
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmitCode}
        >
          Submit
        </button>
      </div>

      {/* Code Output */}
      {/* Add the component or element to display the code output */}
      <div>
        <CodeOutput output={showOutput}/>
      </div>


    </div>
  );
};

export default CodeEditor;
