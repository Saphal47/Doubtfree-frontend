import React, { useEffect, useState } from "react";
import { Card, Descriptions, Image, Modal, Row, Tag, Typography } from "antd";
import "./css/profile.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EditProfile from "./editprofile";

const { Title } = Typography;
const tabList = [
  {
    key: "User Info",
    tab: "User Info",
  },
  {
    key: "About Me",
    tab: "About Me",
  },
];

const Profile = () => {
  const profile_data = useSelector((state) => state.getuser).result;
  const [activeTabKey1, setActiveTabKey1] = useState("User Info");
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  useEffect(() => {
    console.log(profile_data);
  }, []);
  return (
    <>
      <div style={{ width: "100%" }}>
        <Row>
          <Title level={4}>Personal Details</Title>
        </Row>
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card p-3 py-4">
              <div>
                <Image
                  className="rounded-md overflow-hidden"
                  width={110}
                  src={profile_data.profileImage}
                />
              </div>
              <div className="my-2">
                <h1 className="" style={{ fontSize: "1.3rem", color: "blue" }}>
                  {profile_data.result.name}
                  <Tag color="#55acee" className="my-1 ml-2">
                    {profile_data.result.isTeacher ? "Teacher" : "Student"}
                  </Tag>
                </h1>
              </div>
              <Card
                style={{
                  width: "100%",
                }}
                tabBarExtraContent={
                  <Link
                    to="#"
                    className="text-blue-600 hover:text-gray-400"
                    onClick={showModal}
                  >
                    Edit
                  </Link>
                }
                tabList={tabList}
                activeTabKey={activeTabKey1}
                onTabChange={onTab1Change}
              >
                {activeTabKey1 === tabList[0].key && (
                  <Descriptions title="" bordered>
                    <Descriptions.Item label="Name">
                      {profile_data.result.name}
                    </Descriptions.Item>
                    <Descriptions.Item label="Email">
                      {profile_data.result.email}
                    </Descriptions.Item>
                    <Descriptions.Item label="Mobile Number">
                      {profile_data.result.mobile_number}
                    </Descriptions.Item>
                    <Descriptions.Item label="Residence">
                      {profile_data.result.residence}
                    </Descriptions.Item>
                    <Descriptions.Item label="Gender">
                      {profile_data.result.gender}
                    </Descriptions.Item>
                    <Descriptions.Item label="Date of Birth">
                      {profile_data.result.date_of_birth}
                    </Descriptions.Item>
                    <Descriptions.Item label="Change Password">
                      <Link
                        to="/change-password"
                        className="text-blue-600 hover:text-gray-400"
                      >
                        Change Password
                      </Link>
                    </Descriptions.Item>
                  </Descriptions>
                )}
                {activeTabKey1 === tabList[1].key && (
                  <Descriptions title="" bordered>
                    <Descriptions.Item label="Introduction">
                      {profile_data.result.introduction}
                    </Descriptions.Item>
                  </Descriptions>
                )}
              </Card>
            </div>
          </div>
        </div>
        {/* <Row>
          <Title level={4}>Enrolled Courses</Title>
        </Row> */}

        {/* <div className="container">
          <CoursesTable />
        </div> */}
        <Modal
          title="Edit Profile"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          width={1000}
        >
          <EditProfile
            showModal={showModal}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            profile_data={profile_data}
          />
        </Modal>
      </div>
    </>
  );
};

export default Profile;
