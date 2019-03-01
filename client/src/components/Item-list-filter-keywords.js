import PropTypes from 'prop-types';
import React, { Component } from 'react'
import '../style/checkbox.min.css'

const propTypes = {
  gender: PropTypes.string.isRequired,
  keywordsSelectAction: PropTypes.func.isRequired,
  categoriesProducts: PropTypes.object.isRequired,
  keywordsForFilter: PropTypes.array.isRequired
};

class ItemsListFilterKeywords extends Component {

  constructor(props){
    super(props);
    this.state = {
      cat: this.props.categoriesProductslength === 0
    }
  };

  componentDidMount = () => {
    const { keywordsForFilter, actionFillFilters, categoriesProducts, gender } = this.props
    keywordsForFilter.length === 0 ? 
      gender === 'men' ? (() => {actionFillFilters(categoriesProducts.men)})() : (() => {actionFillFilters(categoriesProducts.women)})() 
      : console.log('gender err')
  };

  render(){
    
    const {   
      categoriesProducts,
      keywordsSelectAction, 
      keywordsForFilter,
      gender 
    } = this.props;

    const cat = () =>  gender === 'men' ? categoriesProducts.men : categoriesProducts.women;
    
    const stateIncludesCategory = category => keywordsForFilter.includes(category);

    return (
      cat().map(x=>
        <li style={{listStyleType: 'none'}} key={x}>
        <div className="pretty p-default p-smooth">
          {/* Empty onChange to avoid unrelevant msg error */}
          <input type="checkbox" onClick={()=>keywordsSelectAction(x)} checked={stateIncludesCategory(x)} onChange={()=>{}}/>
          <div className="state p-success-o">
              <label>{x}</label>
          </div>
        </div>
      </li>
      )
    );

  };
}; 

ItemsListFilterKeywords.propTypes = propTypes;

export default ItemsListFilterKeywords;

