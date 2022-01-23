import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = () => {
  const { transaction } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((transaction) => (
          <li className="minus">
            Cash<span>$400</span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
