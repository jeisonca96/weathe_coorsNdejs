/**
 * 
 */

const axios = require('axios');
const api_key = 'AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y';

const getPlaceLatLng = async(address) => {
    let directions = encodeURI(address);
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${directions}&key=${api_key}`;

    let resp = await axios.get(url);

    if (resp.data.status != 'OK') {
        throw new Error(`No se existen resultados para ${address}`)
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    let geo = {
        lat: coors.lat,
        lng: coors.lng,
        address: location.formatted_address,
    }
    return geo;
}

module.exports = {
    getPlaceLatLng
}