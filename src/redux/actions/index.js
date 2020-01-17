import {
    GET_TOOLS
} from './actionTypes';
  
export const getTools = value => {
    return {
        type: GET_TOOLS,
        tools: value
    }
}