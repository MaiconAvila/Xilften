const MOVIES_UPDATE_VALUE = "MOVIES_UPDATE_VALUE";

export const initialState = {
  movies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MOVIES_UPDATE_VALUE:
      return {
        ...state,
        movies: state.movies.concat(action.info.movies)
      };
    default:
      return state;
  }
}

export const allMovies = info => {
  return {
    type: MOVIES_UPDATE_VALUE,
    info
  };
};
