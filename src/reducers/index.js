import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import MainReducers from './MainReducers';


const allReducers = combineReducers({
  form: formReducer,
  main: MainReducers,
});

export default allReducers;