import { GET_LOGIN_REQUEST, GET_LOGOUT , GET_LOGIN_SUCCESS , GET_LOGIN_FAIL } from "../actions/user";

const initialState = {
    data: {},
    err: [],
    load: false,
    token: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_LOGIN_REQUEST: {
            return {
                data: {},
                err: [],
                load: true,
                token: '',
            }
        }
        case GET_LOGIN_SUCCESS: {
            return {
                load: false,
                data: {...action.payload.data.data},
                token: action.payload.data.data.auth_key
            }
        }
        case GET_LOGIN_FAIL: {
            return {
                ...state,
                load: false,
                err: 'Incorrect login or password',
            }
        }
        case GET_LOGOUT: {
            return {
                data: {},
                err: [],
                load: false,
                token: ''
            }
        }
        default:
            return state;
    }
}
