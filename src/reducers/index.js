import { combineReducers } from 'redux';
import KetoLocationsReducer from './reducer_ketolocations';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  ketoLocations: KetoLocationsReducer,
  form: formReducer
});

export default rootReducer;
