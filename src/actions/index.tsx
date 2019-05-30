import { FETCH_ANNOUNCEMENT, FETCH_USER } from './types';
import { announcementCollection, authRef } from '../components/Firebase/firebaseConfig';
import Firebase from 'firebase'


export const addAnnouncement = newAnnouncement => async dispatch => {

    let timestamp = Firebase.firestore.Timestamp.fromMillis(Date.now());

    announcementCollection.add({
        text: newAnnouncement,
        date: timestamp,
    });
};

export const fetchUser = () => dispatch => {

    authRef.onAuthStateChanged(user =>{
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