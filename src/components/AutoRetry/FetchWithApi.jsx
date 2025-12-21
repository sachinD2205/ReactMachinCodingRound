import { useEffect } from "react";
const FetchWithApi = () => {
  const controller = new AbortController();
  useEffect(() => {
   const api = "https://jsonplaceholder.typicode.com/albums";

   fetch(api,{signal:controller.signal}).then((data)=>{
    console.log("albums_Data",data)
   }).catch((error)=>{
    console.log("album_api_failed",error)
   })


    return () => {
      console.log("unMount_FetchWitApi");
      controller.abort();
    };
  }, []);

  return <div>Fetch Wit Api</div>;
};

export default FetchWithApi;
