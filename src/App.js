import React from "react";
import CustomModal from "./components/customModal/CustomModal";
import ExUseMemoHook from "../src/components/useMemoHook/ExUseMemoHook";
import ExIncrementDecrement from "./components/incrementDecrementCustomHook/ExIncrementDecrement";
import SelectDropDownProblemEx from "../src/components/selectDropDownProblem/SelectDropDownProblemEx";
import SelectCheckBoxAndDeleteItem from "./components/checkBoxAndDelete/SelectCheckBoxAndDeleteItem";

function App() {
  return (
    <>
      {/** 
      <CustomModal />
       */}

      {/** 
      <ExUseMemoHook />
       */}

      {/**
      <ExIncrementDecrement />
       */}

      {/**<SelectDropDownProblemEx />*/}

      <SelectCheckBoxAndDeleteItem />
    </>
  );
}

export default App;
