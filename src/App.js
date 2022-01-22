import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncExp } from "./components/IncExp";
import { Transcition } from "./components/Transcition";
import { AddTrans } from "./components/AddTrans";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncExp />
        <Transcition />
        <AddTrans />
      </div>
    </div>
  );
}

export default App;
