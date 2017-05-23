import firebase, { firebaseRef } from '../firebase';
import _ from 'lodash';

export const FETCH_KETO_LOCATIONS = 'FETCH_KETO_LOCATIONS';
export const CREATE_KETO_LOCATION = 'CREATE_KETO_LOCATION';


export function fetchKetoLocations() {
  return {
    type: FETCH_KETO_LOCATIONS,
    payload: Posts
  }
}

export function fetchKetoLocation(ketoPost) {
  console.log(ketoPost);
  
  return dispatch => {
    Locations.on('value', snapshot => {
      dispatch({
        type: FETCH_KETO_LOCATIONS,
        payload: snapshot.val()
      })
    })
  }
}

export function createKetoLocation(ketoPost) {
  return dispatch => {
    var ketoPostRef = firebaseRef.child('ketolocations').push(ketoPost);
  }
}