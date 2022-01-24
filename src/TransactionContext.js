import { createContext } from "react/cjs/react.development";

const initialTrans = [
  { amount: 500, desc: "Cash" },
  { amount: -160, desc: "Books" },
  { amount: 700, desc: "Camera" },
];

export const TransactionContext = createContext(initialTrans);
