import axios from 'axios'

// create an axios instance
const service = axios.create({
    baseURL: "https://localhost:5001/", // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
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