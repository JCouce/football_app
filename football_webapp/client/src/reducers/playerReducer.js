import { FETCH_ONE_PLAYER } from '../actions/types';

export default function(state = null, action){
    switch (action.type) {
        case FETCH_ONE_PLAYER:
            return action.payload || false;
        default:
            return state
    }
}
