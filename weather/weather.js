/**
 * 
 */

const axios = require('axios');
const api_key = '0c7332f360cf4f68a6a351776e5b66ee';

const getWeather = async(lat, lng) => {

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${api_key}`;
    let resp = await axios.get(url);

    if (resp.data.cod != '200') {
        throw new Error(`${resp.data.cod}: ${resp.data.message}`)
    }

    let geoWth = {
        temp: resp.data.main.temp
    }
    return geoWth;
}

module.exports = {
    getWeather
}