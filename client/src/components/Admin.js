import React, { Component } from 'react';
import axios from 'axios';
import AdminTablesItems from './Admin-table-items'
import AdminFormAddItem from './Admin-form-add-item'
import AdminHistoryLog from './Admin-history-log'
import AdminTableOrders from './Admin-table-orders'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

export default class Admin extends Component {
  constructor(props){
    super(props);
    this.state={
      apiList: [],
      activeTab: '2'
    }
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get('/api/productsdata')
      const apiList = await response.data;
      this.setState({ apiList })
    } catch (error) {
      console.log(error);
    }
  }

  toggle = tab => this.state.activeTab !== tab && this.setState({ activeTab: tab });

  render() {

    const styles = {
      tab1: {
        cursor: 'pointer',
        backgroundColor: '#cd5957',
        color:'white'
      },
      tab2: {
        cursor: 'pointer',
        backgroundColor: '#78a4a2',
        color:'white'
      },
      tab3: {
        cursor: 'pointer',
        backgroundColor: '#66bceb',
        color:'white'
      },
      tab4: {
        cursor: 'pointer',
        backgroundColor: '#ffce56',
        color:'white'
      },

    }

    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink style={styles.tab1} onClick={() => { this.toggle('1'); }}>
              <b>Orders</b>
            </NavLink> 
          </NavItem>
          <NavItem>
            <NavLink style={styles.tab2} onClick={() => { this.toggle('2'); }}>
              <b>Update/delete items</b>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={styles.tab3} onClick={() => { this.toggle('3'); }}>
              <b>Add new item</b>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={styles.tab4} onClick={() => { this.toggle('4'); }}>
              <b>History log</b>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <AdminTableOrders stylesTab1={styles.tab1}/>
          </TabPane>
          <TabPane tabId="2">
            <AdminTablesItems stylesTab2={styles.tab2}/> 
          </TabPane>
          <TabPane tabId="3" style={styles.tab3}>
            <AdminFormAddItem />
          </TabPane>
          <TabPane tabId="4">
            <AdminHistoryLog stylesTab4={styles.tab4} />
          </TabPane>
        </TabContent>
      </div>
    )
  }
};
