import { combineReducers } from 'redux';
import users from './usersReducer';

/**
 * Combines our Reducers.
 * The name given in the object here defines the property
 * name to use inside the react components, so name them well.
 * TODO: Add more Reducers to give an example of combining.
 */
const rootReducer = combineReducers({
  users,
});

export default rootReducer;
