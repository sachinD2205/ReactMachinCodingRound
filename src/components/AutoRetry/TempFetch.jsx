import { useEffect } from "react";
import fetch from "./fetch";

const TempFetch = () => {
  useEffect(() => {

    const controller = new AbortController();


    fetch("abc/xyz", 3,{signal:controller.signal})
      .then((d) => {
        console.log("api succesfull", d);
      })
      .catch((error) => {
        console.warn("Api Failed", error);
      });

    return () => {
      console.log("unMount_TempFetch");
      controller.abort();
    };
  }, []);
  return <div>Temp Fetch</div>;
};

export default TempFetch;
