import { createStore, combineReducers } from 'redux';
import jobReducer from './reducers/jobReducer';

// Combine multiple reducers if needed
const rootReducer = combineReducers({
  job: jobReducer,
  // Add other reducers here
});

const store = createStore(rootReducer);

export default store;