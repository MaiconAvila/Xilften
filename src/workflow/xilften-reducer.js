const TV_SHOW_UPDATE_VALUE = "TV_SHOW_UPDATE_VALUE";
const MOVIES_UPDATE_VALUE = "MOVIE_UPDATE_VALUE";
const SEARCH_TV_UPDATE_VALUE = 'SEARCH_UPDATE_VALUE';
const SEARCH_MOVIE_UPDATE_VALUE = 'SEARCH_MOVIE_UPDATE_VALUE';
const LOAD_MORE_TV_UPDATE_VALUE = 'LOAD_MORE_TV_UPDATE_VALUE';
const LOAD_MORE_MOVIES_UPDATE_VALUE = 'LOAD_MORE_MOVIES_UPDATE_VALUE';
const RENDER_MODAL_UPDATE_VALUE = 'RENDER_MODAL_UPDATE_VALUE';
const TOGGLE_UPDATE_VALUE = 'TOGGLE_UPDATE_VALUE';
const VALUE_SEARCH_UPDATE_VALUE = 'VALUE_SEARCH_UPDATE_VALUE';
const ID_UPDATE_VALUE = 'ID_UPDATE_VALUE';
const DETAILS_UPDATE_VALUE = 'DETAILS_UPDATE_VALUE';
const DETAILS_VIDEO_UPDATE_VALUE = 'DETAILS_VIDEO_UPDATE_VALUE';
const DETAILS_IMAGE_UPDATE_VALUE = 'DETAILS_IMAGE_UPDATE_VALUE';
const SEASONS_UPDATE_VALUE = 'SEASONS_UPDATE_VALUE';
const SEASON_DETAILS_UPDATE_VALUE = 'SEASON_DETAILS_UPDATE_VALUE';
const SEASON_NUMBER_UPDATE_VALUE = 'SEASON_NUMBER_UPDATE_VALUE';
const EPISODES_UPDATE_VALUE = 'EPISODES_UPDATE_VALUE';

export const initialState = {
  tvShow: [],
  movies: [],
  searchTv: [],
  searchMovie: [],
  loadMoreTv: 5,
  loadMoreMovies: 5,
  renderModal: false,
  toggle: false,
	valueSearch: '',
	id: '',
	details: [],
	videoDetails: [],
	imageDetails: [],
	seasons: [],
	seasonDetails: [],
	seasonNumber: '',
	episodes: [],
};

export default function(state = initialState, action) {
	// console.log(action)
  switch (action.type) {
    case TV_SHOW_UPDATE_VALUE:
      return {
        ...state,
        tvShow: action.info.tvShow
      };
    case MOVIES_UPDATE_VALUE:
      return {
        ...state,
        movies: action.info.movies
			};
		case SEARCH_TV_UPDATE_VALUE:
			return {
				...state,
				searchTv: action.info.searchTv
			}
		case SEARCH_MOVIE_UPDATE_VALUE:
			return {
				...state,
				searchMovie: action.info.searchMovie
			}
		case LOAD_MORE_TV_UPDATE_VALUE:
			return {
				...state,
				loadMoreTv: action.info.loadMoreTv
			}
		case LOAD_MORE_MOVIES_UPDATE_VALUE:
			return {
				...state,
				loadMoreMovies: action.info.loadMoreMovies
			}
		case RENDER_MODAL_UPDATE_VALUE:
			return {
				...state,
				renderModal: action.info.renderModal
			}
		case TOGGLE_UPDATE_VALUE:
			return {
				...state,
				toggle: action.info.toggle
			}
		case VALUE_SEARCH_UPDATE_VALUE:
			return {
				...state,
				valueSearch: action.info.valueSearch
			}
		case ID_UPDATE_VALUE:
			return {
				...state,
				id: action.info,
			}
		case DETAILS_UPDATE_VALUE:
			return {
				...state,
				details: action.info,
			}
		case DETAILS_VIDEO_UPDATE_VALUE:
			return {
				...state,
				videoDetails: action.info,
			}
		case DETAILS_IMAGE_UPDATE_VALUE:
			return {
				...state,
				imageDetails: action.info,
			}
		case SEASONS_UPDATE_VALUE:
			return {
				...state,
				seasons: action.info,
			}
		case SEASON_DETAILS_UPDATE_VALUE:
			return {
				...state,
				seasonDetails: action.info,
			}
		case SEASON_NUMBER_UPDATE_VALUE:
			return {
				...state,
				seasonNumber: action.info,
			}
		case EPISODES_UPDATE_VALUE:
			return {
				...state,
				episodes: action.info,
			}
    default:
      return state;
  }
}

export const actionTvShow = info => ({
  type: TV_SHOW_UPDATE_VALUE,
  info
});

export const actionMovies = info => ({
  type: MOVIES_UPDATE_VALUE,
  info
});

export const actionSearchTv = info => ({
	type: SEARCH_TV_UPDATE_VALUE,
	info
})

export const actionSearchMovie = info => ({
	type: SEARCH_MOVIE_UPDATE_VALUE,
	info
})

export const actionLoadMoreTv = info => ({
	type: LOAD_MORE_TV_UPDATE_VALUE,
	info
})

export const actionLoadMoreMovies = info => ({
	type: LOAD_MORE_MOVIES_UPDATE_VALUE,
	info
})

export const actionRenderModal = info => ({
	type: RENDER_MODAL_UPDATE_VALUE,
	info
})

export const actionToggle = info => ({
	type: TOGGLE_UPDATE_VALUE,
	info
})

export const actionValueSearch = info => ({
	type: VALUE_SEARCH_UPDATE_VALUE,
	info
})

export const actionId = info => ({
	type: ID_UPDATE_VALUE,
	info
})

export const actionDetails = info => ({
	type: DETAILS_UPDATE_VALUE,
	info
})

export const actionVideoDetails = info => ({
	type: DETAILS_VIDEO_UPDATE_VALUE,
	info
})

export const actionImageDetails = info => ({
	type: DETAILS_IMAGE_UPDATE_VALUE,
	info
})

export const actionSeasons = info => ({
	type: SEASONS_UPDATE_VALUE,
	info
})

export const actionSeasonDetails = info => ({
	type: SEASON_DETAILS_UPDATE_VALUE,
	info
})

export const actionSeasonNumber = info => ({
	type: SEASON_NUMBER_UPDATE_VALUE,
	info
})

export const actionEpisodes = info => ({
	type: EPISODES_UPDATE_VALUE,
	info
})