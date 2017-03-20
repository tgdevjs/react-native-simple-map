import { API_KEY } from '../../config';
export const URL = 'https://maps.googleapis.com/maps/api/geocode/json?address='

export const searchLocation = (location, callback) => {

  const FETCH_URL = `${ URL }${ location}`

  fetch(FETCH_URL, {
    method: 'GET',
    headers: {
      'Authorization': API_KEY
    },
  })
  .then((response) => response.json())
  .then((responseJSON) => {
    if( typeof callback === 'function' && callback !== undefined){
      callback(responseJSON)
    }
  })

}
