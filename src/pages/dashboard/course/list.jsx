import { UserOutlined } from "@ant-design/icons";
import { Avatar, List, Skeleton, message } from "antd";
import axios from "axios";
import VirtualList from "rc-virtual-list";
import { useEffect, useState } from "react";
const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 520;
const EnrolledStudents = ({ id }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const headers = {
    "Content-Type": "application/json",
  };
  const appendData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/courses/enrolled/get?course_id=${id}`,
      { headers }
    );
    if (res.error) {
      message.error("Error while getting enrolled students");
    }
    if (res.data) {
      setData(res.data.enrolled);
    }
    setLoading(false);
  };
  useEffect(() => {
    appendData();
  }, []);
  return (
    <List>
      {loading && (
        <>
          {[...Array(10)].map(() => (
            <Skeleton
              avatar
              paragraph={{
                rows: 1,
              }}
              active
            />
          ))}
        </>
      )}
      {!loading && (
        <VirtualList
          data={data}
          height={ContainerHeight}
          itemHeight={47}
          itemKey="email"
        >
          {(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title={item.name}
                description={item.email}
              />
            </List.Item>
          )}
        </VirtualList>
      )}
    </List>
  );
};
export default EnrolledStudents;
