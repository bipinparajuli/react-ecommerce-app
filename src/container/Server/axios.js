
import axios from 'axios'


const instance= axios.create({
    baseURL:'https://e-commerce-app-b19e5.firebaseio.com/'
})

export default instance;