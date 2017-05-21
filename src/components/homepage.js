import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchKetoLocations } from '../actions';

class Homepage extends Component {
  componentDidMount() {
    this.props.fetchKetoLocations();
  }
  
  renderKetoSpots() {
    console.log(this.props.ketoLocations)
    return _.map(this.props.ketoLocations, ketoLoc => {
      return (
        <li classNam="list-group-item" key={ketoLoc.id}>
          {ketoLoc.restaurant}
        </li>
      )
    })
  }
  
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/shareketo">
            Share your keto find
          </Link>
        </div>
        <h1>Homepage</h1>
        <ul>
          {this.renderKetoSpots()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { ketoLocations: state.ketoLocations }
}

export default connect(mapStateToProps, { fetchKetoLocations })(Homepage);