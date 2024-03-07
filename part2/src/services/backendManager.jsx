import axios from "axios"
//const url = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = (url) => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.post(url, newObject)
    return request.then(response => response.data)
}

const destroy = (id) => {
    const request = axios.delete(`${url}/${id}`)
    return request.then(response => response.data)
}

const edit = (id, changedObject) => {
    const request = axios.put(`${url}/${id}`, changedObject)
    return request.then(response => response.data)
}

export default {getAll, create, destroy, edit}