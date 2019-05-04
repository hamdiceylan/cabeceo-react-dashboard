import { FETCH_USER  } from './userConstants'
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions'
import firebase from '../../app/config/firebase'

export const getUsers = () => 
async (dispatch, getState) => {
    const firestore = firebase.firestore();
    const usersRef = firestore.collection('users');
    try{
        dispatch(asyncActionStart())
        let query = usersRef.orderBy('username');


        let querySnap = await query.get();

        if(querySnap.docs.length === 0){
            dispatch(asyncActionFinish())
            return querySnap;
        }

        let users = [];
        
        for(let i=0; i < querySnap.docs.length; i++) {
            let user = {...querySnap.docs[i].data(), id: querySnap.docs[i].id};
            users.push(user);
        }
        dispatch({type: FETCH_USER,payload: {users}})
        dispatch(asyncActionFinish())
        return querySnap;

    } catch(error){
        dispatch(asyncActionError())
        console.log(error);
    }
}
