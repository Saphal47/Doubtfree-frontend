import React from "react";
import {
  Button,
  Form,
  Image,
  Input,
  Select,
  Switch,
  Tag,
  message,
  DatePicker,
} from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCourseService } from "../../services/courses/add";
import moment from "moment";

const { RangePicker } = DatePicker;
const options = [
  {
    value: "ML",
  },
  {
    value: "ReactJs",
  },
  {
    value: "Nodejs",
  },
  {
    value: "AI",
  },
];

const tagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color="green"
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginRight: 3,
      }}
    >
      {label}
    </Tag>
  );
};
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
const AddCourse = () => {
  const [form] = Form.useForm();
  const profile_data = useSelector((state) => state.getuser).result;
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [isFee, setFee] = useState(false);
  const [isDuration, setDuration] = useState(false);

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
      console.log(profile_data);
      const { starting, ending, weeks } = getWeeks(values);
      formData.append("title", values.title);
      formData.append("fee", values?.fee ? values.fee : 0);
      formData.append("duration", weeks);
      formData.append("tags", values.tags);
      formData.append("description", values.description);
      formData.append("startDate", starting);
      formData.append("endDate", ending);

      formData.append("_id", profile_data.result._id);
      console.log("Received values of form: ", formData);
      const res = await AddCourseService(formData, dispatch);
      messageApi.open({
        key,
        type: "success",
        content: res,
      });
    };
    reader.readAsArrayBuffer(image);
  };
  return (
    <div>
      {contextHolder}
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        className="container-register-form"
        onFinish={onFinish}
        scrollToFirstError
        noValidate
      >
        <span className="form-head">
          <h4>Add Course</h4>
        </span>
        <Form.Item
          name="title"
          label="Title"
          tooltip="What is title of course?"
          rules={[
            {
              required: true,
              message: "Please input course title.",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="tags"
          label="Tags"
          tooltip="What is related tags of course?"
        >
          <Select
            mode="multiple"
            showArrow
            tagRender={tagRender}
            placeholder="ie. ML"
            style={{
              width: "100%",
            }}
            options={options}
          />
        </Form.Item>
        <Form.Item name="is_fee" label="Fee(if any)">
          <Switch
            className="bg-gray-600"
            checkedChildren="paid"
            unCheckedChildren="free"
            onChange={(checked, event) => setFee(checked)}
          />
        </Form.Item>
        <Form.Item name="fee" label="Value">
          <Input disabled={!isFee} />
        </Form.Item>
        <Form.Item name="is_duration" label="Duration(if any)">
          <Switch
            className="bg-gray-600"
            checkedChildren="Yes"
            unCheckedChildren="No"
            onChange={(checked, event) => setDuration(checked)}
          />
        </Form.Item>

        <Form.Item name="duration" label="Value">
          <RangePicker disabled={!isDuration} />
        </Form.Item>
        <Form.Item
          name="description"
          label="description"
          rules={[
            {
              required: true,
              message: "Please input description",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item
          name="banner"
          label="Banner Image"
          rules={[
            {
              required: true,
              message: "Please Upload Banner Image",
            },
          ]}
        >
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button bg-blue-400"
            loading={false}
          >
            Add Course
          </Button>
        </Form.Item>
        <span className="form-head">
          {image && (
            <>
              <Image
                width={"60%"}
                // height={200}
                src={URL.createObjectURL(image)}
                fallback="data:image/png;base64,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"
              />
            </>
          )}
        </span>
      </Form>
    </div>
  );
};
export default AddCourse;

const getWeeks = (values) => {
  let starting = "",
    ending = "",
    weeks = "";
  try {
    starting =
      values.duration[0].$y +
      "-" +
      values.duration[0].$M +
      "-" +
      values.duration[0].$D;
    ending =
      values.duration[1].$y +
      "-" +
      values.duration[1].$M +
      "-" +
      values.duration[1].$D;
    weeks = moment(ending).diff(moment(starting), "weeks");
    console.log({ starting, ending, weeks });
  } catch (e) {}
  return { starting, ending, weeks };
};
