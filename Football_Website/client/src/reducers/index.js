import {combineReducers} from 'redux';
import footbalReducer from './footbalReducer';


export default combineReducers ({
  footbal: footbalReducer
});
