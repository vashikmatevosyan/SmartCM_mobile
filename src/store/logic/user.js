import { createLogic } from 'redux-logic';
import {GET_LOGIN_REQUEST, GET_LOGIN_CANCEL,GET_LOGIN_SUCCESS, GET_LOGIN_FAIL, } from '../actions/user'
import Api from "../../depenses/api/Api";
import { createNavigationContainerRef } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

const navigationRef = createNavigationContainerRef()
export  const fetchGetLogin = createLogic({

    type: GET_LOGIN_REQUEST,
    cancelType: GET_LOGIN_CANCEL,
    latest: true,

    process({ getState, action }, dispatch, done) {
        Api.userLogin(action.payload)
            .then((data) => {
                dispatch({type: GET_LOGIN_SUCCESS, payload: data});
                navigationRef.navigate('TabNavigation');
            })

            .catch((err) => {
                console.error(err);
                dispatch({ type: GET_LOGIN_FAIL, payload: err, error: true });
            })
            .then(() => done());
    }
});