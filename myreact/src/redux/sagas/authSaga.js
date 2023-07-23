// sagas.js
import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    loginSuccess,
    loginFailure,
    registerSuccess,
    registerFailure,
    getMe2,
    getMeFailed
} from '../reducers/AuthReducer';
import request from "../../request";

const API_URL = 'http://localhost:8080/api/auth';


async function fetchData(data) {
    const response = await axios.post("http://localhost:8080/api/auth/login", data)
    return response.data;
}


function* getMe() {
    try {
        const response = yield call(()=>request({
            url: "/auth/me",
            method: "GET"
        }));
        yield put(getMe2(response.data));
    } catch (error) {
        yield put(getMeFailed())
        console.log("ERRORRRRRRR")
    }
}

function* loginUser(action) {
    // try {
        const response = yield call(()=>fetchData(action.payload));
        yield put(loginSuccess(response));
    // } catch (error) {
    //     yield put(loginFailure(error.message));
    // }
}

function* registerUser(action) {
    try {
        const response = yield call(axios.post, `${API_URL}/register`, action.payload);
        yield put(registerSuccess(response.data));
    } catch (error) {
        yield put(registerFailure(error.message));
    }
}

function* rootSaga() {
    yield takeLatest('auth/login', loginUser);
    yield takeLatest('auth/register', registerUser);
    yield takeLatest('auth/getMe1', getMe);
}

export default rootSaga;
