import React from "react";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import "./style.css";
import { LoginService } from "../../services/auth/login";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const LoginDemo = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    // console.log(values);
    const key = "updatable";
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    const res = await LoginService(values.email, values.password, dispatch);
    messageApi.open({
      key,
      type: "success",
      content: res,
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
            <h4>Login</h4>
          </span>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="eg. user@gmail.com"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot" to="/forget-password">
              Forgot password
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button bg-blue-400"
            >
              Log in
            </Button>
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LoginDemo;
