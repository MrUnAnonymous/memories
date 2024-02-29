import { AUTH } from '../constants/actionTypes';
import * as api from '../api'

export const signin = (form, history) => async (dispatch) => {
    try {
        //Login user

        history.push('/');
    } catch (error) {
        console.log(error)
    }
}

export const signup = (form, history) => async (dispatch) => {
    try {
        //Sign up user

        history.push('/');
    } catch (error) {
        console.log(error)
    }
}