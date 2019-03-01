import React from 'react';
import { Helmet } from 'react-helmet';
import HeroBanner from '../components/Hero-banner';
import CarouselHomepage from '../components/Carousel-homepage';


const styles = {marginTop:'-33px'};

const Homepage = () => (
  <div>
    <Helmet>
      <title>Demo Ecommerce template</title>
      <meta name="description" content="Demo Ecommerce template" />
    </Helmet>
    <HeroBanner />
    <div style={styles}><CarouselHomepage /></div>
  </div>
);

export default Homepage;