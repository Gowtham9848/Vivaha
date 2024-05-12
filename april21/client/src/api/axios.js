import axios from "axios"

const BASE_URL = "https://ec2-50-16-183-231.compute-1.amazonaws.com"
// const BASE_URL = "http://localhost:3500"

export default axios.create({
    baseURL: BASE_URL,
    responseType: "json"
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    responseType: "json",
    headers: { "Content-Type": "application/json" },
    withCredentials: true
})

export const axiosViewOnly = axios.create({
    baseURL: BASE_URL,
    responseType: "json",
    headers: {"Content-Type": "application/json"},
    withCredentials: false
})