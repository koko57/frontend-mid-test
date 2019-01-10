import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHouse } from '../../actions';
import Navbar from '../../components/Navbar';
import './styles.scss';

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
    this.props.history.push('/list');
  };
  render() {
    const { address, price, owner, area } = this.state;
    return (
      <div>
        <Navbar />
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit} className="house-creator">
            <input
              type="text"
              className="house-creator__input"
              name="address"
              id="address"
              placeholder="address"
              onChange={this.handleChange}
              value={address}
            />
            <input
              type="text"
              className="house-creator__input"
              name="price"
              id="price"
              placeholder="price"
              onChange={this.handleChange}
              value={price}
            />
            <input
              type="text"
              className="house-creator__input"
              name="owner"
              id="owner"
              placeholder="owner"
              onChange={this.handleChange}
              value={owner}
            />
            <input
              type="number"
              className="house-creator__input"
              name="area"
              id="area"
              placeholder="area"
              onChange={this.handleChange}
              value={area}
            />
            <button type="submit" className="house-creator__button">Submit</button>
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
