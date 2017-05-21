import React, { Component } from 'react';
import PlacesSearchBox from './places_searchbox';


class Shareketo extends Component {
  render() {
  
    
    return (
      <div>
        <h1>Share Your keto find</h1>
        <hr/>
        <PlacesSearchBox/>
        <input placeholder="enter the name of your keto find"/>
        <input placeholder="enter the name of your keto find"/>
      </div>
    )
  }
}

export default Shareketo;