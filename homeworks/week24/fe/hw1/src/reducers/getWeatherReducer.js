import * as actionTypes from '../actionsTypes';

const initState = {
    weatherData: [],
    isLoadingGetWeatherData: false,
    currentTime: {}
}

export default function getWeatherReducer(state = initState, action) {
    switch(action.type) {
        case actionTypes.GET_WEATHER_DATA + '_PENDING':
            return {
                ...state,
                isLoadingGetWeatherData: true,
            }
        case actionTypes.GET_WEATHER_DATA + '_FULFILLED':
            return {
                ...state,
                weatherData: action.payload,
                isLoadingGetWeatherData: false
            }
        default:
            return state
    }
}