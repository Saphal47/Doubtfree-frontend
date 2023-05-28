import React from "react";
import {
  UserOutlined,
  DesktopOutlined,
  ArrowLeftOutlined,
  FolderAddOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Image, Layout, theme } from "antd";
import { useState } from "react";
import Profile from "./profile";
import Playground from "../Playground";

import Courses from "./courses";
import { Link, Route, Routes } from "react-router-dom";
import AddCourse from "./addcourse";
import { useSelector } from "react-redux";
import { Typography } from "antd";
import LearnCourse from "./course";
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
            <Link
              to="/dashboard/profile"
              className={active === "1" ? "active" : ""}
              onClick={() => setActive("1")}
            >
              <UserOutlined style={{ marginRight: "5px" }} />
              {!collapsed && "My Profile"}
            </Link>
            <Link
              to="/dashboard/courses"
              className={active === "2" ? "active" : ""}
              onClick={() => setActive("2")}
            >
              {" "}
              <DesktopOutlined style={{ marginRight: "5px" }} />
              {!collapsed && "My Courses"}
            </Link>
            <Link
              to="/dashboard/playground"
              className={active === "3" ? "active" : ""}
              onClick={() => setActive("3")}
            >
              {" "}
              <DesktopOutlined style={{ marginRight: "5px" }} />
              {!collapsed && "playground"}
            </Link>
            {getuser.result.isTeacher && (
              <Link
                to="/dashboard/add-course"
                className={active === "4" ? "active" : ""}
                onClick={() => setActive("4")}
              >
                {" "}
                <FolderAddOutlined style={{ marginRight: "5px" }} />
                {!collapsed && "Add Course"}
              </Link>
            )}
            <Link to="/dashboard/profile">
              {" "}
              <QuestionCircleOutlined style={{ marginRight: "5px" }} />
              {!collapsed &&
                `${getuser.result.isTeacher ? "Resolve Doubt" : "My Doubts"}`}
            </Link>
            <Link to="/">
              {" "}
              <ArrowLeftOutlined style={{ marginRight: "5px" }} />
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
                {active === "3" && "About"}
                {active === "4" && "Add Course"}
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
                <Route path="/playground" element={<Playground />} />
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
