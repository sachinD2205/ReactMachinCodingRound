import react from "react";

const InputTextField = ({
  name,
  placeholder = "enter text here",
  value = "",
  handleInputChange = () => {},
}) => {
  return (
    <>
      <input
        type="text"
        value={value}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </>
  );
};

export default InputTextField;
