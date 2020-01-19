import { 
    ADD_TOOLS,
    NEED_UPDATE_LIST_TOOLS
} from '../actions/actionTypes';

const INITIAL_STATE = {
    tools: [],
    needUpdateList: false
}

export const toolsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TOOLS:
            return {
                ...state,
                tools: action.tools
            };
        case NEED_UPDATE_LIST_TOOLS:
            console.log('reducer', action.needUpdateList)
            return {
                ...state,
                needUpdateList: action.needUpdateList
            }
        default:
            return state;
    }
};