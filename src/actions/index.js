import axios from 'axios';

const API_KEY = 'afd5f2e93b50e0d6e0fc55f1fd057e7e';
const BASE_URL =  `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export function fetchWeather(city) {   
    return (dispatch) => {
        const api = `${BASE_URL}&q=${city}`;
        axios.get(api)
        .then(res => {
            dispatch({type : FETCH_WEATHER, data : res.data});
        })
        .catch(error => {
            dispatch({type : FETCH_DATA_ERROR, error : error});
        });
    }
   
    
}
