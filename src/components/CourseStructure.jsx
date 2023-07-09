import React, { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import Testimonials from "./Testimonials";

import { courseContent } from "./data";
import Footer from "./Footer";

const CourseStructure = () => {
 
  const [activeModule, setActiveModule] = useState(null);

  const handleToggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  return (
    <>
         <div className="px-8 py-10 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        {/* Welcome Intro */}
        <div className="mb-8">
          <h2 className="text-6xl font-bold mb-4">Welcome to the Course!</h2>
          <p className="text-gray-600">
          Our course is designed to provide you with a comprehensive curriculum covering everything from the basics of web development 
          to advanced topics like React and Node.js. We offer flexible learning options, allowing you to learn at your own 
          pace, attend classes online, and complete practical assignments and projects that suit your lifestyle.
          </p>
        </div>

        {/* Students Enrolled and Rating */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-lg font-bold">
            Students Enrolled: <span className="text-blue-600">1000+</span>
          </div>
          <div className="text-lg font-bold flex gap-1 text-yellow500">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path></svg>
          </div>
        </div>

        {/* Course Objectives */}
        <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">What Will You Learn</h2>
      <ul className="pl-6 text-gray-600 flex flex-col">
        <li className="flex items-center mb-2">
          <i className="bi bi-check-circle-fill text-green-500 mr-2"></i>
          Objective 1
        </li>
        <li className="flex items-center mb-2">
          <i className="bi bi-check-circle-fill text-green-500 mr-2"></i>
          Objective 2
        </li>
        <li className="flex items-center mb-2">
          <i className="bi bi-check-circle-fill text-green-500 mr-2"></i>
          Objective 3
        </li>
        {/* Add more objectives as needed */}
      </ul>
    </div>

        {/* Course Content */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Course Content</h2>
          {courseContent.map((module, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex items-center justify-between cursor-pointer bg-white p-4 rounded-lg shadow-md"
            onClick={() => handleToggleModule(index)}
          >
            <h3 className="text-lg font-bold">{module.module}</h3>
            <CaretDownOutlined
              className={`h-5 w-5 text-gray-600 transition-transform ${
                activeModule === index ? 'transform rotate-180' : ''
              }`}
            />
          </div>
          {activeModule === index && (
            <div className="pl-6 mt-2 bg-gray-100 rounded-lg p-4">
              <ul className="list-disc pl-6 text-gray-600 mt-2 mb-2">
                {module.lectures.map((lecture, idx) => (
                  <li key={idx}>{lecture}</li>
                ))}
              </ul>
              <div className="flex align-center bg-white rounded-lg p-2 mt-2">
                <p className="text-sm italic ml-40">{module.pdf}</p>
                <p className="text-sm italic ml-8">{module.video}</p>
              </div>
            </div>
          )}
        </div>
      ))}
        </div>

        {/* About Instructor */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About the Instructor</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="bg-gray-100 p-4 flex flex-row">
                <img
                  src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FDSC_00088_1_755813ca78.jpg&w=640&q=100"
                  alt="Team Member"
                  className="w-1/3 h-auto object-cover rounded-lg mr-4"
                />
                <div className="flex flex-col">
                  <h3 className=" font-bold mb-2 text-center text-3xl">John Doe</h3>
                  <p className="text-gray-800 mt-3">
                    My name is John Doe and I am super-psyched that you are reading this!
                    Professionally, I come from the Data Science consulting space with experience in finance, retail, transport, and other industries. One of the strongest sides of my teaching style is that I focus on intuitive explanations, so you can be sure that you will truly understand even the most complex topics.
                    To sum up, I am absolutely and utterly passionate about Data Science and I am looking forward to sharing my passion and knowledge with you!
                  </p>
                </div>
              </div>
            </div>
          </div>


        {/* Testimonials */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
          {/* Add Testimonials component or content here */}
          <Testimonials />
        </div>
      </div>
    </div>

    <div><Footer/></div>
    </>
   
  );
};

export default CourseStructure;
