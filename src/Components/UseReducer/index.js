import React, { useReducer } from "react";

const UseReducer = () => {
  const [count, dispatch] = useReducer((state, action) => {
    if (action === "add") {
      return state + 1;
    } else if (action === "minus") {
      return state - 1;
    }
    return state;
  }, 0);
  return (
    <>
      <div> {count} </div>
      <button onClick={() => dispatch("add")}> Increment </button>
      <button onClick={() => dispatch("minus")}> Decrement </button>
    </>
  );
};

export default UseReducer;
