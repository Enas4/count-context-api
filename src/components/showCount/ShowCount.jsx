import { useContext } from "react";
import counterContext from "../../context/counter/counterContext";

const ShowCount = () => {
  const { count } = useContext(counterContext);
  return (
    <>
      <h1>Count : {count}</h1>
    </>
  );
};

export default ShowCount;
