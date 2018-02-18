import { combineReducers } from 'redux';
import { navReducer } from './Nav.reducer';

export const appReducer = combineReducers({
    nav: navReducer
});
