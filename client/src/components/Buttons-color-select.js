import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  colors: PropTypes.array.isRequired,
  selectedColor: PropTypes.string.isRequired,
  handleColorSelection: PropTypes.func.isRequired,
  validateColorSelection: PropTypes.func.isRequired,
};

const styles = (x, selectedColor) => ({
  backgroundColor: x, 
  margin:'3px', 
  width: '30px', 
  height: '30px', 
  display: 'inline-block',
  cursor: 'pointer',
  boxShadow: x === selectedColor ? '0px 0px 6px 1px rgba(0,0,0,1)' : '0px 0px 2px 1px rgba(0,0,0,1)' 
});

const ButtonsColorSelect = ({ colors, handleColorSelection, selectedColor, validateColorSelection }) => (
  colors.map(x => <div key={x} onClick={()=>{return (handleColorSelection(x), validateColorSelection('valid'))}} style={styles(x, selectedColor)} />)
);

ButtonsColorSelect.propTypes = propTypes;

export default ButtonsColorSelect;
