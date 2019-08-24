import {combineReducers} from 'redux';
import footbalReducer from './footbalReducer';
import leagueStatsReducer from './leagueStatsReducer';
import tvShowsReducer from './tvShowsReducer';


export default combineReducers ({
  footbal: footbalReducer,
  leagueStats: leagueStatsReducer,
  shows: tvShowsReducer
});
