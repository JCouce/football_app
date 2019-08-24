import { FETCH_SPANISH_TEAMS } from '../actions/types';

export default function(state = null, action){
    switch (action.type) {
        case FETCH_SPANISH_TEAMS:
            return action.payload || false;
        default:
            return state
    }
}
