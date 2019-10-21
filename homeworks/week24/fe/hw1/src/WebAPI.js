import axios from 'axios';

const url = 'https://qootest.com/posts'
const weatherAuth = 'CWB-8D8B5254-991F-47D6-A679-B8EE1C6CDAE2'
const weatherDataId = 'F-C0032-001'

export const getPosts = () => axios.get(url + '?_sort=id&_order=desc')

export const getRecentPosts = () => axios.get(url + '?_sort=id&_order=desc&_limit=3')

export const createSinglePost = (data) => axios.post(url, data).then(alert('Push Success! :D'))

export const getSinglePost = (listId) => axios.get(url + '/' + listId)

export const editSinglePost = (listId, title, body) => axios.patch(url + '/' + listId, { title: title, body: body })

export const deleteSinglePost = (listId) => axios.delete(url + '/' + listId)

// 取得天氣 API
export const getWeather = () => 
axios.get(`https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/${weatherDataId}?Authorization=${ weatherAuth}&format=JSON`)
.then(resp => {
    let Weather = []
    let time = ''
    const weatherJSON = resp.data.cwbopendata.dataset.location[0].weatherElement
    for(var i = 0; i < 3; i++){
        if (i === 0) { time = '今早'}
        else if (i === 1) {time = '今晚'}
        else { time = '明日' }
        Weather.push({
                    time,
                    Wx: weatherJSON[0].time[i].parameter.parameterName,
                    MaxT: weatherJSON[1].time[i].parameter.parameterName,
                    MinT: weatherJSON[2].time[i].parameter.parameterName,
                    CI: weatherJSON[3].time[i].parameter.parameterName,
                    PoP: weatherJSON[4].time[i].parameter.parameterName
                }) 
    }
    return Weather;
})


