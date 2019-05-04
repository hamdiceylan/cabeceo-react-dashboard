import { SubmissionError } from 'redux-form'

export const login = (creds) => {
    return async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        try {
            await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
            // dispatch(goToDashboard());
        } catch (error) {
            console.log(error);
            throw new SubmissionError({
                _error: error.message
            })
        }
    }
};

export const registerUser = (user) => async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    // const firestore = getFirestore();
    try{
        await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
        // await createdUser.updateProfile({
        //     displayName: user.displayName
        // })
        // let newUser = {
        //     displayName: user.displayName,
        //     createdAt: firestore.FieldValue.serverTimestamp()
        // };
        // await firestore.set(`users/${createdUser.uid}`,{...newUser});
    } catch(error) {
        console.log(error)
        throw new SubmissionError({
            _error: error.message
        })
    }
}

