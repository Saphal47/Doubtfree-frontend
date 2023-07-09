import { Button, Empty } from "antd";
const Empty_ = ({ description, btn_txt, handleEmpty_ }) => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 100,
    }}
    description={<span>{description}</span>}
  >
    <Button
      type="primary"
      className="bg-blue-500"
      onClick={() => handleEmpty_()}
    >
      {btn_txt}
    </Button>
  </Empty>
);
export default Empty_;
