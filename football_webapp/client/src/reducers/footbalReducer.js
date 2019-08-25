import { FETCH_FOOTBAL } from '../actions/types';

export default function(state = null, action){
    switch (action.type) {
        case FETCH_FOOTBAL:
            return action.payload || false;
        default:
            return state
    }
}
