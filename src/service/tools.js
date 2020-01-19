import axios from 'axios'
import handleError from '../utils/handleError'
import { TOOLS } from './constants'

const getTools = param => {
    return new Promise ((resolve, reject)=> { 
        axios.get(TOOLS.GET(param || ''))
            .then((response) => {
                console.log(response)
                resolve(response.data)
            })
            .catch((error) => {
                handleError(error)
                reject(error)
            })
    });
}

const postTools = tool => {
    return new Promise((resolve, reject) => {
        axios.post(TOOLS.POST, tool)
            .then((response) => {
                console.log(response)
                resolve(response)
            })
            .catch((error) => {
                handleError(error)
                reject(error)
            })
    })
}

const deleteTool = id => {
    return new Promise((resolve, reject) => {
        axios.delete(TOOLS.DELETE(id))
            .then((response) => {
                console.log(response)
                resolve(response)
            })
            .catch((error) => {
                handleError(error)
                reject(error)
            })
    })
}

export {
    getTools,
    postTools,
    deleteTool
}