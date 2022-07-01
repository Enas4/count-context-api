import React, { useReducer } from "react";
import counterReducer from "./counterReducer";
import counterContext from "./counterContext";

const CounterProvider = (props) => {
  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });
  const reset = () => dispatch({ type: "RESET" });

  return (
    <>
      <counterContext.Provider
        value={{ ...state, increment, decrement, reset }}
      >
        {props.children}
      </counterContext.Provider>
    </>
  );
};

export default CounterProvider;
