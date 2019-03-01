import React, { Component } from 'react';
import { fetchItemApi } from '../actions/DataFetchingActions';
import { addToCart } from '../actions/CartActions';
import { connect } from 'react-redux';
import { selectorTotalItemsCart } from '../selectors/selector_list_statistics';
import Item from '../components/Item';

class ItemContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedSize: '',
      selectedColor: '',
      sizeSelectionMissingRemark: '',
      colorSelectionMissingRemark: ''
    }
  }

  componentDidMount = () => this.props.fetchItemApi(`/api/productsdata/${this.props.match.params.id}`);

  handleSizeSelection = selectedSize => this.setState({ selectedSize });

  handleColorSelection = selectedColor => this.setState({ selectedColor });

  validateSizeSelection = remark => remark === 'valid' ? this.setState({ sizeSelectionMissingRemark: '' }) : this.setState({ sizeSelectionMissingRemark: remark });

  validateColorSelection = remark => remark === 'valid' ? this.setState({ colorSelectionMissingRemark: '' }) : this.setState({ colorSelectionMissingRemark: remark }); 

  render = () => <Item {...this.props} {...this.state} handleSizeSelection={this.handleSizeSelection} handleColorSelection={this.handleColorSelection} validateSizeSelection={this.validateSizeSelection} validateColorSelection={this.validateColorSelection} />;

};

const mapStateToProps = state => ({
  infoItem: state.itemFetchDataSuccess,
  loading: state.itemIsLoading,
  errorFetching: state.itemHasErrorm,
  totalItemsSelectorStats: selectorTotalItemsCart(state)
});

const mapDispatchToProps = dispatch => ({
  fetchItemApi: url => dispatch(fetchItemApi(url)),
  addToCart: x => dispatch(addToCart(x))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

