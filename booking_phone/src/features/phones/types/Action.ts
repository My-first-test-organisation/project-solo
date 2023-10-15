import { Phone, PhoneId } from "./Phone";
import { User } from "./User";

export type Action =
 | { type: "get_phones", payload: Phone[] }
 | { type: 'post_phone', payload: Phone }
 | { type: 'delete_phone', payload: PhoneId }
 | { type: 'get_phone', payload: Phone }
 | { type: 'put_phone', payload: Phone }
 | { type: 'set_register', payload: User }
