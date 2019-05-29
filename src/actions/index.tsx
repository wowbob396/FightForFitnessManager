import { FETCH_ANNOUNCEMENT } from './types';
import { announcementCollection } from '../components/Firebase/firebaseConfig';

export const addAnnouncement = newAnnouncement => async dispatch => {

    //let document = ne
    //announcementCollection.add()
    announcementCollection.get().then(
        documents =>{
            console.log(documents.docs);
        }
    );

};