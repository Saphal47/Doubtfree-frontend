import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Collapse,
  Descriptions,
  Drawer,
  Image,
  Modal,
  Row,
  Tag,
  Typography,
} from "antd";
import { useSelector } from "react-redux";
import { Link, redirect, useParams } from "react-router-dom";
import { FileAddOutlined, SettingOutlined } from "@ant-design/icons";
import "./style.css";
import Testimonials from "../../../components/Testimonials";
import EnrolledStudents from "./list";
import AddContent from "./addcontent";
import { isContain } from "./isContain";
import axios from "axios";

const { Title, Text } = Typography;

const { Panel } = Collapse;

const tabList = [
  {
    key: "User Info",
    tab: "Course Info",
  },
  {
    key: "About Me",
    tab: "About Course",
  },
];

const LearnCourse = () => {
  const getuser = useSelector((state) => state.getuser).result;
  const [activeTabKey1, setActiveTabKey1] = useState("User Info");
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [fetchingContent, setFetchingContent] = useState(true);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen1(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen1(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen1(false);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const getcourse = useSelector((state) => state.getcourses).result.filter(
    (obj) => obj.course._id === id
  )[0];
  const [expandIconPosition, setExpandIconPosition] = useState("1");
  const onPositionChange = (newExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };
  const onChange = (key) => {
    console.log(key);
  };
  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        event.stopPropagation();
      }}
    />
  );

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  const handleContent = async () => {
    setFetchingContent(true);
    const res = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/courses/getcontent?course_id=${id}`
    );
    if (res.error) {
      alert("Error while fetching course content");
    } else {
      console.log(res.data);
      setContent(res.data);
    }
    setFetchingContent(false);
    console.log(content);
  };
  useEffect(() => {
    console.log(id);
    handleContent();
  }, []);
  return (
    <>
      <div style={{ width: "100%" }}>
        <Row>
          <Title level={1} className="my-6">
            <span className="text-blue-600">{getcourse.course.title}</span>
          </Title>
        </Row>
        <div className="flex items-center justify-between mb-8">
          <div className="text-lg font-bold">
            Students Enrolled: {fetchingContent && "Please Wait...."}
            <span className="text-blue-600 cursor-pointer" onClick={showDrawer}>
              1000+(Open)
            </span>
          </div>
        </div>
        <Row>
          <Title level={4}>Course Details</Title>
        </Row>
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div className=" p-3 py-4">
              <Card
                style={{
                  width: "100%",
                }}
                tabBarExtraContent={
                  isContain(getuser?.result?.Courses, id) &&
                  getuser?.result?.isTeacher ? (
                    <Button
                      onClick={showModal}
                      type="primary"
                      className="bg-blue-500"
                      icon={<FileAddOutlined />}
                    >
                      Add Content
                    </Button>
                  ) : (
                    {}
                  )
                }
                tabList={tabList}
                activeTabKey={activeTabKey1}
                onTabChange={onTab1Change}
              >
                {activeTabKey1 === tabList[0].key && (
                  <Descriptions title="" bordered>
                    <Descriptions.Item label="Name">
                      {getcourse.course.title}
                    </Descriptions.Item>
                    <Descriptions.Item label="Tags">
                      {getcourse.course.tags &&
                        getcourse.course.tags[0].split(",").map((t) => {
                          return (
                            <Tag
                              color={
                                tags_colors[
                                  Math.floor(Math.random() * tags_colors.length)
                                ]
                              }
                            >
                              {t}
                            </Tag>
                          );
                        })}
                    </Descriptions.Item>
                    <Descriptions.Item label="Duration">
                      {getcourse.course.duration} Weeks
                    </Descriptions.Item>
                    <Descriptions.Item label="Starting Date">
                      {getcourse.course.startDate}
                    </Descriptions.Item>
                    <Descriptions.Item label="End Date">
                      {getcourse.course.endDate}
                    </Descriptions.Item>
                    <Descriptions.Item label="Fee">
                      Rs.{getcourse.course.fee}
                    </Descriptions.Item>
                  </Descriptions>
                )}
                {activeTabKey1 === tabList[1].key && (
                  <Descriptions title="" bordered>
                    <Descriptions.Item label="Description">
                      {getcourse.course.description}
                    </Descriptions.Item>
                  </Descriptions>
                )}
              </Card>
            </div>
          </div>
        </div>
        <Row>
          <Title level={4}>What Will You Learn</Title>
        </Row>
        <ul className="pl-6 text-gray-600 flex flex-col my-3">
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
        </ul>
        <Row>
          <Title level={4}>Courses Content</Title>
        </Row>
        <div className="container">
          <Collapse
            defaultActiveKey={["1"]}
            onChange={onChange}
            expandIconPosition={expandIconPosition}
          >
            {fetchingContent && (
              <Panel header="Loading..." key="1" extra={genExtra()}></Panel>
            )}
            {!fetchingContent &&
              content &&
              content.map((c) => {
                return (
                  <Panel
                    header={c.content.title}
                    key={c._id}
                    extra={genExtra()}
                  >
                    <Title level={4}>{c.content.title}</Title>
                    <br />
                    <Text>{c.content.description}</Text>
                    {/* <Title level={5}>Video Lecture</Title>
                  <div className="lecture_card">
                    <div className="lecture_img">
                      <img src={require("./video.png")} alt="" srcset="" />
                    </div>
                    <div className="lecture_name">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Odio ab soluta alias error
                    </div>
                  </div> */}
                    <Title level={5}>PDF Notes</Title>
                    <div
                      className="lecture_card"
                      onClick={() => window.open(c.file_url, "_blank")}
                    >
                      <div className="lecture_img">
                        <img src={require("./pdf.png")} alt="" srcset="" />
                      </div>
                      <div className="lecture_name">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Odio ab soluta alias error
                      </div>
                    </div>
                  </Panel>
                );
              })}
          </Collapse>
        </div>
        <div className="container my-3">
          <Row>
            <Title level={4}>About the Instructor</Title>
          </Row>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="bg-gray-100 p-4 flex flex-row">
              <img
                src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FDSC_00088_1_755813ca78.jpg&w=640&q=100"
                alt="Team Member"
                className="w-1/3 h-auto object-cover rounded-lg mr-4"
              />
              <div className="flex flex-col">
                <h3 className=" font-bold mb-2 text-3xl">
                  <span className="text-red-500">J</span>ohn Doe
                </h3>
                <p className="text-gray-800 mt-3">
                  My name is John Doe and I am super-psyched that you are
                  reading this! Professionally, I come from the Data Science
                  consulting space with experience in finance, retail,
                  transport, and other industries. One of the strongest sides of
                  my teaching style is that I focus on intuitive explanations,
                  so you can be sure that you will truly understand even the
                  most complex topics. To sum up, I am absolutely and utterly
                  passionate about Data Science and I am looking forward to
                  sharing my passion and knowledge with you!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3">
          <Row>
            <Title level={4}>Testimonials</Title>
          </Row>
          <Testimonials />
        </div>
      </div>
      <Modal
        title="Add Content"
        open={open1}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={1000}
      >
        <AddContent course_id={id} />
      </Modal>
      <Drawer
        title="Entrolled Students"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <EnrolledStudents id={id} />
      </Drawer>
    </>
  );
};

export default LearnCourse;

const tags_colors = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];
