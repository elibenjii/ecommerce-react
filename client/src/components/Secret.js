import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Admin from './Admin';


class Secret extends Component {
  constructor(props){
    super(props);
    this.state = {
      authorization: false,
      apiAuth: false
    };
  }

  async componentDidMount() {
    try {
      const response = await axios({
        method:'get',
        url:'/api/secret',
        headers: {'Authorization': localStorage.getItem("token")}
      })
        const apiAuth = await response.data.authorization;
        this.setState({ apiAuth })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const showAdminPanel = this.state.apiAuth ? <Admin /> : <p>Authorization is required, please login here: <Link to="/admin">login</Link></p>

    return (
      <div>
        {showAdminPanel}
      </div>
    )
  }
}

export default Secret
