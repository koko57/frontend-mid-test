import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import { getCurrentHouse } from '../../actions';

class Details extends Component {
  componentDidMount() {
    this.props.getHouseDetails();
  }
  render() {
    const { house } = this.props;
    console.log(house)
    return (
      <Fragment>
        <Navbar />
        <div className="house-info">
          <h2>{house.address}</h2>
          <p>{house.price}</p>
          <p>{house.owner}</p>
          <p>{house.area}</p>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    house: state.houses.currentHouse
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    getHouseDetails: () => dispatch(getCurrentHouse(ownProps.match.params.id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
