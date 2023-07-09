import { React, useState, useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

// import HomeContent from "../../components/HomeContent"
import { items, services_home } from "./constants";
import { TypeAnimation } from "react-type-animation";
import {
  BranchesOutlined,
  CodeFilled,
  GithubFilled,
  UserOutlined,
} from "@ant-design/icons";

const Home = () => {
  const [textColor, setTextColor] = useState("black");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScrollTop = documentHeight - windowHeight;
      const scrollPercentage = (scrollTop / maxScrollTop) * 100;
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const items = [
        "aqua",
        "deeppink",
        "darkkhaki",
        "blue",
        "green",
        "purple",
        "pink",
        "brown",
        "darkmagenta",
        "darksalmon",
        "dodgerblue",
        "firebrick",
        "darkviolet",
      ];
      const randomColor = items[Math.floor(Math.random() * items.length)];
      setTextColor(randomColor);
    }, 1000); // Change color every 3 seconds

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  const [activeAccordion, setActiveAccordion] = useState("");

  const toggleAccordion = (accordionId) => {
    setActiveAccordion((prevAccordion) =>
      prevAccordion === accordionId ? "" : accordionId
    );
  };

  return (
    <>
     <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-10 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <div className="max-w-4xl mb-4 text-6xl font-extrabold leading-none tracking-tight md:text-6xl xl:text-5xl ">
              Code, Create,
                <div className="animation-container" style={{ color: textColor }}>
                <TypeAnimation
                  sequence={[
                    "Conquer!",
                    900,
                    "Conquer!",
                    900,
                    "Conquer!",
                    900,
                    "C",
                    900,
                  ]}
                  repeat={Infinity}
                  cursor={false}
                />
              </div>
           </div>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            <div className="text-xl font-poppins inline-block  md:text-3xl mt-4 font-semibold text-green-800">
              Join the Coding Revolution at DoubtFree
            </div>
            <div className="text-lg font-bold mb-2 mt-4">
              Discover the best coding course for your kids.
            </div>
            <div className="text-base">
              Learn Coding from basics.
            </div>
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">

            <Link
              to="/dashboard/courses"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-lg"
            >
              Explore
            </Link>

            <Link
              to="https://doubtfree.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg text-lg mx-3"
            >
              Learn More
            </Link>
              </div>
            </div>
            <div className="relative w-full md:h-auto lg:col-span-5">
              <img
                src="/dizzyeducation-1@2x.png"
                className="md:max-w-full md:h-[90%] sm:max-w-full sm:h-[80%] w-full sm:w-auto md:w-auto floating-image mr-2 mt-0"
              />
            </div>

          </div>

      </section>

      <section className="py-8 bg-gray-100 pb-16 mt-15 md:mt-10">
        <div className="container mx-auto px-4">
         <h2 className="mb-6 mt-4 text-5xl font-extrabold tracking-tight text-center text-black-900 lg:mb-8 lg:text-5xl">
          WHY CHOOSE
            <span className="text-5xl  font-bold text-blue-600"> US?</span>
          </h2>
          <div className="relative h-2 mb-6 overflow-hidden m-4">
            <div
              className="absolute h-full w-full bg-blue-400 rounded-3xl"
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {services_home &&
              services_home?.map((service, index) => {
                return (
                  <div
                    className="px-4 user-select-none cursor-pointer"
                    key={index}
                  >
                    <div className="bg-gray-800 hover:bg-white rounded-lg shadow-lg p-6 text-gray-300 hover:text-gray-600">
                      <h3 className="text-xl font-bold mb-4 text-blue-400 hover:text-blue-600 flex align-items-center align-middle">
                        <span className="mr-2 mb-1">{service.child}</span>
                        {service.title}
                      </h3>
                      <p className="">{service.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
          <h2 className="mb-6 mt-4 text-5xl font-extrabold tracking-tight text-center text-black-900 lg:mb-8 lg:text-5xl">
            Frequently asked questions
          </h2>
          <div className="max-w-screen-md mx-auto">
            <div
              id="accordion-flush"
              className="space-y-2"
              data-accordion="collapse"
              data-active-classes="bg-white text-gray-900"
              data-inactive-classes="text-gray-500"
            >
              <div>
                <h3
                  id="accordion-flush-heading-1"
                  className={`${
                    activeAccordion === "accordion-flush-body-1"
                      ? ""
                      : "collapsed"
                  }`}
                >
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 bg-white border-b border-gray-200"
                    onClick={() => toggleAccordion("accordion-flush-body-1")}
                    aria-expanded={activeAccordion === "accordion-flush-body-1"}
                    aria-controls="accordion-flush-body-1"
                  >
                    <span>
                      What programming languages should I learn as a beginner?
                    </span>
                    <svg
                      data-accordion-icon=""
                      className={`w-6 h-6 ${
                        activeAccordion === "accordion-flush-body-1" &&
                        "rotate-180"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h3>
                <div
                  id="accordion-flush-body-1"
                  className={`${
                    activeAccordion === "accordion-flush-body-1"
                      ? "block"
                      : "hidden"
                  }`}
                  aria-labelledby="accordion-flush-heading-1"
                >
                  <div className="py-5 border-b border-gray-200">
                    <p className="mb-2 text-gray-500">
                      As a beginner, it's recommended to start with popular and
                      beginner-friendly languages like Python, JavaScript, or
                      Java. These languages have extensive resources and
                      communities that can help you learn and grow your coding
                      skills.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3
                  id="accordion-flush-heading-2"
                  className={`${
                    activeAccordion === "accordion-flush-body-2"
                      ? ""
                      : "collapsed"
                  }`}
                >
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200"
                    onClick={() => toggleAccordion("accordion-flush-body-2")}
                    aria-expanded={activeAccordion === "accordion-flush-body-2"}
                    aria-controls="accordion-flush-body-2"
                  >
                    <span>How can I improve my coding skills?</span>
                    <svg
                      data-accordion-icon=""
                      className={`w-6 h-6 ${
                        activeAccordion === "accordion-flush-body-2" &&
                        "rotate-180"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h3>
                <div
                  id="accordion-flush-body-2"
                  className={`${
                    activeAccordion === "accordion-flush-body-2"
                      ? "block"
                      : "hidden"
                  }`}
                  aria-labelledby="accordion-flush-heading-2"
                >
                  <div className="py-5 border-b border-gray-200">
                    <p className="mb-2 text-gray-500">
                      Improving coding skills requires practice and dedication.
                      Here are a few tips: Practice regularly by solving coding
                      problems and challenges. Work on real-life projects to
                      apply your knowledge.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3
                  id="accordion-flush-heading-3"
                  className={`${
                    activeAccordion === "accordion-flush-body-3"
                      ? ""
                      : "collapsed"
                  }`}
                >
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200"
                    onClick={() => toggleAccordion("accordion-flush-body-3")}
                    aria-expanded={activeAccordion === "accordion-flush-body-3"}
                    aria-controls="accordion-flush-body-3"
                  >
                    <span>
                      What are some online resources for learning to code?
                    </span>
                    <svg
                      data-accordion-icon=""
                      className={`w-6 h-6 ${
                        activeAccordion === "accordion-flush-body-3" &&
                        "rotate-180"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h3>
                <div
                  id="accordion-flush-body-3"
                  className={`${
                    activeAccordion === "accordion-flush-body-3"
                      ? "block"
                      : "hidden"
                  }`}
                  aria-labelledby="accordion-flush-heading-3"
                >
                  <div className="py-5 border-b border-gray-200">
                    <p className="mb-2 text-gray-500">
                      There are numerous online platforms and resources
                      available for learning to code. Some popular ones include:
                      Codecademy FreeCodeCamp Coursera Udemy Khan Academy
                      YouTube tutorials and channels dedicated to coding
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3
                  id="accordion-flush-heading-4"
                  className={`${
                    activeAccordion === "accordion-flush-body-4"
                      ? ""
                      : "collapsed"
                  }`}
                >
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200"
                    onClick={() => toggleAccordion("accordion-flush-body-4")}
                    aria-expanded={activeAccordion === "accordion-flush-body-4"}
                    aria-controls="accordion-flush-body-4"
                  >
                    <span>How can I prepare for coding interviews?</span>
                    <svg
                      data-accordion-icon=""
                      className={`w-6 h-6 ${
                        activeAccordion === "accordion-flush-body-4" &&
                        "rotate-180"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h3>
                <div
                  id="accordion-flush-body-4"
                  className={`${
                    activeAccordion === "accordion-flush-body-4"
                      ? "block"
                      : "hidden"
                  }`}
                  aria-labelledby="accordion-flush-heading-4"
                >
                  <div className="py-5 border-b border-gray-200">
                    <p className="mb-2 text-gray-500">
                      Coding interviews often involve solving algorithmic and
                      data structure problems. Here are a few tips to prepare:
                    </p>
                    <p className="text-gray-500">
                      Practice solving coding problems on platforms like
                      LeetCode and HackerRank. Study common algorithms and data
                      structures. Understand time and space complexity analysis.
                      Mock interview with a friend or join coding interview
                      preparation courses. Stay updated with industry trends and
                      technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-1">
        <Footer />
      </div>
    </>
  );
};

export default Home;
