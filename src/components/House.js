import React, { Component } from 'react';
import { deleteHouse } from '../actions';
import { connect } from 'react-redux';

class House extends Component {
  render() {
    const { address, price, owner, area, houseId } = this.props;
    return (
      <div>
        <p>{address}</p>
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
