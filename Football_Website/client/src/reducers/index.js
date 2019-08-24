import {combineReducers} from 'redux';
import footbalReducer from './footbalReducer';
import leagueStatsReducer from './leagueStatsReducer';
import tvShowsReducer from './tvShowsReducer';
import spanishTeamsReducer from './spanishTeamsReducer';
import playersTeamReducer from './playersTeamReducer';


export default combineReducers ({
  footbal: footbalReducer,
  leagueStats: leagueStatsReducer,
  shows: tvShowsReducer,
  spanishTeams: spanishTeamsReducer,
  players: playersTeamReducer
});
