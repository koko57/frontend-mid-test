import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getHouses } from '../../actions';
import House from '../../components/House';
import Navbar from '../../components/Navbar';
import './styles.scss';

class HousesList extends Component {
  componentDidMount() {
    this.props.loadHouses();
  }
  render() {
    const houses = this.props.houses.map(house => (
      <li key={house._id}>
        <House
          address={house.address}
          owner={house.owner}
          price={house.price}
          area={house.area}
          houseId={house._id}
        />
      </li>
    ));
    return (
      <Fragment>
        <Navbar />
        <div className="list-wrapper">
          <ul className="houses-list">{houses}</ul>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  houses: state.houses.houses
});

const mapDispatchToProps = dispatch => ({
  loadHouses: () => dispatch(getHouses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HousesList);
