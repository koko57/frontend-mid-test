import React, { Component } from 'react';
import Button from './Button';
import './House.scss';

class House extends Component {
  render() {
    const { address, houseId } = this.props;
    return (
      <div className="house">
        <h3>{address}</h3>
          <Button link={`/house/${houseId}`} text="Details" small />
      </div>
    );
  }
}

export default House
