import React, { Component } from 'react';
import { deleteHouse } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class House extends Component {
  render() {
    const { address, price, owner, area, houseId } = this.props;
    return (
      <div>
        <Link to={`/house/${houseId}`}>{address}</Link>
        <p>{price}</p>
        <p>{owner}</p>
        <p>{area}</p>
        <button onClick={() => this.props.delete(houseId)}>Delete</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  delete: id => dispatch(deleteHouse(id))
});

export default connect(
  null,
  mapDispatchToProps
)(House);
