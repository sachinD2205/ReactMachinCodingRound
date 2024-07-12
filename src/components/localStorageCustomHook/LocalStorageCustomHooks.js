// useLocalStorage
export const useLocalStorage = () => {
  const getItem = (key) => {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  };
  const setItem = (key, value) => {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  };
  const removeItem = (key) => {
    localStorage.removeItem(key);
  };
  const clearStorage = () => {
    localStorage.clear();
  };
  return [getItem, setItem, removeItem, clearStorage];
};
