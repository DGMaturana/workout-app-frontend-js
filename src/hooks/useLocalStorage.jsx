// import { useState } from "react";

// export const useLocalStorage = () => {
//   const [value, setValue] = useState(null);

//   const setItem = (key, value) => {
//     localStorage.setItem(key, value);
//     setValue(value);
//     return getItem(key);
//   };

//   const getItem = (key) => {
//     const value = localStorage.getItem(key);
//     setValue(value);
//     return value;
//   };

//   const removeItem = (key) => {
//     localStorage.removeItem(key);
//     setValue(null);
//   };
//   return { value, setItem, getItem, removeItem };
// };

import { useState } from "react";

export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};
