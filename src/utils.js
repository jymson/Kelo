export const getPlaceId = (placeId, callback) => {
  const service = new google.maps.places.PlaceService();
  
  return new Promise((resolve, reject) => {
    service.radarSearch({ placeId }, (results, status) => {
      
    });
  })
}

export const getPlaceDetails = (placeId, map) => {
  const service = new google.maps.places.PlaceService(map);
  console.log(`placeId: ${placeId}`)
  return new Promise((resolve, reject) => {
    service.getDetails({ placeId }, (results, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        reject(status);
      }
      console.log(`results: ${results}`)
      resolve(results)
    })
  })
}