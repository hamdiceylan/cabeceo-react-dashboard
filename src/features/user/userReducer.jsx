import { createReducer } from '../../app/common/util/reducerUtil'
import { FETCH_USER } from './userConstants'
  
const initialState = [];
  
export const fetchUsers = (state, payload) => {
    return payload.users;
}

export default createReducer(initialState, {
    [FETCH_USER]:fetchUsers
})