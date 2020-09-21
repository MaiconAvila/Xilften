import { createStore, combineReducers } from 'redux';

// ===================
import xilften from './xilften-reducer';

const reducers = combineReducers({
    xilften: xilften,
});
// ===================

const rootReducer = (state, action) => {
  if (action.meta && action.meta.logout) {
    state = undefined;
  }
  return reducers(state, action)
}

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  );
  return store;
}

export default configureStore({});