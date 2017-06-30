import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  PropTypes as MapPropTypes,
} from 'react-leaflet';

const MyPopupMarker = ({ children, position }) => (
  <Marker position={position}>
    <Popup>
      <span>{children}</span>
    </Popup>
  </Marker>
)
MyPopupMarker.propTypes = {
  children: MapPropTypes.children,
  position: MapPropTypes.latlng,
}

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <div style={{ display: 'none' }}>{items}</div>
}
MyMarkersList.propTypes = {
  markers: PropTypes.array.isRequired,
}

class LeafletMap extends Component {
  pop = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const center = [this.pop.lat, this.pop.lng]

    const markers = [
      { key: 'marker1', position: [51.5, -0.1], children: 'My first popup' },
      { key: 'marker2', position: [51.51, -0.1], children: 'My second popup' },
      { key: 'marker3', position: [51.49, -0.05], children: 'My third popup' },
    ]
    return (
      <Map center={center} zoom={this.pop.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList markers={markers} />
      </Map>
    )
  }
}

function mapStateToProps(state) {
  return { ketoLocations: state.ketoLocations }
}

export default connect(mapStateToProps, { })(LeafletMap);