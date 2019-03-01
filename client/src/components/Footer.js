import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const styles = {
    backgroundColor: '#072a48',
    paddingTop: '50px',
    paddingBottom: '50px',
    color: 'white',
    textAlign: 'center'
}
 
const Footer = () => (
  <div style={styles}>
    <Container>
      <Row>
        <Col md='12' style={{textAlign: 'center', paddingBottom:'30px'}}><b>Your footer</b></Col>
      </Row> 
      <Row>
        <Col md='4'>About the brand</Col>
        <Col md='4'>Career</Col>
        <Col md='4'>Instagram</Col>
      </Row>
      <Row>
        <Col md='4'>Order status</Col>
        <Col md='4'>Our ecological actions</Col>
        <Col md='4'>Facebook</Col>
      </Row>
      <Row>
        <Col md='4'>Contact us</Col>
        <Col md='4'>I like Som tum</Col>
        <Col md='4'>Pinterest</Col>
      </Row>
      <Row>
        <Col md='12' style={{textAlign: 'center', paddingTop:'30px'}}>Copyright your website © 2018 All Rights Reserved</Col>
      </Row>
    </Container>
  </div>    
)

export default Footer;