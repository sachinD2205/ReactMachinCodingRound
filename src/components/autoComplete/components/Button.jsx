import react from "react";

const Button = ({ name, handleButtonChange = () => {}, ...rest }) => {
  return (
    <button type="button" onClick={() => handleButtonChange(name)} {...rest}>
      {name}
    </button>
  );
};

export default Button;
