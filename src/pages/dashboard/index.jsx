import React from "react";
import {
  UserOutlined,
  DesktopOutlined,
  ArrowLeftOutlined,
  FolderAddOutlined,
  QuestionCircleOutlined,
  CodeFilled,
} from "@ant-design/icons";
import { Breadcrumb, Image, Layout, theme } from "antd";
import { useState } from "react";
import Profile from "./profile";
import Courses from "./courses";
import { Link, Route, Routes } from "react-router-dom";
import AddCourse from "./addcourse";
import { useSelector } from "react-redux";
import { Typography } from "antd";
import LearnCourse from "./course";
import Landing from "../../components/compiler/compiler/Landing";
import QnA from "../QnA";
import NewQ from "../NewQ";
import ViewQuestion from "../doubts/viewquestion";

const { Content, Footer, Sider } = Layout;
const { Title } = Typography;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const getuser = useSelector((state) => state.getuser).result;
  const [active, setActive] = useState("1");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        {" "}
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="side-bar-links">
            <div>
              <Image
                preview={false}
                width={80}
                height={80}
                className="rounded-circle my-3 border-4 border-solid border-blue-500"
                src={getuser.profileImage}
                fallback="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
            <strong className="mt-3 text-blue-400">
              {getuser.result.name}
            </strong>
            <small className="mb-1 text-gray-400">{getuser.result.email}</small>
            <Link
              to="/dashboard/profile"
              className={active === "1" ? "active" : ""}
              onClick={() => setActive("1")}
            >
              <div className="flex flex-col items-center group relative">
                <UserOutlined className="mr-1" />
                <div className="flex items-center absolute top-full mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  My Profile
                </div>
              </div>

              {!collapsed && "My Profile"}
            </Link>
            <Link
              to="/dashboard/courses"
              className={active === "2" ? "active" : ""}
              onClick={() => setActive("2")}
            >
              {" "}
              <div className="flex flex-col items-center group relative">
                <DesktopOutlined className="mr-1" />
                <div className="flex items-center absolute top-full mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  My Courses
                </div>
              </div>
              {!collapsed && "My Courses"}
            </Link>
            <Link
              to="/dashboard/playground"
              className={active === "3" ? "active" : ""}
              onClick={() => setActive("3")}
            >
              {" "}
              <div className="flex flex-col items-center group relative">
                <CodeFilled className="mr-1" />
                <div className="flex items-center absolute top-full mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Playground
                </div>
              </div>
              {!collapsed && "playground"}
            </Link>
            {getuser.result.isTeacher && (
              <Link
                to="/dashboard/add-course"
                className={active === "4" ? "active" : ""}
                onClick={() => setActive("4")}
              >
                {" "}
                <div className="flex items-center group relative">
                  <FolderAddOutlined className="mr-1" />
                  <div className="flex items-center absolute left-full ml-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Add Course
                  </div>
                </div>
                {!collapsed && "Add Course"}
              </Link>
            )}
            <Link
              to="/dashboard/qna"
              className={active === "5" ? "active" : ""}
              onClick={() => setActive("5")}
            >
              {" "}
              <div className="flex flex-col items-center group relative">
                <QuestionCircleOutlined className="mr-1" />
                <div className="flex items-center absolute top-full mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  `{getuser.result.isTeacher ? "Resolve Doubts" : "My Doubts"}`
                </div>
              </div>
              {!collapsed &&
                `${getuser.result.isTeacher ? "Resolve Doubts" : "My Doubts"}`}
            </Link>
            <Link to="/">
              {" "}
              <div className="flex flex-col items-center group relative">
                <ArrowLeftOutlined className="mr-1" />
                <div className="flex items-center absolute top-full mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Home
                </div>
              </div>
              {!collapsed && "Back to home"}
            </Link>
          </div>
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "0 16px",
              overflow: "auto",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>
                {active === "1" && "Profile"}
                {active === "2" && "Courses"}
                {active === "3" && "Playground"}
                {active === "4" && "Add Course"}
                {active === "5" && "QnA / Questions"}
                {active === "-1" && "Courses / Learn"}
              </Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route
                  path="/courses"
                  element={<Courses setActive={setActive} />}
                />
                <Route path="/courses/:id" element={<LearnCourse />} />
                <Route path="/playground" element={<Landing />} />
                <Route path="/qna" element={<QnA />} />
                <Route
                  path="/qna/view/:questionID"
                  element={<ViewQuestion />}
                />
                <Route path="/newq" element={<NewQ />} />
              </Routes>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            @Doubtfree, All rights reserved
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
export default Dashboard;
