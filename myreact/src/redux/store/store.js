import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/authSaga';
import authReducer from '../reducers/AuthReducer';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        auth: authReducer
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

// export const model = authReducer.actions