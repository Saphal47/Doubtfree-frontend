import { React, useState, useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

// import HomeContent from "../../components/HomeContent"

import { TypeAnimation } from "react-type-animation";

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

  return (
    <>
      <div className="container-home">
        <div className="home-left">
          <div className="text-4xl md:text-6xl font-bold">
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
            {/* <div className="animation-placeholder" /> */}
          </div>

          <div className="text-xl inline-block  md:text-3xl mt-4 font-semibold text-green-800 animation-text">
            Join the Coding Revolution at DoubtFree
          </div>
        </div>
        <div className="home-right">
          <img
            src="/dizzyeducation-1@2x.png"
            className="md:max-w-[50%] md:h-[60%]   sm:max-w-[40%] sm:h-[50%]  max-w-[30%] h-[40%] floating-image  mr-4 mt-6"
          />
        </div>
      </div>
         <div className="text-gray py-4 px-6 text-left container-home1">
        <div className="text-lg font-bold mb-2">
          Discover the best coding course for your kids.
        </div>
        <div className="text-base">Learn Coding from basics.</div>
        <div className="btn-div my-5">
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

      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-8">WHY CHOOSE 
          <span className="text-3xl  font-bold text-blue-600">
              {" "}US?
          </span>
          </h2>
          <div className="relative h-2 mb-6 overflow-hidden">
            <div
              className="absolute h-full w-full bg-blue-400"
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="px-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Time Management</h3>
                <p className="text-gray-600">
                  We aim for providing hiring solutions for educational
                  institutions. We recognize the importance of efficient and effective recruitment processes to ensure the smooth functioning of educational institutions. That's why we offer comprehensive hiring solutions designed to streamline the recruitment process and save valuable time.
                </p>
              </div>
            </div>
            <div className="px-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Best Quality Services</h3>
                <p className="text-gray-600">
                  Our faculties are a team of highly qualified and extensively
                  trained professionals. They have graduated from some of the
                  most prestigious institutions around the world, which is a
                  testament to their knowledge and expertise.They bring a wealth of experience and, creating a dynamic and engaging learning environment for our students.
                </p>
              </div>
            </div>
            <div className="px-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Practical Learning</h3>
                <p className="text-gray-600">
                  We emphasize practical learning through hands-on projects to
                  enhance students' coding skills.They learn how to analyze requirements and implement them using programming languages.
                  We believe that practical learning not only enhances technical competence but also nurtures critical thinking, creativity, and teamwork.
                </p>
              </div>
            </div>
            <div className="px-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Affordable Cost</h3>
                <p className="text-gray-600">
                  We understand the importance of affordability and
                  accessibility. Therefore, we offer our services at economical
                  rates without compromising on quality.Join us on our mission to make coding education accessible and affordable for all, and together, let's unlock the boundless possibilities that coding offers.
                </p>
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
