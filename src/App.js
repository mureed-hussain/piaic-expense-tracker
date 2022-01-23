import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncExp } from "./components/IncExp";
import { Transaction } from "./components/Transcation";
import { AddTrans } from "./components/AddTrans";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncExp />
        <Transaction />
        <AddTrans />
      </div>
    </GlobalProvider>
  );
}

export default App;
