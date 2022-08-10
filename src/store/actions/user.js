export const GET_LOGIN_REQUEST='GET_LOGIN_REQUEST';
export const GET_LOGIN_CANCEL='GET_LOGIN_CANCEL';
export const GET_LOGIN_SUCCESS='GET_LOGIN_SUCCESS';
export const GET_LOGIN_FAIL='GET_LOGIN_FAIL';
export const GET_LOGOUT='GET_LOGOUT';


export function getLoginData(data){
    return {
        type:GET_LOGIN_REQUEST,
        payload: data,
    }
}

export  function  logOut(){
    return {
        type: GET_LOGOUT,
    }
}