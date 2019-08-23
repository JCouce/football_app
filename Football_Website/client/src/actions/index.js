import axios from 'axios';
import { FETCH_FOOTBAL} from './types';

export const fetchFootbal = () => async dispatch => {
    const res = await axios.get('https://www.thesportsdb.com/api/v1/json/1/searchevents.php?e=Arsenal_vs_Chelsea');
  
    dispatch({ type: FETCH_FOOTBAL, payload: res.data });
};
