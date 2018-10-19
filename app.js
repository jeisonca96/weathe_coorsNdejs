/**
 * 
 */

const argv = require('./config/yargs').argv;
const weather = require('./weather/weather');
const place = require('./place/place');

let getInfo = async(address) => {

    try {
        let get_place = await place.getPlaceLatLng(address);
        let get_weather = await weather.getWeather(get_place.lat, get_place.lng);

        let geoWth = {
            lat: get_place.lat,
            lng: get_place.lng,
            address: get_place.address,
            weather: get_weather.temp
        }

        return geoWth;

    } catch (error) {
        return `No found direction: ${address}`;
    }
}

getInfo(argv.directions).then(result => console.log(result)).catch((err) => console.log(err));