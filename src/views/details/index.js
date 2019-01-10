import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import { getHouses, getCurrentHouse, deleteHouse } from '../../actions';
import './styles.scss';

class Details extends Component {
  async componentDidMount() {
    await this.props.getHouse(this.props.location.pathname.slice(7));
    console.log(this.props.location);
  }
  handleClick = e => {
    this.props.delete(this.props.location.pathname.slice(7));
    this.props.history.push('/list');
  };
  render() {
    const { house } = this.props;
    return (
      <Fragment>
        <Navbar />
        <div className="details-page">
          <div className="house-info">
            <h2>{house.address}</h2>
            <div className="house-info__details">
              <span>price:</span>
              <span>{house.price}</span>

              <span>owner:</span>
              <span>{house.owner}</span>

              <span>area:</span>
              <span>{house.area}</span>
            </div>
            <button className="house-info__button" onClick={this.handleClick}>
              Delete
            </button>
          </div>
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

const mapDispatchToProps = dispatch => ({
  getHouses: () => dispatch(getHouses()),
  getHouse: id => dispatch(getCurrentHouse(id)),
  delete: id => dispatch(deleteHouse(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
