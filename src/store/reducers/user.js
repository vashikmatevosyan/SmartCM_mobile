import { USER_DATA_REQUEST, USER_DATA_SUCCESS , USER_DATA_FAIL } from "../actions/user";

const initialState = {
    loginError: '',
    loginStatus: '',
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_DATA_REQUEST: {
            return {
                ...state,
                loginError: '',
                loginStatus: 'ok',
            }
        }
        case USER_DATA_SUCCESS: {
            return {
                ...state,
                loginError: '',
                loginStatus: 'ok',
            }
        }
        case USER_DATA_FAIL: {
            return {
                ...state,
                loginError: '',
                loginStatus: 'fail'
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}
