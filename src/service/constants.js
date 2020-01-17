const BASE_URL = 'https://5e21db5f6867a0001416f76c.mockapi.io/VUTTR'

const TOOLS = {
    GET: `${BASE_URL}/tools`,
    GET_ID: (id) => {
        return `${BASE_URL}/tools/${id}`
    },
    POST: `${BASE_URL}/tools`,
    PUT: `${BASE_URL}/tools`,
    DELETE: `${BASE_URL}/tools`,
}


export { 
    TOOLS
}