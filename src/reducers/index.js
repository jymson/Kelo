import { combineReducers } from 'redux';
import KetoLocationsReducer from './reducer_ketolocations';

const rootReducer = combineReducers({
  ketoLocations: KetoLocationsReducer
});

export default rootReducer;
