import {
    LOADING,
    FETCH_TAGS_ERROR,
    FETCH_TAGS_SUCCESS
} from "../constants/actionTypes";

import INITIAL_STATE from "../constants/initialStates";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING: return { ...state, loading: true }

        case FETCH_TAGS_SUCCESS: return { ...state, loading: false, data: action.payload, error: null }

        case FETCH_TAGS_ERROR: return { ...state, loading: false, error: action.payload, data: null }

        default: return state;
    }
}