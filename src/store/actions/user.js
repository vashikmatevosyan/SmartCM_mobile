export const USER_DATA_REQUEST = 'USER_DATA_REQUEST';
export const USER_DATA_SUCCESS = 'USER_DATA_SUCCESS';
export const USER_DATA_FAIL = 'USER_DATA_FAIL';

export function userFirstNameRequest(){
    return{
        type: USER_DATA_REQUEST,
        payload: {}
    }
}