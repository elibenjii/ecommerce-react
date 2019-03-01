import PropTypes from 'prop-types';
import React from 'react';
import { 
  Row, 
  Col, 
  Input, 
  Badge, 
  Button, 
  ListGroupItem, 
  Collapse, 
  Label, 
  Alert,
  FormGroup
} from 'reactstrap';

const propTypes = {
  addUserAddress: PropTypes.func.isRequired,
  step2: PropTypes.bool.isRequired,  
  step2Unlock: PropTypes.bool.isRequired, 
  firstName: PropTypes.string.isRequired, 
  lastName: PropTypes.string.isRequired, 
  country: PropTypes.string.isRequired, 
  city: PropTypes.string.isRequired, 
  province: PropTypes.string.isRequired, 
  postalCode: PropTypes.number.isRequired, 
  phoneNumber: PropTypes.number.isRequired, 
  address1: PropTypes.string.isRequired, 
  address2: PropTypes.string.isRequired, 
  shippingMethod: PropTypes.number.isRequired,
  formIsValid: PropTypes.bool.isRequired,
  onChangeFirstName: PropTypes.func.isRequired,
  onChangeLastName: PropTypes.func.isRequired,
  onChangeCountry: PropTypes.func.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  onChangeProvince: PropTypes.func.isRequired,
  onChangePostalCode: PropTypes.func.isRequired,
  onChangePhoneNumber: PropTypes.func.isRequired,
  onChangeAdress1: PropTypes.func.isRequired,
  onChangeAdress2: PropTypes.func.isRequired,
  onChangeShipppingMethod: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  stepsUnlock: PropTypes.func.isRequired,
  formValidator: PropTypes.func.isRequired
};

const CheckoutStepTwo = ({
  styles,
  step2,
  step2Unlock,
  toggle,
  stepsUnlock,
  onChangeFirstName,
  onChangeLastName,
  onChangeCountry,
  onChangeCity,
  onChangeProvince,
  onChangePostalCode,
  onChangePhoneNumber,
  onChangeAdress1,
  onChangeAdress2,
  onChangeShipppingMethod,
  firstName,
  lastName,
  country,
  city,
  province,
  postalCode,
  phoneNumber,
  address1,
  address2,
  shippingMethod,
  formValidator,
  formIsValid,
  addUserAddress
}) => {

  const validatorClient = {
    firstName: firstName.length > 2 && typeof firstName === 'string',
    lastName: lastName.length > 2 && typeof lastName === 'string',
    country: typeof country === 'string',
    city: city.length > 2 && typeof city === 'string',
    province: province.length > 2 && typeof province === 'string',
    postalCode: typeof postalCode === 'number',
    phoneNumber: typeof phoneNumber === 'number',
    address1: address1.length > 2 && typeof address1 === 'string'
  } 

  const warningValidator = (x) => {
    if(x) {
      if([...new Set(Object.entries(validatorClient).map(([k, v]) => (v)))].sort()[0] === false){
        return(
          <Row>
            <Alert color="danger">
            Please fill these fields correctly:
              {!validatorClient.firstName && <div>First Name</div>}
              {!validatorClient.lastName && <div>Last Name</div>}
              {!validatorClient.country && <div>Country</div>}
              {!validatorClient.city && <div>City</div>}
              {!validatorClient.province && <div>Province</div>}
              {!validatorClient.postalCode && <div>Postal Code</div>}
              {!validatorClient.phoneNumber && <div>Phone Number</div>}
              {!validatorClient.address1 && <div>Address1 field</div>}
            </Alert>
          </Row>
        )
      } else {
        return(
          <Alert color="success">
            Thank you! Click 'continue'
          </Alert>
        )
      }
    } 
  }

  return (
    <div style={styles.collapsePannel}>
    <ListGroupItem disabled={!step2}>
    <h3 style={styles.collapasePannelTitle} onClick={()=>step2Unlock && toggle('step2')}>
      <Badge color="secondary" pill size='sm'>2</Badge>  Shipping {}
    </h3>
    <Collapse isOpen={step2}>
      <Row>
        <Col md={6} style={styles.formFieldsSpace}>
          <Label for="First name">First name</Label>
          <Input type='text' onChange={onChangeFirstName} value={firstName} />
        </Col>
        <Col md={6} style={styles.formFieldsSpace}>
          <Label for="exampleEmail">last Name</Label>
          <Input type='text' onChange={onChangeLastName} value={lastName} />
        </Col>
        <Col md={12} style={styles.formFieldsSpace}>
          <Label for="exampleSelect">Country</Label>
          <Input type="select" name="select" onChange={onChangeCountry} value={country}>
            <option value='USA'>USA</option>
            <option value='UK'>UK</option>
            <option value='FRANCE'>FRANCE</option>
            <option value='GERMANY'>GERMANY</option>
            <option value='AUSTRALIA'>AUSTRALIA</option>
          </Input>
        </Col>
        <Col md={6} style={styles.formFieldsSpace}>
          <Label>City</Label>
          <Input type='text' onChange={onChangeCity} value={city} />
        </Col>
        <Col md={6} style={styles.formFieldsSpace}>
          <Label>State/Province</Label>
          <Input type='text' onChange={onChangeProvince} value={province} />
        </Col>
        <Col md={6} style={styles.formFieldsSpace}>
          <Label>Postal Code</Label>
          <Input type='number' onChange={onChangePostalCode} value={postalCode} />
        </Col>
        <Col md={6} style={styles.formFieldsSpace}>
          <Label>Phone Number</Label>
          <Input type='number' onChange={onChangePhoneNumber} value={phoneNumber} />
        </Col>
        <Col md={12} style={styles.formFieldsSpace}>
          <Label for="Address1">Address1</Label>
          <Input type='text' onChange={onChangeAdress1} value={address1} />
        </Col>
        <Col md={12} style={styles.formFieldsSpace}>
          <Label>Address2</Label>
          <Input type='text' onChange={onChangeAdress2} value={address2} />
        </Col>
        <Col xs={6} style={styles.formFieldsSpace}>
          <FormGroup style={styles.formFieldsSpace}>
            <Label for="exampleCheckbox" ><u>Shipping Method</u></Label>
            <FormGroup check>
              <Label check>
                <Input type="radio" onChange={()=>onChangeShipppingMethod(1)} checked={shippingMethod === 1} />{' '}
                express (2 days shipping)
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" onChange={()=>onChangeShipppingMethod(2)} checked={shippingMethod === 2} />{' '}
                1 week shipping
              </Label>
            </FormGroup>
          </FormGroup>
        </Col>
        <div className='d-flex align-items-center'>
          <Button disabled={false} onClick={()=>{
              if([...new Set(Object.entries(validatorClient).map(([k, v]) => (v)))].sort()[0]){
                return stepsUnlock('step3'), addUserAddress({
                  firstName,
                  lastName,
                  country,
                  city,
                  province,
                  postalCode,
                  phoneNumber,
                  address1,
                  address2
                })
              } else {
                formValidator(true)
              }
              
              }}>continue</Button>
        </div>
      </Row>
      {warningValidator(formIsValid)}
    </Collapse>
  </ListGroupItem>
  </div>
  )
}

CheckoutStepTwo.propTypes = propTypes;

export default CheckoutStepTwo;
