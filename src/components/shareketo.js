import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Geosuggest from 'react-geosuggest';

import { createKetoLocation } from '../actions';

// import PlacesSearchBox from './places_searchbox';


class Shareketo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSuggestion: ''
    };
    
    this.onSubmit = this.onSubmit.bind(this);
    this.onSuggestSelect = this.onSuggestSelect.bind(this);
    this.onSuggestNoResults = this.onSuggestNoResults.bind(this);
  }
  
  onSuggestSelect(suggest) {
    this.setState({selectedSuggestion:suggest});
  }
  
  onSuggestNoResults(suggest) {
    console.log(suggest);
  }
  
  onSubmit(ketoForm) {
    const ketoPost = { 
      ...ketoForm, 
      place:this.state.selectedSuggestion.label,
      location:this.state.selectedSuggestion.location,
      placeId: this.state.selectedSuggestion.placeId,
      address: this.state.selectedSuggestion.gmaps.formatted_address
    }
    console.log(this.state.selectedSuggestion)
    console.log(ketoPost);
    
    this.props.createKetoLocation(ketoPost, () => {
      this.props.history.push('/');
    })
  }
  
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className= `form-group ${touched && error ? 'has-danger' : ''}`
    
    return (
      <div className={className}>
        <input
          placeholder={field.label}
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }
  
  render() { 
    const { handleSubmit } = this.props;
     
    return (
      <div>
        <h1>Share Your keto find</h1>
        <hr/>
        <Geosuggest
          placeholder="Enter the restaurant"
          onSuggestSelect={this.onSuggestSelect}
          onSuggestNoResults={this.onSuggestNoResults}
        />
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Name of Keto find"
            name="name"
            component={this.renderField}
          />
          <Field
            label="Notes about this keto find"
            name="notes"
            component={this.renderField}
          />
        <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};
  
  if(!values.name) {
    errors.name = "Enter a name of this keto treat";
  }
  
  if(!values.notes) {
    errors.notes = "Enter some notes (i.e. Order a McDouble and ask for no bun)";
  }
  
  return errors;
}

export default reduxForm({
  validate,
  form: 'KetoLocationForm'
})(connect(null, { createKetoLocation })(Shareketo));