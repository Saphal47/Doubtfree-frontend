import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    console.log(values);
    const key = "updatable";
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    // const res = await LoginService(values.email, values.password, dispatch);
    messageApi.open({
      key,
      type: "success",
      content: "fsdg",
      duration: 3,
    });
  };
  return (
    <>
      {contextHolder}
      <div className="container-login">
        <Form
          name="normal_login"
          className="container-login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          noValidate
        >
          <span className="form-head">
            <h4>Change Password</h4>
          </span>
          <Form.Item
            name="old_password"
            label="Old Password"
            rules={[
              {
                required: true,
                message: "Please input your old password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="password"
            label="New Password"
            rules={[
              {
                required: true,
                message: "Please input your new password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm New Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your new password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Change Password
            </Button>
            Or <Link to="/login">Login</Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ChangePassword;
