import React from "react";
import CustomModal from "./components/customModal/CustomModal";
import ExUseMemoHook from "../src/components/useMemoHook/ExUseMemoHook";
import ExIncrementDecrement from "./components/incrementDecrementCustomHook/ExIncrementDecrement";
import SelectDropDownProblemEx from "../src/components/selectDropDownProblem/SelectDropDownProblemEx";
import SelectCheckBoxAndDeleteItem from "./components/checkBoxAndDelete/SelectCheckBoxAndDeleteItem";
import DisplayMessage from "../src/components/demo/Test";
import FormHandling from "../src/components/FormHandling/Index";
import CounterState from "./components/CounterState/Index";
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

      {/* <SelectCheckBoxAndDeleteItem /> */}
      {/* <DisplayMessage message="Ganesh" /> */}
      {/* <FormHandling /> */}
      <CounterState />
    </>
  );
}

export default App;
