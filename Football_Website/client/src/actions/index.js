import axios from 'axios';
import { FETCH_FOOTBAL, FETCH_LEAGUE_STATS, FETCH_TV_SHOWS, FETCH_SPANISH_TEAMS } from './types';

export const fetchFootbal = () => async dispatch => {
    const res = await axios.get('https://www.thesportsdb.com/api/v1/json/1/searchevents.php?e=Arsenal_vs_Chelsea');
  
    dispatch({ type: FETCH_FOOTBAL, payload: res.data });
};
export const fetchLeagueStats = () => async dispatch => {
    const res = await axios.get('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4335&s=1920');
  
    dispatch({ type: FETCH_LEAGUE_STATS, payload: res.data });
};
export const fetchTvShows = () => async dispatch => {
    //There are not todays values in the api so i hardcode the date to get results.

    // const today = new Date();
    // let date = (today.getFullYear()) + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const res = await axios.get('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4335');
    dispatch({ type: FETCH_TV_SHOWS, payload: res.data });
};
export const fetchSpanishTeams = () => async dispatch => {
    const res = await axios.get('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4335');

    dispatch({ type: FETCH_SPANISH_TEAMS, payload: res.data });
};
