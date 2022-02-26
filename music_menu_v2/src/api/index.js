import requests from "./request"

export const reqLogin = (params) => requests.post('/v1/user/login', params)
export const reqNowUser = () => requests.get('/v1/user/me')
export const reqOutLogin = () => requests.delete('/v1/user/logout')
export const reqGetMenu = (params) => requests.get('/v1/music/list', { params })
export const reqRandomList = () => requests.get('/v1/music/random?count=5')
export const reqUpdateList = (params) => requests.put('/v1/music', params)
export const reqDeleteList = (params) => requests.delete('/v1/music', { params })
export const reqAddItem = (params) => requests.post('/v1/music', params)
export const reqAddList = (params) => requests.post('/v1/music/list', params) 