export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    maxWidth: "14rem",
    minWidth: "12rem",
    borderRadius: "8px",
    color: "#000",
    fontSize: "0.8rem",
    lineHeight: "1.75rem",
    backgroundColor: "#f5f5f7",
    cursor: "pointer",
    boxShadow: state.isFocused ? "0 0 0 3px rgba(0, 0, 0, 0.1)" : "none",
    borderColor: state.isFocused ? "#EFDECD" : "#d0d0d7",
    ":hover": {
      borderColor: state.isFocused ? "#000" : "#d0d0d7",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#fff" : "#000",
    fontSize: "0.8rem",
    lineHeight: "1.75rem",
    width: "100%",
    background: state.isSelected ? "#000" : "#fff",
    ":hover": {
      backgroundColor: state.isSelected ? "#000" : "#f3f4f6",
      color: state.isSelected ? "#fff" : "#000",
      cursor: "pointer",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#fff",
    maxWidth: "14rem",
    border: "1px solid #d0d0d7",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "#808080",
    fontSize: "0.8rem",
    lineHeight: "1.75rem",
  }),
};
