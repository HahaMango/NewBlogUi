import axios from 'axios'
import Cookies from 'js-cookie'
import { isEmptyString } from '../utils/utils.js';

// create an axios instance
const service = axios.create({
    baseURL: "https://api.hahamango.cn/", // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 60000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        var token = Cookies.get("token");
        if(!isEmptyString(token)){
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        //config.headers['Authorization'] = 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEzMDU1MjA2MDM5MjY3NjE0NzIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQ2hpdmFfQ2hlbiIsImF1ZCI6WyJtYW5nby5hZG1pbiIsIm1hbmdvLnVzZXJjZW50ZXIiXSwiZXhwIjoxNjAxNzA3MjcxLCJpc3MiOiJoYWhhbWFuZ28uY24ifQ.vRkAWg373ZWlFjrg15LscKt7Q9ZN8nA7iVU5Q46Y0BQ";
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    
    response => {
        const res = response.data

        // if the custom code is not 200, it is judged as an error.
        if (res.code !== 200) {
            window.alert(res.code + res.message);

            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service