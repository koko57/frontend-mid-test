import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateHouse extends Component {
  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateHouse)
