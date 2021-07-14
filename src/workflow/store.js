import { createStore, combineReducers } from 'redux';

// ===================
import moviesList from './movies-reducer';

const reducers = combineReducers({
    moviesList: moviesList,
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