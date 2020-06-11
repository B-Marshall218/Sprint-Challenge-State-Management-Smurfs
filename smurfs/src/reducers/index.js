import { GET_SMURFS, GET_SMURFS_FAILURE, ADD_SMURFS } from "../actions/Actions";

export const initialState = {
    isLoading: false,
    error: null,
    smurfs: [

    ]
};

export const SmurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error: ""
            }
        case GET_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                smurfs: [],
                error: action.payload

            }
        case ADD_SMURFS:
            return {
                ...state,
                smurfs: action.payload,
                error: ""

            }

        default:
            return state;
    }
}