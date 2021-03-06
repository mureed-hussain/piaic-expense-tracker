import { type } from "@testing-library/user-event/dist/type";
import React, { createContext, useReducer } from "react";
import TransReducer from "./TransReducer";

const initialTrans = [
  { amount: 400, desc: "Cash" },
  { amount: -160, desc: "Books" },
  { amount: -700, desc: "Camera" },
];

export const TransactionContext = createContext(initialTrans);

export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransReducer, initialTrans);

  function addTransaction(transObj) {
    dispatch({
      type: "ADD TRANSACTION",
      payload: {
        amount: transObj.amount,
        desc: transObj.desc,
      },
    });
  }
  return (
    <TransactionContext.Provider
      value={{
        tranactions: state,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
