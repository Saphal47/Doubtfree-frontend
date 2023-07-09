import React from "react";
import {
  Avatar,
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  Switch,
  Upload,
  message,
} from "antd";
import { useState } from "react";
import "./style.css";
import { RegisterUserService } from "../../services/auth/register";
import { useDispatch } from "react-redux";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 3,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 24,
      offset: 3,
    },
  },
};
const Register = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [isUploaded, setUploaded] = useState(false);

  const onFinish = async (values) => {
    const key = "updatable";
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    console.log("Received values of form: ", values);
    const reader = new FileReader();
    reader.onload = async (event) => {
      const buffer = event.target.result; // The file buffer
      const mimeType = image.type;

      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append(
        "file",
        new Blob([buffer], { type: mimeType }),
        image.name
      );
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("residence", values.residence);
      formData.append("mobile_number", values.mobile_number);
      formData.append("introduction", values.introduction);
      formData.append("gender", values.gender);
      formData.append("date_of_birth", values.date_of_birth);
      formData.append("isTeacher", values.isTeacher);
      console.log("Received values of form: ", formData);
      const res = await RegisterUserService(formData, dispatch);
      messageApi.open({
        key,
        type: "success",
        content: res,
      });
    };
    reader.readAsArrayBuffer(image);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
        <Option value="92">+92</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="container-register">
      {contextHolder}
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        className="container-register-form"
        onFinish={onFinish}
        initialValues={{
          isTeacher: false,
        }}
        scrollToFirstError
        noValidate
      >
        <span className="form-head">
          <h4>Register</h4>
        </span>
        <span className="form-head">
          {image && (
            <Avatar size={100}>
              <img
                src={URL.createObjectURL(image)}
                alt="Image"
                style={{ transform: "scale(2) translateY(10px)" }}
              />{" "}
            </Avatar>
          )}
        </span>
        <Form.Item
          name="isTeacher"
          label="Teacher or Student"
          tooltip="Who are you?"
          rules={[
            {
              required: false,
              message: "Please input this field!",
            },
          ]}
        >
          <Switch
            checkedChildren="Teacher"
            className="bg-gray-600"
            unCheckedChildren="Student"
          />
        </Form.Item>
        <Form.Item
          name="name"
          label="Name"
          tooltip="What is your name?"
          rules={[
            {
              required: true,
              message: "Please input your name!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="profileImage"
          label="Profile Image"
          rules={[
            {
              required: true,
              message: "Please Upload Profile Image",
            },
          ]}
        >
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </Form.Item>
        <Form.Item
          name="date_of_birth"
          label="Date of Birth"
          rules={[
            {
              required: true,
              message: "Please write Date of Birth",
            },
          ]}
        >
          <input type="date" />
        </Form.Item>
        <Form.Item
          name="residence"
          label="Residence"
          tooltip="What is your home address?"
          rules={[
            {
              required: true,
              message: "Please input your address!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="mobile_number"
          label="Mobile Number"
          rules={[
            {
              required: true,
              message: "Please input your mobile number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item
          name="introduction"
          label="Introduction"
          rules={[
            {
              required: true,
              message: "Please input Introduction",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please select Gender!",
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the{" "}
            <a href="" target="_blank">
              agreement
            </a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button bg-blue-400"
            loading={false}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Register;
