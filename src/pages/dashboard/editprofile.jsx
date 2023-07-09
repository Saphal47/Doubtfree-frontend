import React from "react";
import {
  Avatar,
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Switch,
  message,
} from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { EditProfileService } from "../../services/auth/editprofile";

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
const EditProfile = ({ showModal, onOk, confirmLoading, profile_data }) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);

  const onFinish = async (values) => {
    const key = "updatable";
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    console.log("Received values of form: ", values);
    try {
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
        formData.append("residence", values.residence);
        formData.append("mobile_number", values.mobile_number);
        formData.append("introduction", values.introduction);
        formData.append("gender", values.gender);
        formData.append("date_of_birth", values.date_of_birth);
        formData.append("isTeacher", values.isTeacher);
        formData.append("_id", profile_data.result._id);
        console.log("Received values of form: ", formData);
        const res = await EditProfileService(formData, dispatch);
        messageApi.open({
          key,
          type: "success",
          content: res,
        });
      };
      reader.readAsArrayBuffer(image);
    } catch {
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append("residence", values.residence);
      formData.append("mobile_number", values.mobile_number);
      formData.append("introduction", values.introduction);
      formData.append("gender", values.gender);
      formData.append("date_of_birth", values.date_of_birth);
      formData.append("isTeacher", values.isTeacher);
      formData.append("_id", profile_data.result._id);
      console.log("Received values of form: ", formData);
      const res = await EditProfileService(formData, dispatch);
      messageApi.open({
        key,
        type: "success",
        content: res,
      });
    }
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
    <>
      {contextHolder}
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: "91",
          name: profile_data.result.name,
          email: profile_data.result.email,
          mobile_number: profile_data.result.mobile_number,
          introduction: profile_data.result.introduction,
          gender: profile_data.result.gender,
          date_of_birth: profile_data.result.date_of_birth,
          isTeacher: profile_data.result.isTeacher,
          residence: profile_data.result.residence,
        }}
        scrollToFirstError
        noValidate
      >
        <span className="form-head">
          <Avatar size={100}>
            <img
              src={
                image ? URL.createObjectURL(image) : profile_data.profileImage
              }
              alt="Image"
              style={{ transform: "scale(2) translateY(10px)" }}
            />{" "}
          </Avatar>
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
            defaultChecked={profile_data.result.isTeacher}
            disabled
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
          <Input disabled />
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
          <Input disabled />
        </Form.Item>
        <Form.Item
          name="profileImage"
          label="Profile Image"
          rules={[
            {
              required: false,
              message: "Please Upload Profile Image",
            },
          ]}
        >
          {/* <Upload name="file" onChange={() => setUploaded(true)}>
            {!isUploaded && (
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            )}
          </Upload> */}
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </Form.Item>
        <Form.Item
          name="date_of_birth"
          label="Date of Birth"
          rules={[
            {
              required: false,
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
        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button bg-blue-400"
            loading={confirmLoading}
          >
            Edit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default EditProfile;
