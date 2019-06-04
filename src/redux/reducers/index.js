import { combineReducers } from 'redux';
import users from './usersReducer';

// The name given in the object here defines the property
// name to use inside the react components, so name them well.
const rootReducer = combineReducers({
  users,
});

export default rootReducer;
