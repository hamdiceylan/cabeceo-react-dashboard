import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import asyncReducers from '../../features/async/asyncReducer'
import userReducer from '../../features/user/userReducer';


const rootReducers = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: FormReducer,
    async: asyncReducers,
    users: userReducer

});

export default rootReducers;