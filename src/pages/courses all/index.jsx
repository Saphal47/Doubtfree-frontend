import React from "react";
import { Col, Row, Typography } from "antd";
import CourseCard from "../../components/CoursesCard";
import Search from "../../components/Search";
import { useSelector } from "react-redux";
import AnimatedText from "../../components/AnimatedText";


const { Title, Text } = Typography;

const CoursesAll = ({ setActive }) => {
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
          {/* <Text type="secondary">Search by title, date, etc.</Text> */}
        </Row>
        <section>
          <div className="flex flex-col lg:flex-row bg-#f9f9f9 mt-1">
            <div className="flex-1 flex justify-center items-center lg:items-start">
              <div className="max-w-lg mx-auto p-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="mb-8">
                    <AnimatedText />
                  </div>
                  <p
                    className="text-gray-600 text-xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <span className="font-semibold text-2xl">Doubtfree</span>,
                    the premier coding education platform for school students,
                    offers specialized courses in various domains. Our
                    comprehensive programs equip students with the necessary
                    coding skills and knowledge to excel in these fields.
                    <p className="text-black font-semibold mt-5">
                      Join Doubtfree today and embark on a rewarding coding
                      journey.
                    </p>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 mt-4 lg:mt-0 lg:flex justify-center items-center">
              <div className="h-full">
                <img
                  className="w-[90%] h-[90%] ml-20 align-baseline"
                  src={process.env.PUBLIC_URL + "/ezgif.com-optimize.gif"}
                  alt="Learning"
                />
              </div>
            </div>
          </div>
        </section>
        <Row>
          <Title level={4} className="text-2xl font-semibold">
            All
          </Title>
        </Row>
       
        <Row gutter={[16, 16]}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {courses &&
            courses?.map((course, index) => (
              <Col key={index} >
                <CourseCard
                  id={course.course._id}
                  title={course.course.title}
                  description={course.course.description}
                  rating={4.8}
                  price={course.course.fee}
                  imageUrl={course.bannerImageUrl}
                  setActive={setActive}
                  user={course.course.user}
                />
              </Col>
            ))}
            </div>
        </Row>
        <Row>
          <Title level={4} className="text-2xl font-semibold">
            MACHINE LEARNING
          </Title>
        </Row>
        <Row gutter={[16, 16]}>{/* ML Courses */}</Row>
        <Row>
          <Title level={4} className="text-2xl font-semibold">
            DATA SCIENCE
          </Title>
        </Row>
        <Row gutter={[16, 16]}>{/* Data Science */}</Row>
        {/* Add more sections or categories as needed */}
      </div>
    </>
  );
};

export default CoursesAll;