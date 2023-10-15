import React from 'react'
import { AuthState } from '../features/auth/types/AuthState'
import { Action } from '../features/phones/types/Action'
import { State } from '../features/phones/types/State'

const initialState: AuthState = {
 user: undefined
}

function authReducer(state: AuthState, action: Action): AuthState {
 switch (action.type) {
  case 'set_register': {
   return {
    ...state,
    user: action.payload,
   }
  }
  default:
   return state;
 }
}

export default authReducer