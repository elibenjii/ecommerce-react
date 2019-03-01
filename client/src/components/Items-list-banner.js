import PropTypes from 'prop-types';
import React from 'react'
import { 
  Jumbotron, 
  Container,
} from 'reactstrap';
import {
  isMobile
} from "react-device-detect";
import ItemsListHtagsLabels from './Items-list-htags-labels'

const propTypes = {
  gender: PropTypes.string,
  reducerPriceRangeFilter: PropTypes.number,
  sortArgsForFilter: PropTypes.string,
  sortSizeForFilter: PropTypes.string,
  keywordsForFilter: PropTypes.array,
}

const styles={
  bannerCoverMenPc: {
    backgroundImage: 'url("/images/banner-men-pc.jpg")',
    backgroundSize: 'cover'
  },
  bannerCoverWomenPc: {
    backgroundImage: 'url("/images/banner-women-pc.jpg")',
    backgroundSize: 'cover'
  },
  bannerCoverMenMobile: {
    backgroundImage: 'url("/images/banner-men-mobile.jpg")',
    backgroundSize: 'cover'
  },
  bannerCoverWomenMobile: {
    backgroundImage: 'url("/images/banner-women-mobile.jpg")',
    backgroundSize: 'cover'
  },
  textBanner: {
    textShadow: "3px 3px 3px grey",
    color:'white'
  },
  titleH1Pc: {
    fontSize: '80px'
  }
}

const ItemsListBanner = ({
  gender,
  reducerPriceRangeFilter,
  sortArgsForFilter,
  sortSizeForFilter,
  keywordsForFilter
}) => {

  const { bannerCoverMenPc, bannerCoverMenMobile, bannerCoverWomenMobile, bannerCoverWomenPc,  textBanner, titleH1Pc } = styles
  const backgroundJumbotron = 
    isMobile && gender === 'men' ?  bannerCoverMenMobile :
    isMobile && gender === 'women' ?  bannerCoverWomenMobile :
    isMobile === false && gender === 'men' ? bannerCoverMenPc :
    bannerCoverWomenPc

  return (
    <Jumbotron style={backgroundJumbotron}>
      <Container style={textBanner}>
        <h1 className="display-3" style={titleH1Pc}>{gender === 'men' ? 'Men' : 'Women' }</h1>
        <ItemsListHtagsLabels 
          reducerPriceRangeFilter={reducerPriceRangeFilter}
          sortArgsForFilter={sortArgsForFilter}
          sortSizeForFilter={sortSizeForFilter}
          keywordsForFilter={keywordsForFilter}
        />
      </Container>
    </Jumbotron>
  )
};

ItemsListBanner.propTypes = propTypes;

export default ItemsListBanner;