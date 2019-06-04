import { FETCH_ANNOUNCEMENT } from '../actions/types';
import { Firestore } from '../components/Firebase/firebaseConfig';

const INITIAL_STATE = {
    announcements: null,
}



const announcementReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ANNOUNCEMENT:
            return action.payload;
        default:
            return state;
    }
}

export default announcementReducer;