import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  sortArgsForFilter, 
  keywordsForFilter, 
  actionSizeForFilter,
  oneKeywordForFilter, 
  fetchDataApi,
  actionPriceRangeFilter,
  actionFillFilters
} from '../actions/DataFetchingActions';
import { selectorListFilterSorter } from '../selectors/selector_list_products_filter_sorter';
import ItemsList from '../components/Items-list';

class ProductsListContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentPage: 1,
      itemsMaxPage: 9
    };
  };

  componentDidMount = () => this.props.fetchDataApi('/api/productsdata');


  currentPageHandler = x => {
    const { currentPage } = this.state;
    x === 'next' ? this.setState({currentPage: currentPage + 1}) :
    x === 'previous' ? this.setState({currentPage: currentPage - 1} ) : 
    x === 'empty' ? this.setState({currentPage: 1}) : 
    Number.isInteger(x) && this.setState({currentPage: x + 1}); 
  };
  
  render = () => <ItemsList 
      {...this.props} 
      {...this.state} 
      currentPageHandler={this.currentPageHandler} 
    />
  
}

const mapStateToProps = state => {
  const { keywordsForFilter, sortSizeForFilter, categoriesProducts, listIsLoading, reducerPriceRangeFilter,sortArgsForFilter } = state;
  return {
    listIsLoading,
    FilteredSortedList: selectorListFilterSorter(state),
    reducerPriceRangeFilter,
    keywordsForFilter,
    sortSizeForFilter,
    sortArgsForFilter,
    categoriesProducts
  }
};

const mapDispatchToProps = dispatch => ({
  fetchDataApi: url => dispatch(fetchDataApi(url)),
  oneKeywordForFilter: x => dispatch(oneKeywordForFilter(x)),
  actionFillFilters: x => dispatch(actionFillFilters(x)),
  dispatchSize: x => dispatch(actionSizeForFilter(x)), 
  actionPriceRangeFilter: x => dispatch(actionPriceRangeFilter(x)), 
  dispatchToSortList: x => dispatch(sortArgsForFilter(x)),
  keywordsSelectAction: x => dispatch(keywordsForFilter(x))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListContainer);

