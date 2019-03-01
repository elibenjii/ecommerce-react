import React from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { 
  oneKeywordForFilter
} from '../actions/DataFetchingActions';
import { 
  Row,
  Col,
  Button,
  Card, 
  CardImg, 
  CardBody, 
  Alert,
  Container
} from 'reactstrap';

const styles = {
  cardTitle: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '20px'
  },
  cardBtn: {
    textAlign:'center'
  },
  card: {
    marginBottom: '20px'
  }
};

const categoriesMenData = [
  {
    imgSrc:'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=717ae13fa0e515d1c7c9e92456439845&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
    cardTitle:'Polos',
    linkCategory:'Polos'
  },
  {
    imgSrc:'https://images.unsplash.com/photo-1530856021941-02c71be5926f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d29673aa02db77423cf5ca770bd6d8e&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
    cardTitle:'Shirts',
    linkCategory:'Shirts'
  },
  {
    imgSrc:'https://images.unsplash.com/photo-1421986386270-978ed214ec60?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0f6cec57034960f50caf64c5af9c26d4&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
    cardTitle:'Pants',
    linkCategory:'Pants'
  },
  {
    imgSrc:'https://images.unsplash.com/photo-1530856021941-02c71be5926f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d29673aa02db77423cf5ca770bd6d8e&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
    cardTitle:'Jackets',
    linkCategory:'Jackets'
  }
];

const categoriesWomenData = [
  {
    imgSrc:'https://images.unsplash.com/photo-1472746729193-36ad213ac4a5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=27aecaf25f31cf45d2de3ad774dad6ed&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
    cardTitle:'Dresses',
    linkCategory:'Dresses'
  },
  {
    imgSrc:'https://images.unsplash.com/photo-1485527691629-8e370684924c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d6f450a6506599df62dc29593779a1b3&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
    cardTitle:'Cardigans',
    linkCategory:'Cardigans'
  },
  {
    imgSrc:'https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42226a7bf3b99eec89267859b4f36114&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
    cardTitle:'Tops',
    linkCategory:'Tops'
  },
  {
    imgSrc:'https://images.unsplash.com/photo-1508445861827-7711f397113a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b8561c6e78192892aae3c6943928c93&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
    cardTitle:'Trench Coats',
    linkCategory:'Trench Coats'
  }
];

const decorationData = gender => gender === 'women' ? categoriesWomenData : categoriesMenData;

const eachCategory = (gender, oneKeywordForFilter) => (
  decorationData(gender).map(x=>(
    <Col md='4' style={styles.card} key={x.cardTitle}>
      <Card>
          <div style={styles.cardBtn} onClick={()=>oneKeywordForFilter(x.cardTitle)}>
            <Link to={`/productslist/${gender}/`}>
              <CardImg src={x.imgSrc} alt="Card image cap" style={{boxShadow: '0px 0px 7px 0px rgba(0,0,0,0.75)'}}/>
              <div style={{position: 'absolute', top: '40%', textAlign: 'center', width: '100%', color: 'white', fontSize: '200%'}}>
                <b> {x.cardTitle} </b>
              </div>
            </Link>
          </div>

      </Card>
    </Col>
  ))
);


const ItemsListGenderHomepage = props => {
  const { gender } = props.match.params
  const { oneKeywordForFilter } = props
  return (
  <Container style={{paddingTop:'30px', paddingBottom:'50px'}}>
    <Col md="12">
      <h1 style={{fontSize: '40px', textAlign:'center', padding:'20px'}}>{gender.charAt(0).toUpperCase()+gender.slice(1)} selection</h1>
      <Row>
        {eachCategory(gender, oneKeywordForFilter)}
      </Row>
    </Col> 
  </Container>

)};

const mapDispatchToProps = dispatch => ({oneKeywordForFilter: x => dispatch(oneKeywordForFilter(x))});
const mapStateToProps = state => ({oneKeywordForFilter: state.oneKeywordForFilter});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsListGenderHomepage);
