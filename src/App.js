import CounterProvider from "./context/counter/CounterProvider";
import ShowCount from "./components/showCount/ShowCount";
import Count from "./components/count/Count";
import "./App.css";

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <ShowCount />
        <Count />
      </div>
    </CounterProvider>
  );
}

export default App;
