import axios from 'axios';

const url = 'https://qootest.com/posts'
const weatherAuth = 'CWB-8D8B5254-991F-47D6-A679-B8EE1C6CDAE2'
const weatherDataId = 'F-C0032-001'

export const getPosts = () => axios.get(url + '?_sort=id&_order=desc')

export const getRecentPosts = () => axios.get(url + '?_sort=id&_order=desc&_limit=3')

export const sendSinglePost = (data) => axios.post(url, data)

export const getSinglePost = (listId) => axios.get(url + '/' + listId)

export const editSinglePost = (listId, title, body) => axios.patch(url + '/' + listId,{ title: title, body: body })

export const deleteSinglePost = (listId) => axios.delete(url + '/' + listId)

// 取得天氣 API
export const getWeather = () => axios.get(`https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/${weatherDataId}?Authorization=${ weatherAuth}&format=JSON`)

