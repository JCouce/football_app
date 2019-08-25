import { FETCH_LEAGUE_STATS } from '../actions/types';

export default function(state = null, action){
    switch (action.type) {
        case FETCH_LEAGUE_STATS:
            return action.payload || false;
        default:
            return state
    }
}
