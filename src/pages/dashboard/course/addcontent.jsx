import React from "react";
import { Button, Form, Input, Select, Switch, message } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddContentService } from "../../../services/courses/content/upload";

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
const AddContent = ({ showModal, onOk, confirmLoading, course_id }) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const [content, setContent] = useState(null);

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
      const mimeType = content.type;
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append(
        "file",
        new Blob([buffer], { type: mimeType }),
        content.name
      );
      formData.append("description", values.description);
      formData.append("title", values.title);
      formData.append("type", values.type ? "Pdf" : "Video");
      formData.append("course_id", course_id);
      const res = await AddContentService(formData);
      messageApi.open({
        key,
        type: "success",
        content: res,
      });
    };
    reader.readAsArrayBuffer(content);
  };
  return (
    <>
      {contextHolder}
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          type: true,
        }}
        scrollToFirstError
        noValidate
      >
        <Form.Item
          name="type"
          label="Video or Pdf"
          rules={[
            {
              required: true,
              message: "Please input this field!",
            },
          ]}
        >
          <Switch
            checkedChildren="Pdf"
            className="bg-gray-600"
            unCheckedChildren="Video"
            defaultChecked
            disabled
          />
        </Form.Item>
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input title!",
              whitespace: true,
            },
          ]}
        >
          <Input />
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
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setContent(e.target.files[0])}
          />
          {content && (
            <a href={URL.createObjectURL(content)} target="_blank">
              Open
            </a>
          )}
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please input Description",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button bg-blue-400"
            loading={confirmLoading}
          >
            Upload
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AddContent;
