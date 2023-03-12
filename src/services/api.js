import axios from "axios"

const URL = process.env.REACT_APP_HOST

export default axios.create({
    baseURL: URL,
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },
})
