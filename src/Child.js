import React from "react";
import { TransactionContext } from "./TransactionContext";

const Child = () => {
  return (
    <div className="container">
      <h1 className="exp-tra">Expense Tracker</h1>
      <h3>
        Your Balance
        <br />
        $260.00
      </h3>
      <div className="expense-container">
        <h3>
          INCOME
          <br />
          $500
        </h3>
        <h3>
          EXPENSE
          <br />
          $240
        </h3>
      </div>
      <div className="history">
        <h3>History</h3>
        <hr />
        <ul className="transaction-list">
          {transactions.map((transObj, ind) => {
            return (
              <li>
                <span>{transObj.desc}</span>
                <span>{transObj.amount}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="add-transaction">
        <h3>Add Transaction</h3>
        <hr />
      </div>
      <form className="transaction-form">
        <label>
          Enter Description
          <br />
          <input type="text" placeholder="Enter text" required></input>
        </label>
        <br />
        <label>
          Enter Amount
          <br />
          <input type="number" placeholder="Enter number" required></input>
        </label>
        <br />
        <input type="submit" value="Add Transaction"></input>
      </form>
    </div>
  );
};

export default Child;
