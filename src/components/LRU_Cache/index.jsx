import LRU_Cache_Class from "./LRU_Cache_Class";
const LRU_Cache = () => {
  const test = new LRU_Cache_Class();
  console.log("addedItem",test.set("a","item_1"),"item_1");
  console.log("addedItem",test.set("b","item_2"),"item_2");
  console.log("getFullCache",test.entries())
  console.log("addedItem",test.set("c","item_3"),"item_3");
  console.log("getFullCache",test.entries())
  console.log("addedItem",test.set("d","item_4"),"item_4");
  console.log("isFull",test.entries());
  console.log("getFullCache",test.entries())
  console.log("isFull",test.entries())
  console.log("addedItem",test.set("e","item_5"),"item_5");
  console.log("isFull",test.entries())
  console.log("getFullCache",test.entries())
  console.log("isFull",test.entries())
  console.log("addedItem",test.set("f","item_6"),"item_6");
  console.log("getFullCache",test.entries())
  console.log("clear",test.clear());
  console.log("entries",test.entries())
  return <div> LRU Cache</div>;
};

export default LRU_Cache;
