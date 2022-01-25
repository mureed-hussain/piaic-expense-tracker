import { type } from "@testing-library/user-event/dist/type";
import React, { createContext, useReducer } from "react";
import TransactionReducer from "./TransReducer";

const initialTrans = [
  { amount: 400, desc: "Cash" },
  { amount: -160, desc: "Books" },
  { amount: -700, desc: "Camera" },
];

export const TransactionContext = createContext(initialTrans);

export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransactionReducer, initialTrans);

  function addTransaction(transObj) {
    dispatch({
      type: "ADD TRANSACTION",
      payload: {
        amount: transObj.ampunt,
        desc: transObj.desc,
      },
    });
  }
  return (
    <TransactionContext.Provider
      value={{
        tranaction: state,
        addTransaction: addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
