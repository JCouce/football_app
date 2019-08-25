import axios from 'axios';
import {
  FETCH_FOOTBAL,
  FETCH_LEAGUE_STATS,
  FETCH_TV_SHOWS,
  FETCH_SPANISH_TEAMS,
  FETCH_PLAYERS_ID,
  FETCH_ONE_PLAYER,
} from './types';

export const fetchFootbal = () => async dispatch => {
  const res = await axios.get (
    'https://www.thesportsdb.com/api/v1/json/1/searchevents.php?e=Arsenal_vs_Chelsea'
  );

  dispatch ({type: FETCH_FOOTBAL, payload: res.data});
};
export const fetchLeagueStats = () => async dispatch => {
  const res = await axios.get (
    'https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4335&s=1920'
  );

  dispatch ({type: FETCH_LEAGUE_STATS, payload: res.data});
};
export const fetchTvShows = () => async dispatch => {
  // const today = new Date();
  // let date = (today.getFullYear()) + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const res = await axios.get (
    'https://www.thesportsdb.com/api/v1/json/1/eventstv.php?d=2018-07-07'
  );
  dispatch ({type: FETCH_TV_SHOWS, payload: res.data});
};
export const fetchSpanishTeams = () => async dispatch => {
  const res = await axios.get (
    'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4335'
  );

  dispatch ({type: FETCH_SPANISH_TEAMS, payload: res.data});
};
export const fetchPlayersById = id => async dispatch => {
  const res = await axios.get (
    'https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=' + id
  );

  dispatch ({type: FETCH_PLAYERS_ID, payload: res.data});
};

export const fetchOnePlayerById = id => async dispatch => {
  const res = await axios.get (
    'https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=' + id
  );
  let firstPlayer = res.data.players[0];
  dispatch ({type: FETCH_ONE_PLAYER, payload: firstPlayer});
};
