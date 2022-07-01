import { useContext } from "react";
import counterContext from "../../context/counter/counterContext";

const Count = () => {
  const { increment, decrement, reset } = useContext(counterContext);

  return (
    <>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
};

export default Count;
