import { FETCH_WEATHER,FETCH_DATA_ERROR } from '../actions';
const initialState = {
    daysInfo:[],
    cityInfo:{},
    payload:{},
    error:false
};
const groupByDate = data => {
    return (data.reduce((list, item) => {
        const forecastDate = item.dt_txt.substr(0,10);
        list[forecastDate] = list[forecastDate] || [];
        list[forecastDate].push(item);
        return list;
    }, {}));
};
const get5DayData = (data) => {
    let groupedData = Object.values(groupByDate(data.data.list));
    const daysData = groupedData.length > 5 ? groupedData.slice(0, 5) : groupedData;
    return daysData;
};
export default function(state=initialState,action){
    if (action.error) {
        action.type = 'FETCH_DATA_ERROR'; 
    } 
    switch(action.type){
        case FETCH_WEATHER:{
            return {
                ...state,
                daysInfo:get5DayData(action.payload),
                cityInfo:action.payload.data.city,
                payload:action.payload,
                error:false
            };   
        }
        case FETCH_DATA_ERROR:{
            return {
                ...state,
                error:action.error
            };
        }
        default: 
            return state;
    }
    
}

  