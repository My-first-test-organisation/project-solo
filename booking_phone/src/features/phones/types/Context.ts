import { Action } from "./Action";
import { State } from "./State";

export type Context = {
 state: State;
 dispatch: (obj: Action) => void
}

