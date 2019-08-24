import { FETCH_TV_SHOWS } from '../actions/types';

export default function(state = null, action){
    switch (action.type) {
        case FETCH_TV_SHOWS:
            return action.payload || false;
        default:
            return state
    }
}
