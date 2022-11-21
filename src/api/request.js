import axios from 'axios'
const request = axios.create({
    baseURL: '/',
    timeout:9000
})
request.interceptors.request.use(config => { 

})
request.interceptors.response.use((res) => { })
export default request