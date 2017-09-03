import axios from 'axios';

const API_KEY = '74f8e59ba03b1f2076242d836867ac89';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
console.log(ROOT_URL);

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
    const url = `${ROOT_URL}&q=${cityName},us`;
    // console.log(`fetchWeather: ${cityName}`);

    const request = axios.get(url);
    // console.log(request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
