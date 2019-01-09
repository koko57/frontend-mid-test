import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';

class Details extends Component {
  render() {
    return (
      <div>
        <Navbar />
        details
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

export default connect(
  null,
  mapDispatchToProps
)(Details);
