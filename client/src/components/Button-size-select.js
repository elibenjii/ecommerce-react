import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const propTypes = {
  handleSizeSelection: PropTypes.func.isRequired,
  sizesArray: PropTypes.array.isRequired,
  selectedSize: PropTypes.string.isRequired,
  validateSizeSelection: PropTypes.func.isRequired
};

class ButtonSizeSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  render() {
    const { handleSizeSelection, sizesArray, selectedSize, validateSizeSelection} = this.props;
    const dropDownList = sizesArray.map(x=>
      <DropdownItem key={x} onClick={()=>{return (handleSizeSelection(x), validateSizeSelection('valid'))}}>{x}</DropdownItem>
    );
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret outline color='secondary'>
          Size: {selectedSize.length>0 ? selectedSize : 'Click to choose'}
        </DropdownToggle>
        <DropdownMenu>
          {dropDownList}
        </DropdownMenu>
      </Dropdown>
    );
  };
};

ButtonSizeSelect.propTypes = propTypes;

export default ButtonSizeSelect;