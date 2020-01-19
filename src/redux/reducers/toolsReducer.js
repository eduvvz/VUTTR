import { 
    SET_TOOLS,
    NEED_UPDATE_LIST_TOOLS,
    SET_SEARCH_VALUE
} from '../actions/actionTypes';

const INITIAL_STATE = {
    tools: [],
    needUpdateList: false,
    search: {
        text: '',
        onlyTags: false
    }
}

export const toolsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TOOLS:
            return {
                ...state,
                tools: action.tools
            };
        case NEED_UPDATE_LIST_TOOLS:
            return {
                ...state,
                needUpdateList: action.needUpdateList
            }
        case SET_SEARCH_VALUE:
            return {
                ...state,
                search: { ...state.search, ...action.search }
            }
        default:
            return state;
    }
};