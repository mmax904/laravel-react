// import {
//   AUTH_CHECK,
//   AUTH_LOGIN,
//   AUTH_LOGOUT,
//   AUTH_REFRESH_TOKEN,
//   AUTH_RESET_PASSWORD,
//   AUTH_USER,
// } from './modules/auth/store/action-types';
const RedirectIfAuthenticated = store => next => {
    console.log(store);
    console.log('================');
    console.log(next);
    return true;
    // try {
    //     let result = next(action)
    //     if(action.type === AUTH_CHECK) {

    //     }
    //     console.log('next state', store.getState())
    //     return result;
    // } catch (err) {
    //     console.error('Caught an exception!', err)
    //     Raven.captureException(err, {
    //         extra: {
    //             action,
    //             state: store.getState()
    //         }
    //     })
    //     throw err
    // }
}

export default RedirectIfAuthenticated