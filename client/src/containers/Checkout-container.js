import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { selectorTotalAmountCart } from '../selectors/selector_list_statistics';
import Checkout from '../components/Checkout';
import { addUserAddress } from '../actions/UsersActions';

class CheckoutContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      step1: true,
      step2: false,
      step2Unlock: false,
      step3: false,
      step3Unlock: false,
      email: '',
      emailIsValid: true,
      firstName: 'fgsfdsf',
      lastName: 'fsdfsd',
      country: 'USA',
      city: 'fdsfdsfdsf',
      province: 'fdsfdsf',
      postalCode: 8767671167,
      phoneNumber: 17671651,
      address1: 'qdfsqfdsqfcfdxsf',
      address2: 'xsfdsxfsdfxsdf',
      shippingMethod: 2,
      formIsValid: false,
      totalDelivery: 5
    }
  };

  onChangeEmail = e => this.setState({ email: e.target.value});
  onChangeFirstName = e => this.setState({ firstName: e.target.value });
  onChangeLastName = e => this.setState({ lastName: e.target.value });
  onChangeCountry = e => this.setState({ country: e.target.value });
  onChangeCity = e => this.setState({ city: e.target.value });
  onChangeProvince = e => this.setState({ province: e.target.value });
  onChangePostalCode = e => this.setState({ postalCode: Number(e.target.value) });
  onChangePhoneNumber = e => this.setState({ phoneNumber: Number(e.target.value) });
  onChangeAdress1 = e => this.setState({ address1: e.target.value });
  onChangeAdress2 = e => this.setState({ address2: e.target.value });
  onChangeShipppingMethod = shippingMethod => this.setState({ shippingMethod });
  handleEmailValidation = emailIsValid => this.setState({ emailIsValid });
  formValidator = formIsValid => this.setState({ formIsValid });

  toggle = step => {
    step === 'step1' ? this.setState({ 
      step1: true,
      step2: false,
      step3: false
    }) : 
    step === 'step2' ? this.setState({ 
      step1: false,
      step2: true,
      step3: false
    }) :
    step === 'step3' && this.setState({ 
      step1: false,
      step2: false,
      step3: true
    }) 
  };

  stepsUnlock = step => {
    step === 'step2' ? this.setState({ step2Unlock: true, step1: false, step2: true, step3: false }) :
    step === 'step3' && this.setState({ step3Unlock: true, step1: false, step2: false, step3: true })
  };

  onSubmitOrder = () => {
    const { email, firstName, lastName, country, city, province, postalCode, phoneNumber, address1, address2, totalDelivery } = this.state;
    const { getCart, selectorTotalAmountCart } = this.props;
    const ref = Math.random().toString(36).substring(5)+ Date.now();
    axios.post('/api/add/orders', {
      ref,
      customerinfo: {email, firstName, lastName, country, city, province, postalCode, phoneNumber, address1, address2},
      order: getCart.map(x => ({idItem: x._id, titleItem:x.title, selectedSize:x.selectedSize, selectedColor:x.selectedColor, price:x.price, quantity:x.quantity})), 
      totalDelivery,
      totalAmount: selectorTotalAmountCart
    })
    .catch(error => {
      console.log(error);
    });
  };

  render() {
    return (
      <div>
      <Checkout 
        {...this.state} 
        {...this.props} 
        onChangeFirstName={this.onChangeFirstName}
        onChangeLastName={this.onChangeLastName}
        onChangeCountry={this.onChangeCountry}
        onChangeCity={this.onChangeCity}
        onChangeProvince={this.onChangeProvince}
        onChangePostalCode={this.onChangePostalCode}
        onChangePhoneNumber={this.onChangePhoneNumber}
        onChangeAdress1={this.onChangeAdress1}
        onChangeAdress2={this.onChangeAdress2}
        onChangeShipppingMethod={this.onChangeShipppingMethod}
        stepsUnlock={this.stepsUnlock}
        toggle={this.toggle}
        onChangeEmail={this.onChangeEmail}
        handleEmailValidation={this.handleEmailValidation}
        formValidator={this.formValidator}
        onSubmitOrder={this.onSubmitOrder}
      />
      </div>

    )
  }
};


const mapStateToProps = state => ({ 
  getCart: state.cartReducer,
  getUserAddress: state.getUserAddress,
  selectorTotalAmountCart: selectorTotalAmountCart(state)
});

const mapDispatchToProps = dispatch => ({
  addUserAddress: x => dispatch(addUserAddress(x))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);

