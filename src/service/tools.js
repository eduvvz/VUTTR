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
        })
    });
}

export {
    getTools
}