import { 
	LIST_ERROR, 
	LIST_IS_LOADING, 
	LIST_FETCH_SUCCESS, 
	FILTER_CATEGORIES_MULTIPLE_KEYWORDS, 
	FILTER_CATEGORIES_ONE_KEYWORD,
	FILTER_PRICE_RANGE,
	FILTER_SIZE, 
	RESET_KEYWORDS,
	ITEM_ERROR,
	ITEM_IS_LOADING,
	FILTER_ARGS,
	FILL_FILTER,
	ITEM_FETCH_SUCCESS
} from '../constants.js';

export const listHasError = (state = false, action) => {
  switch (action.type) {
		case LIST_ERROR:
				return action.hasErrored;

		default:
				return state;
  }
};

export const itemHasError = (state = false, action) => {
  switch (action.type) {
		case ITEM_ERROR:
				return action.hasErrored;

		default:
				return state;
  }
};

export const listIsLoading = (state = false, action) => {
  switch (action.type) {
		case LIST_IS_LOADING:
				return action.isLoading;

		default:
				return state;
  }
};

export const itemIsLoading = (state = false, action) => {
  switch (action.type) {
		case ITEM_IS_LOADING:
				return action.isLoading;

		default:
				return state;
  }
};

export const sortArgsForFilter = (state = 'titleAsc', action) => {
	switch (action.type) {
		case FILTER_ARGS:
			return action.sortArg;

		default:
			return state;
	}
};

export const sortSizeForFilter = (state = 'All', action) => {
	switch (action.type) {
		case FILTER_SIZE:
			return action.getSize;

		default:
			return state;
	}
};

export const reducerPriceRangeFilter = (state = 200, action) => {
	switch (action.type) {
		case FILTER_PRICE_RANGE:
			return action.getPriceRange;

		default:
			return state;
	}
};

export const keywordsForFilter = (state = [], action) => {
	switch (action.type) {
		
		case FILTER_CATEGORIES_MULTIPLE_KEYWORDS:
			return (state.includes(action.keywords) ?
			state = state.filter(x => x !== action.keywords) : 
			state = [...state, action.keywords])

		case FILTER_CATEGORIES_ONE_KEYWORD:
			return state = [action.keywords]
		
		case FILL_FILTER:
			return state = action.keywords

		case RESET_KEYWORDS:
			return state = []

		default:
			return state;
	}
};
  
export const listFetchDataSuccess = (state = [], action) => {
  switch (action.type) {
		case LIST_FETCH_SUCCESS:
			return action.items;

		default:
			return state;
  }
};

export const itemFetchDataSuccess = (state = [], action) => {
  switch (action.type) {
		case ITEM_FETCH_SUCCESS:
			return action.item;

		default:
			return state;
  }
};
