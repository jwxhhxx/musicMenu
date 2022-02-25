import requests from "./request"

export const reqLogin = (params) => requests.post('/v1/user/login', params)
export const reqNowUser = () => requests.get('/v1/user/me')
export const reqOutLogin = () => requests.delete('/v1/user/logout')