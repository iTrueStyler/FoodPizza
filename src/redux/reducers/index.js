import {combineReducers} from 'redux';
import filterReducer from './filters.js';
import pizzasReducer from './pizzas.js';


const rootReducer = combineReducers({
    filter:filterReducer,
    pizzas:pizzasReducer
});
export default rootReducer;