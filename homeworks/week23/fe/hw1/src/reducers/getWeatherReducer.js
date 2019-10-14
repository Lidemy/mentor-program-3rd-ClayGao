import * as actionTypes from '../actionsTypes';

const initState = {
    weatherData: [],
    isLoadingGetWeatherData: false,
    currentTime: {}
}

export default function getWeatherReducer(state = initState, action) {
    switch(action.type) {
        case actionTypes.GET_WEATHER_DATA:
            return {
                ...state,
                isLoadingGetWeatherData: true,
            }
        case actionTypes.GET_WEATHER_DATA_SUCCESS:
            return {
                ...state,
                weatherData: action.data,
                isLoadingGetWeatherData: false
            }
        default:
            return state
    }
}