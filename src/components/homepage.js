import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchKetoLocations } from '../actions';

import Leaflet from 'leaflet'
import LeafletMap from './leaflet_map';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.1.0/images/'

class Homepage extends Component {
  componentDidMount() {
    this.props.fetchKetoLocations();
  }
  
  renderKetoSpots() {
      console.log(this.props.ketoLocations)
      return _.map(this.props.ketoLocations, ketoLoc => {
        const smallStyle = {
          fontSize: '10px'
      }
      
      return (
        <div class="panel panel-default">
          <div className="media panel-body" key={ketoLoc.placeId}>
            <div className="media-left">
              <a href="#">
                <img className="media-object" src="..." alt="..."/>
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">{ketoLoc.name} <small style={smallStyle}>insert distance of location </small></h4>
              <p>
                {ketoLoc.place.split(",")[0]} |  
                <small>{ketoLoc.address}</small>
              </p>
              <p>{ketoLoc.notes}</p>
            </div>
          </div>
        </div>
      )
    })
  }
  
  render() {
    return (
      <div className="container">
        <div className="text-xs-right">
          <Link className="btn btn-default" to="/shareketo">
            Share your keto find
          </Link>
        </div>
        <h1>Homepage</h1>
        <hr/>
        <LeafletMap/>
        <hr/>
        <div className="well">
          {this.renderKetoSpots()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { ketoLocations: state.ketoLocations }
}

export default connect(mapStateToProps, { fetchKetoLocations })(Homepage);