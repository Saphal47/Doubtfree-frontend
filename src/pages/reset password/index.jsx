import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { NewPasswordService } from "../../services/auth/newpassword";

const ResetPassword = () => {
  const { token } = useParams();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    console.log(values);
    const key = "updatable";
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    const res = await NewPasswordService(values.password, token);
    messageApi.open({
      key,
      type: "success",
      content: res,
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
            <h4>Reset Password</h4>
          </span>
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
              Confirm Password
            </Button>
            Or <Link to="/login">Login</Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ResetPassword;
