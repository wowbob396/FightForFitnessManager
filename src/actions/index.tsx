import { FETCH_ANNOUNCEMENT } from './types';
import { announcementCollection } from '../components/Firebase/firebaseConfig';
import Firebase from 'firebase'


export const addAnnouncement = newAnnouncement => async dispatch => {

    announcementCollection.get().then(
        documents => {
            console.log(documents.docs);
        }
    );

    let timestamp = Firebase.firestore.Timestamp.fromMillis(Date.now());

    announcementCollection.add({
        text: newAnnouncement,
        date: timestamp,
    });
};