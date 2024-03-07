import axios from 'axios'

//进度条
//start：开始 done：结束
import nprogress from 'nprogress'

//必须引入样式
import 'nprogress/nprogress.css'

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
})

requests.interceptors.request.use((config) => {
    nprogress.start()
    return config
})

requests.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
}, (error) => {
    nprogress.done()
    return Promise.reject(new Error('faile'))
})

export default requests