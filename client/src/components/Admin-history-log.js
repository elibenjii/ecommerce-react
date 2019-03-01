import React, { Component } from 'react'
import { Table, Row, Col } from 'reactstrap';
import axios from 'axios';
import {Doughnut,Line} from 'react-chartjs-2';
 


export class AdminHistoryLog extends Component {

  constructor(props){
    super(props);
    this.state = {
      logData: []
    }
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get('/api/log')
      const logData = await response.data;
      this.setState({ logData })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { stylesTab4 } = this.props
    const dataDoughnut = {
      labels: [
        'Delete',
        'Create',
        'Update'
      ],
      datasets: [{
        data: [
          this.state.logData.filter(x=>x.type === 'Delete').length, 
          this.state.logData.filter(x=>x.type === 'Create').length, 
          this.state.logData.filter(x=>x.type === 'Update').length,
        ],
        backgroundColor: [
        '#FF6384',
        '#072a48',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
      }]
    };

    const dataLine = {
      labels: this.state.logData.map(x=>
        new Date(x.time).toLocaleDateString('en-TH', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit'
        }
        )
      ),
      datasets: [
        {
          label: 'Dashboard activity',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.state.logData.map((x,index)=>index)
        }
      ]
    };
    
    const rows = 
      this.state.logData.map((x, index)=>
        <tr>
          <th scope="row">{index+1}</th>
          <td>{x.itemid}</td>
          <td>{x.itemtitle}</td>
          <td>{x.type}</td>
          <td>{      new Date(x.time).toLocaleDateString('en-TH', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit'
      }
      )}</td>
        </tr>
      )
    return (
      <div>
        <Row>
          <Col md="6">
            <Table dark borderless hover size="sm" responsive>
              <thead style={stylesTab4}>
                <tr>
                  <th>#</th>
                  <th>Product ID</th>
                  <th>Product title</th>
                  <th>Type</th>
                  <th>Time stamp</th>
                </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </Table>
          </Col>

          <Col md="5">
            <div style={{paddingTop:'20px'}}>
              <Doughnut data={dataDoughnut}  />
            </div>
            <div style={{paddingTop:'20px'}}>
              <Line data={dataLine} style={{paddingTop:'50px'}} />
            </div>
          </Col>
        </Row>
        

      </div>

    )
  }
}

export default AdminHistoryLog
