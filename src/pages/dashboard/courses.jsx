import React from "react";
import { Col, Row, Typography } from "antd";
import "./css/profile.css";
import CourseCard from "../../components/CoursesCard";
import Search from "../../components/Search";
import { useSelector } from "react-redux";
import Empty_ from "../../components/Empty";

const { Title, Text } = Typography;

const Courses = ({ setActive }) => {
  const courses = useSelector((state) => state.getcourses).result;
  const getuser = useSelector((state) => state.getuser).result.result;
  return (
    <>
      <div className="text-center mt-3 mb-2">
        <h1 className="text-4xl md:text-6xl font-bold">
          My&nbsp;
          <span className="text-4xl md:text-6xl font-bold text-blue-600">
            Courses
          </span>
        </h1>
      </div>
      <Row
        className="mx-0 px-0"
        style={{ paddingBottom: "20px", width: "100%" }}
      >
        <Title level={4} className="ml-10">
          Search Courses
        </Title>
        <Search />
      </Row>
      <div style={{ width: "100%", padding: "20px" }}>
        <Row>
          <Title level={4} className="text-2xl font-semibold">
            {getuser.isTeacher ? "Your Course" : "Enrolled"}
          </Title>
        </Row>
        <Row>
          <div className="w-100 flex justify-center align-middle flex-wrap">
            {!getuser.Courses?.length && (
              <Empty_
                description={"Not Found"}
                handleEmpty_={() => {}}
                btn_txt={getuser.isTeacher === true ? "Create" : "Explore"}
              />
            )}
            {courses.map((course, index) => {
              if (getuser.Courses.indexOf(course.course._id) != -1) {
                return (
                  <Col key={index}>
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
                );
              }
            })}
          </div>
        </Row>
        {!getuser.isTeacher && (
          <>
            <Row>
              <Title level={4} className="text-2xl font-semibold">
                Offering for Enrollment
              </Title>
            </Row>
            <Row>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {courses &&
                  courses?.map((course, index) => {
                    if (getuser.Courses.indexOf(course.course._id) === -1) {
                      return (
                        <Col key={index}>
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
                      );
                    }
                  })}
              </div>
            </Row>
          </>
        )}
      </div>
    </>
  );
};

export default Courses;
