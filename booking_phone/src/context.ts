import { createContext } from "react";
import { Context } from "./features/phones/types/Context";

const initialContext: Context = {
 state: {
  phones: [],
 },
 dispatch: () => {}
}

const StateContext = createContext(initialContext);
export default StateContext;