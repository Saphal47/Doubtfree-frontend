import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ChangePasswordService } from "../../services/auth/changepass";

const ChangePassword = () => {
  const token = useSelector((state) => state.getuser?.result?.token);
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    console.log(values);
    const key = "updatable";
    setLoading(true);
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    try {
      const res = await ChangePasswordService(values.password, token);
      messageApi.open({
        key,
        type: "success",
        content: res,
        duration: 3,
      });
    } catch (err) {
      messageApi.open({
        key,
        type: "error",
        content: "Error while in change password",
        duration: 3,
      });
    }
    setLoading(false);
  };
  return (
    <>
      {contextHolder}
      <div className="container-login">
        <Form
          name="normal_login"
          className="container-login-form"
          onFinish={onFinish}
          noValidate
        >
          <span className="form-head">
            <h4>Change Password</h4>
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
            label="Re-enter Password"
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
              className="login-form-button bg-blue-600"
              loading={loading}
            >
              {loading ? "Please wait.." : "Change Password"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ChangePassword;
