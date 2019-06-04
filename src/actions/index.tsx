import { FETCH_ANNOUNCEMENT, FETCH_USER } from './types';
import { Firestore, authRef } from '../components/Firebase/firebaseConfig';
import Firebase from 'firebase'

export const getAnnouncements = () => async dispatch => {
    Firestore.orderBy('date',"desc").get()
        .then(res =>{
            console.log(res.docs[0].data());
            dispatch({
                type: FETCH_ANNOUNCEMENT,
                payload: res.docs,
            });
        })
        .catch(error => {
            dispatch({
                type: FETCH_ANNOUNCEMENT,
                payload: null,
            });
        });
};

export const addAnnouncement = newAnnouncement => async dispatch => {

    let timestamp = Firebase.firestore.Timestamp.fromMillis(Date.now());

    Firestore.add({
        text: newAnnouncement,
        date: timestamp,
    });

    Firestore.get()
        .then( res => {
            console.log(res);
        })
        .catch(error => {
            alert(error);
        });
};

export const fetchUser = () => dispatch => {

    authRef.onAuthStateChanged(user => {
        if (user) {
            dispatch({
                type: FETCH_USER,
                payload: user,
            });
        } else {
            dispatch({
                type: FETCH_USER,
                payload: null,
            });
        }
    });

}

export const logIn = (email,password) => dispatch => {
    authRef
        .signInWithEmailAndPassword(email,password)
        .then( result => {})
        .catch(error => { alert(error)});
}

/**
 * This action simply calls the signOut method
 * for the firebase auth and updates the redux store to
 * reflect the changes accordingly
 */
export const logOut = () => dispatch => {
    authRef
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        console.log(error);
      });
  };