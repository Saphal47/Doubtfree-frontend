import React from "react";
import { Col, Row, Typography } from "antd";
import "./css/profile.css";
import CourseCard from "../../components/CoursesCard";
import Search from "../../components/Search";
import { useSelector } from "react-redux";

import AnimatedText from "../../components/AnimatedText";

import {
  machineLearningCourses,
  dataScienceCourses,
} from "../../components/data";

const { Title, Text } = Typography;

const Courses = ({ setActive }) => {
  const courses = useSelector((state) => state.getcourses).result;

  return (
    <>
      <div className="text-center mt-3 mb-2">
        <h1 className="text-4xl md:text-6xl font-bold">
          What would you like to&nbsp;
          <span className="text-4xl md:text-6xl font-bold text-blue-600">
            learn?
          </span>
        </h1>
      </div>

      <div style={{ width: "100%", padding: "20px" }}>
        <Row style={{ paddingBottom: "20px" }}>
          <Title level={4} className="ml-10">Search Courses</Title>
          <Search />
          {/* <Text type="secondary" >Search by title, date,topic etc.</Text> */}
        </Row>
        <Row>

        <div className="flex f-screen bg-#f9f9f9 mt-1">
            <div className="flex-1 flex  items-center">
              <div className="max-w-lg mx-auto p-4">
                <div className="bg-white rounded-lg p-4">
                  
                  <div className="mb-8">
                    <AnimatedText />
                  </div>
                  <p className="text-gray-600 text-xl" style={{ fontFamily: "Poppins" }}>
                    <span className="font-semibold text-2xl">Doubtfree</span>, the premier coding education platform for school students, offers specialized courses in various domains. Our comprehensive programs equip students with the necessary coding skills and knowledge to excel in these fields.  
                    <p className="text-black font-semibold mt-5">Join Doubtfree today and embark on a rewarding coding journey.
                    </p>
                  </p>


                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-center items-center h-full">
                {/* Embed your video clip here */}
                {/* <video src="ztraining-banner.mp4" controls autoplay loop playsInline className="max-w-[90%] h-[90%]"></video> */}
                <img className="w-[90%] h-[90%] ml-20 align-baseline"src="ezgif.com-optimize.gif" alt="Learning" />
              </div>
            </div>
        </div>



        </Row>

          <Title level={2} className="text-2xl mt-10 font-semibold text-center font-sans">
            ALL COURSES
          </Title>
       
        <Row gutter={[16, 16]}>
          {courses &&
            courses?.map((course, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
                <CourseCard
                  id={course.course._id}
                  title={course.course.title}
                  description={course.course.description}
                  rating={4.8}
                  price={course.course.fee}
                  imageUrl={course.bannerImageUrl}
                  setActive={setActive}
                />
              </Col>
            ))}
        </Row>
        <Row>
          <Title level={4} className="text-2xl font-semibold">
            MACHINE LEARNING
          </Title>
        </Row>
        <Row gutter={[16, 16]}>
          {machineLearningCourses.map((course, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
              <CourseCard
                _id={"asfdgf"}
                title={course.title}
                description={course.description}
                rating={course.rating}
                price={course.price}
                imageUrl={course.imageUrl}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <Title level={4} className="text-2xl font-semibold">
            DATA SCIENCE
          </Title>
        </Row>
        <Row gutter={[16, 16]}>
          {dataScienceCourses.map((course, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
              <CourseCard
                _id={"dsfghm"}
                title={course.title}
                description={course.description}
                rating={course.rating}
                price={course.price}
                imageUrl={course.imageUrl}
              />
            </Col>
          ))}
        </Row>
        {/* Add more sections or categories as needed */}
      </div>
    </>
  );
};

export default Courses;
