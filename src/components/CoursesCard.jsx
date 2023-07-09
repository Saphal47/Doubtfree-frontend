import React, { useState } from "react";
import {
  CheckCircleOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Avatar, Card, Row, Col, Button, message } from "antd";
import { Link } from "react-router-dom";
import Payment from "../pages/Payment";
import { HouseAddFill, Trash3Fill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCourseService } from "../services/courses/delete";
import { EnrollCourseService } from "../services/courses/enroll";

const { Meta } = Card;

const CourseCard = ({
  id,
  title,
  description,
  rating,
  price,
  imageUrl,
  user,
}) => {
  const { isLoggedIn } = useSelector((state) => state.verify).result;
  const getuser = useSelector((state) => state.getuser).result;
  const [showPayment, setShowPayment] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [deleting, setSetDeleting] = useState(false);
  const [enrolling, setSetEntrolling] = useState(false);
  const dispatch = useDispatch();
  const handleCartClick = () => {
    setShowPayment(true);
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
  };
  const handleDeleteCourse = async () => {
    setSetDeleting(true);
    const key = "updatable";
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    const res = await DeleteCourseService(id, getuser?.result._id, dispatch);
    messageApi.open({
      key,
      type: "success",
      content: res,
    });
    setSetDeleting(false);
    return;
  };
  const handleEnroll = async () => {
    setSetEntrolling(true);
    const key = "updatable";
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    const res = await EnrollCourseService(id, getuser?.result._id);
    messageApi.open({
      key,
      type: "success",
      content: res,
    });
    setSetEntrolling(false);
    return;
  };
  return (
    <>
      {contextHolder}
      <Card
        style={{
          width: 300,
          margin: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        cover={
          <Link
            to={`/dashboard/courses/${id}`}
            style={{ height: "200px", overflow: "hidden" }}
          >
            <img
              alt="course cover"
              src={
                imageUrl ||
                "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              }
            />
          </Link>
        }
        actions={[
          <div className="course-details">
            <Row justify="center" align="middle">
              <Col>
                <StarFilled style={{ fontSize: "20px", color: "#1890ff" }} />
              </Col>
              <Col className="mr-6" style={{ fontSize: "16px" }}>
                {rating}
              </Col>
              <Col>
                <div className="price mr-6" style={{ fontSize: "16px" }}>
                  {price}
                </div>
              </Col>
              <Col>
                <ShoppingCartOutlined
                  key="cart"
                  style={{ fontSize: "24px", color: "#1890ff" }}
                  onClick={handleCartClick}
                />
              </Col>
              {isLoggedIn && getuser?.result?.Courses?.indexOf(id) != -1 && (
                <>
                  <Col className="flex justify-between flex-row py-3 w-100">
                    <Link to={`/dashboard/courses/${id}`}>
                      <Button
                        className={`mx-3 bg-pink-500 hover:bg-pink-400 w-${
                          getuser?.result?.isTeacher ? "40" : "60"
                        }`}
                        icon={<CheckCircleOutlined />}
                        type="primary"
                      >
                        {getuser?.result?.isTeacher ? "Open" : "Enrolled"}
                      </Button>
                    </Link>
                    {getuser.result.isTeacher && (
                      <Button
                        className=""
                        icon={<Trash3Fill />}
                        loading={deleting}
                        type="link"
                        danger
                        onClick={handleDeleteCourse}
                      >
                        {deleting ? "Deleting..." : "Delete"}
                      </Button>
                    )}
                  </Col>
                </>
              )}
              {isLoggedIn &&
                !getuser?.result?.isTeacher &&
                getuser?.result?.Courses?.indexOf(id) === -1 && (
                  <Col>
                    <Button
                      className="mx-3 bg-green-500 hover:bg-green-400"
                      icon={<HouseAddFill />}
                      type="primary"
                      loading={enrolling}
                      onClick={handleEnroll}
                    >
                      {enrolling ? "Enrolling.." : "Enroll"}
                    </Button>
                  </Col>
                )}
              {!isLoggedIn && (
                <Col>
                  <Link to="/login">
                    <Button
                      className="mx-3 bg-blue-500 flex justify-content-center align-items-center"
                      icon={<LoginOutlined />}
                      type="primary"
                    >
                      {" "}
                      Login
                    </Button>
                  </Link>
                </Col>
              )}
            </Row>
          </div>,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
          }
          title={title}
          description={description}
        />
      </Card>

      {showPayment && (
        <Payment visible={showPayment} onCancel={handlePaymentCancel} />
      )}
    </>
  );
};

export default CourseCard;
