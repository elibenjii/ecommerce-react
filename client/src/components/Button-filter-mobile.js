import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import ItemsListFilterKeywords from './Item-list-filter-keywords'
import ItemsListFilterSize from './Items-list-filter-size'
import ItemListFilterPriceBar from './Item-list-filter-priceBar'

const propTypes = {
  dispatchSize: PropTypes.func.isRequired,
  gender: PropTypes.string.isRequired,
  sortSizeForFilter: PropTypes.string.isRequired,
  keywordsSelectAction: PropTypes.func.isRequired,
  categoriesProducts: PropTypes.object.isRequired,
  keywordsForFilter: PropTypes.array.isRequired,
  actionPriceRangeFilter: PropTypes.func.isRequired,
  reducerPriceRangeFilter: PropTypes.number.isRequired,
  listLength: PropTypes.number.isRequired
};

class ButtonFilterMobile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {

    const { 
      dispatchSize,
      gender,
      sortSizeForFilter, 
      keywordsSelectAction, 
      categoriesProducts,
      keywordsForFilter,
      actionPriceRangeFilter,
      reducerPriceRangeFilter,
      listLength
    } = this.props;


    return (
      <div>
        <Button color="danger" style={{marginRight:'20px'}} onClick={this.toggle}>Filter the list</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Results: <b>{listLength}</b></ModalHeader>
          <ModalBody>
            <h4>Categories</h4>
              <ItemsListFilterKeywords 
                gender={gender} 
                keywordsForFilter={keywordsForFilter}
                keywordsSelectAction={keywordsSelectAction}
                categoriesProducts={categoriesProducts}
              />
            <h4>Size</h4>
              <ItemsListFilterSize 
                dispatchSize={dispatchSize} 
                sortSizeForFilter={sortSizeForFilter}
              />
            <h4>Price {`< ${reducerPriceRangeFilter}$`}</h4>    
              <ItemListFilterPriceBar 
                actionPriceRangeFilter={actionPriceRangeFilter}
                reducerPriceRangeFilter={reducerPriceRangeFilter}
              />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

ButtonFilterMobile.propTypes = propTypes;

export default ButtonFilterMobile;