import Child from "./Child";
import "./App.css";
import { TransactionProvider } from "./TransactionContext";
const App = () => {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
};

export default App;
