
import { Action } from "../features/phones/types/Action";
import { State } from "../features/phones/types/State";

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'get_phones': {
      return {
        ...state,
        phones: action.payload,
      }
    }
    case 'post_phone': {
      return {
        ...state,
        phones: [...state.phones, action.payload]
      }
    }
    case 'delete_phone': {
      return {
        ...state,
        phones: state.phones.filter((phone) => phone.id !== action.payload),
      }
    }
    case 'put_phone': {
      return {
        ...state,
        phones: [...state.phones.filter((phone) => phone.id !== action.payload.id), action.payload]
      }
    }
    default:
      return state;
  }


}

export default reducer;