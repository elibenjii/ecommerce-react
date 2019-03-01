import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FiXCircle } from 'react-icons/fi';
import axios from 'axios';

class AdminFormDeleteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEdit: false,
    };
  }

  handleDelete = (id, title) => {
    axios.post('/api/delete/item', { id, title })
    .then(response => {
      console.log(response);
      this.setState({ modalEdit: !this.state.modalEdit });
    })
    .then(() => {
      window.location.reload(true)
    })
    .catch(error => {
      console.log(error);
    });
  }

  toggle = () => this.setState({ modalEdit: !this.state.modalEdit });

  render() {
    const { title, id } = this.props
    return (
      <div>
        <Button color="danger" size='sm' onClick={this.toggle}><FiXCircle /></Button>
        <Modal isOpen={this.state.modalEdit} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>  
              You confirm deleting item ID: {id}?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={()=>this.handleDelete(id, title)}>
              Confirm
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AdminFormDeleteItem;