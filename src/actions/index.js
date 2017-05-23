import Firebase from 'firebase';
import _ from 'lodash';

export const FETCH_KETO_LOCATIONS = 'FETCH_KETO_LOCATIONS';
export const CREATE_KETO_LOCATION = 'CREATE_KETO_LOCATION';

// const Posts = new Firebase('https://kelo-db.firebaseio.com');

const Posts = [
  {id: 1, restaurant: 'McDonalds', address: 'San Francisco', location: {lon: 423, lat: 122}},
  {id: 2, restaurant: 'Wendys', address: 'San Francisco', location: {lon: 423, lat: 122}},
  {id: 3, restaurant: 'Chipotle', address: 'San Francisco', location: {lon: 423, lat: 122}},
]

export function fetchKetoLocations() {
  return {
    type: FETCH_KETO_LOCATIONS,
    payload: Posts
  }
}

export function createKetoLocation(ketoLocation) {
  console.log(ketoLocation);
  
  return {
    type: CREATE_KETO_LOCATION,
    payload:ketoLocation
  }
}