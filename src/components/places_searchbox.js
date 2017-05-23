import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

class PlacesSearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: 'San Francisco, CA',
    }
  }
  
  onSuggestSelect(suggest) {
    console.log(suggest);
    this.props.selectedSuggestion(suggest);
  }
  
  onSuggestNoResults(userInput) {
    console.log('onSuggestNoResults for :' + userInput);
  }
  
  render() {
    
    return (
      <div>
        <Geosuggest
          placeholder="Enter the restaurant"
          onSuggestSelect={this.onSuggestSelect}
          onSuggestNoResults={this.onSuggestNoResults}
        />
      </div>
    )
  }
}

export default PlacesSearchBox;