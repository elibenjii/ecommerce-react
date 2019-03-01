import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react'
import { 
  ButtonDropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem
} from 'reactstrap';

const propTypes = {
  dispatchToSortList: PropTypes.func.isRequired,
  sortArgsForFilter: PropTypes.string.isRequired,
};

class ButtonSorter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dropdownShowNumberItemsOpen: false,
      dropdownSortOpen: false
    };
  }

  render() {
    const { dispatchToSortList, sortArgsForFilter } = this.props
    const { dropdownSortOpen } = this.state

    const dropDownWithArrow = (x) => 
    x.indexOf("Asc") > 0 ? 
    <Fragment><img src= "/down-arrow.png" alt="" />{' '+x}</Fragment> :
    <Fragment><img src= "/up-arrow.png" alt="" />{' '+x}</Fragment>
  

    const eachDropDown = (optionsArray) => optionsArray.map(x=>( 
      <DropdownItem onClick={()=>dispatchToSortList(x)} key={x}>
        {dropDownWithArrow(x)}
      </DropdownItem>
    ))

    return (
      <ButtonDropdown  isOpen={dropdownSortOpen} toggle={()=>this.setState({dropdownSortOpen: !dropdownSortOpen})}>
        <DropdownToggle caret color="light" >
          Sort: {dropDownWithArrow(sortArgsForFilter)}
        </DropdownToggle>
        <DropdownMenu>
          {eachDropDown(['titleAsc', 'titleDesc', 'priceAsc', 'priceDesc'])}
        </DropdownMenu>
      </ButtonDropdown>
    );
  };
};

ButtonSorter.propTypes = propTypes;

export default ButtonSorter;