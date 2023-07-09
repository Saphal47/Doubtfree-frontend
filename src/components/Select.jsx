import { Select } from "antd";

const SelectMenu = ({ options, handleChange, size }) => (
  <Select
    labelInValue
    defaultValue={options[0]}
    style={{
      width: size,
    }}
    onChange={handleChange}
    options={options}
    size="large"
  />
);
export default SelectMenu;
