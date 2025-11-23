import { useState } from "react";
import Button from "./Button";

const TabList = ({ tabList = [] }) => {
  const [value, setValue] = useState("");

  const handleButtonChange = (val) => {
    setValue(val);
  };

  const componentD = (value) => {
    const selectedTab = tabList.find((tab) => tab.name === value);
    if (selectedTab) {
      return selectedTab.component;
    }
    return null;
  };

  return (
    <div>
      {tabList?.map((tab) => (
        <Button name={tab.name} onButtonChange={handleButtonChange}></Button>
      ))}

      {componentD(value)}
    </div>
  );
};

export default TabList;
