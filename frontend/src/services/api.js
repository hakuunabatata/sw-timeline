import axios from 'axios'

axios.create({
    baseURL: 'http://localhost:3300/'
})

export default axios