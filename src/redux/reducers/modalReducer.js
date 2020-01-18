import { 
    SET_MODAL
} from '../actions/actionTypes';

const INITIAL_STATE = {
    modal: {
        show: false
    }
}

export const modalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_MODAL:
            return {
                ...state,
                modal: { ...state.modal, ...action.modal }
            };
        default:
            return state;
    }
};