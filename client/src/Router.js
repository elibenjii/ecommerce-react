import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Empty from './components/Empty';
import Loadable from 'react-loadable';
import NavbarContainer from './containers/Navbar-container';
import Footer from './components/Footer';
import './style/transition.css';


const Loading = () => <div style={{height: '1000px'}}></div>;

const ItemContainer = Loadable({
  loader: () => import('./containers/Item-container'),
  loading: Loading
});

const CheckoutContainer = Loadable({
  loader: () => import('./containers/Checkout-container'),
  loading: Loading
});

const CartContainer = Loadable({
  loader: () => import('./containers/Cart-container'),
  loading: Loading
});

const HomepageContainer = Loadable({
  loader: () => import('./containers/Homepage-container'),
  loading: Loading
});

const ItemsListContainer = Loadable({
  loader: () => import('./containers/Items-list-container'),
  loading: Loading
});

const ItemsListGenderHomepage = Loadable({
  loader: () => import('./components/Items-list-gender-homepage'),
  loading: Loading
});

const AdminContainer = Loadable({
  loader: () => import('./containers/Admin-container'),
  loading: Loading
});

const Secret = Loadable({
  loader: () => import('./components/Secret'),
  loading: Loading
});

const Router = () => (
  <div>
    <NavbarContainer />
      <Switch>
        <Route exact path='/' component={HomepageContainer} />
        <Route exact path='/productslist' component={ItemsListContainer} />
        <Route exact path='/item/:id/:item' component={ItemContainer} />
        <Route exact path='/checkout' component={CheckoutContainer} />
        <Route exact path='/cart' component={CartContainer} />
        <Route exact path='/productslist/:gender' component={ItemsListContainer} />
        <Route exact path='/category/:gender' component={ItemsListGenderHomepage} />
        <Route exact path='/admin' component={AdminContainer} />
        <Route exact path='/dashboard' component={Secret} />
        <Route component={Empty}/>
      </Switch>
    <Footer />
  </div>
);

export default Router;
