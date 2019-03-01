import { 
	LIST_ERROR, 
	LIST_IS_LOADING, 
	LIST_FETCH_SUCCESS, 
	FILTER_ARGS, 
  FILTER_CATEGORIES_MULTIPLE_KEYWORDS,
  FILTER_CATEGORIES_ONE_KEYWORD,
  FILTER_SIZE,
  FILTER_PRICE_RANGE,
  RESET_KEYWORDS,
  ITEM_ERROR,
  ITEM_IS_LOADING,
  FILL_FILTER,
  ITEM_FETCH_SUCCESS
} from '../constants'; 

export const listHasError = bool => ({
  type: LIST_ERROR,
  hasErrored: bool
});

export const itemHasError = bool => ({
  type: ITEM_ERROR,
  hasErrored: bool
});

export const listIsLoading = bool => ({
  type: LIST_IS_LOADING,
  isLoading: bool
});

export const itemIsLoading = bool => ({
  type: ITEM_IS_LOADING,
  isLoading: bool
});

export const listFetchDataSuccess = items => ({
  type: LIST_FETCH_SUCCESS,
  items
});

export const listFilteredByKeywords = items => ({
  type: LIST_FETCH_SUCCESS,
  items
});

export const actionSizeForFilter = getSize => ({
  type: FILTER_SIZE,
  getSize
});

export const actionPriceRangeFilter = getPriceRange => ({
  type: FILTER_PRICE_RANGE,
  getPriceRange
});

export const sortArgsForFilter = sortArg => ({
  type: FILTER_ARGS,
  sortArg
});

export const keywordsForFilter = keywords => ({
  type: FILTER_CATEGORIES_MULTIPLE_KEYWORDS,
  keywords
});

export const oneKeywordForFilter = keywords => ({
  type: FILTER_CATEGORIES_ONE_KEYWORD,
  keywords
});

export const actionFillFilters = keywords => ({
  type: FILL_FILTER,
  keywords
});

export const resetKeywords = () => ({ type: RESET_KEYWORDS });

export const itemFetchDataSuccess = item => ({
  type: ITEM_FETCH_SUCCESS,
  item
});

export const fetchDataApi = url => {
  return dispatch => {
    dispatch(listIsLoading(true));
    fetch(url)
      .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(listIsLoading(false)) && dispatch(listFetchDataSuccess(items)))
      .catch(() => dispatch(listHasError(true)));
  }
};

export const fetchItemApi = url => {
  return dispatch => {
    dispatch(itemIsLoading(true))
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(itemFetchDataSuccess(items)))
      .then(() => dispatch(itemIsLoading(false)))
      .catch(() => dispatch(itemHasError(true)));
  }
};