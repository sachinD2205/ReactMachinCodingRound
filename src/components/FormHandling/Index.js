import React, { useState } from "react";
// Create a form with a text input, where you handle form submission and display the submitted value.
// What it tests: Handling forms, state, and controlled components.

const Index = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState();
  const [isData, setIsData] = useState(false);
  const clearFileds = () => {
    setUserName("");
    setPassword("");
    setIsData(false);
  };
  const checkUserIsValid = (userName) => {
    const userNameRegex = /^[A-Za-z]+$/;
    return userNameRegex.test(userName);
  };
  const checkPasswordIsValid = (password) => {
    const passwordRegex = /^\d+$/;
    return passwordRegex.test(password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkUserIsValid(userName)) {
      alert("please enter valid username");
    } else if (!checkPasswordIsValid(password)) {
      alert("please enter valid password");
    } else {
      setIsData(true);
      alert("formSubmited");
    }
    console.log("e___________", e);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div> Login Form </div>
        <div>
          <label> User Name</label>
          <input
            type="text"
            name="username"
            onChange={(e) => setUserName(e?.target?.value)}
            value={userName}
          ></input>
        </div>
        <div>
          <label> Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e?.target?.value)}
            value={password}
          ></input>
        </div>

        <div>
          {!isData && <button type="submit"> Submit</button>}
          {isData && (
            <button type="button" onClick={clearFileds}>
              clear
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default Index;
