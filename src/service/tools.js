import axios from 'axios'

import { TOOLS } from './constants'

const getTools = () => {
    return new Promise ((resolve, reject)=> { 
        axios.get(TOOLS.GET)
            .then((response) => {
                console.log(response)
                resolve(response.data)
            })
            .catch((error) => {
                console.log(error);
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
                console.log(error);
                reject(error)
            })
    })
}

export {
    getTools,
    postTools
}