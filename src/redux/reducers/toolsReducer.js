import { 
    GET_TOOLS
} from '../actions/actionTypes';

const INITIAL_STATE = {
    tools: []
}

export const toolsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TOOLS:
            return {
                ...state,
                tools: [...state.tools, action.tools]
            };
        default:
            return state;
    }
};