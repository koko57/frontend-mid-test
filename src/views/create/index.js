import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHouse } from '../../actions';
import Navbar from '../../components/Navbar';

class CreateHouse extends Component {
  state = {
    address: '',
    price: '',
    owner: '',
    area: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newHouse = {
      ...this.state
    };
    console.log(newHouse);
    this.props.createNew(newHouse);
    this.setState({
      address: '',
      price: '',
      owner: '',
      area: ''
    });
  };
  render() {
    const { address, price, owner, area } = this.state;
    return (
      <div>
        <Navbar />
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="address"
              onChange={this.handleChange}
              value={address}
            />
            <input
              type="text"
              name="price"
              id="price"
              placeholder="price"
              onChange={this.handleChange}
              value={price}
            />
            <input
              type="text"
              name="owner"
              id="owner"
              placeholder="owner"
              onChange={this.handleChange}
              value={owner}
            />
            <input
              type="number"
              name="area"
              id="area"
              placeholder="area"
              onChange={this.handleChange}
              value={area}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNew: house => dispatch(addHouse(house))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateHouse);
