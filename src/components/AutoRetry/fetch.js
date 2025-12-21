const fetch = async (api, limit = 1, signal) => {
  console.log("fetch", limit);

  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new Error("Aborted"));
      return;
    }

    const timeoutId = setTimeout(async () => {
      if (Math.random() > 0.95) {
        resolve("sucess:200");
      } else if (limit > 0) {
        try {
          const result = await fetch(api, limit - 1, signal);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      } else {
        reject("api failed");
      }
    }, 1000);

    // signal?.("abort", () => {addEventListener
    //   clearTimeout(timeoutId);
    //   reject(new Error("Aborted"));
    // });

    signal.addEventListener("abort",()=>{
      clearTimeout(timeoutId)
      reject(new Error("aborted event"))
    })


  });

};

export default fetch;
