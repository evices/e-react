import AuthService from "./server";
// import { If } from 'react-if';

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };


export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "REGISTER_SUCCESS":
            return {
                ...state,
                isLoggedIn: false,
            };
        case "REGISTER_FAIL":
            return {
                ...state,
                isLoggedIn: false,
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            };
        case "LOGIN_FAIL":
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
};




export const register = (username, email, password) => (dispatch) => {
    console.log('user',username,email,password)

    return AuthService.register(username, email, password).then(
        (response) => {
            dispatch({
                type: "REGISTER_SUCCESS",
            });

            // dispatch({
            //   type: SET_MESSAGE,
            //   payload: response.data.message,0
            // });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: "REGISTER_FAIL",
            });

            // dispatch({
            //   type: SET_MESSAGE,
            //   payload: message,
            // });

            return Promise.reject();
        }
    );
};

export const login = (username, password) => (dispatch) => {
    console.log('user',username,password)
    return AuthService.login(username, password).then(
        (data) => {
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: { user: data },
            });

            return Promise.resolve();
        },
        (error) => {
            // const message =
            //     (error.response &&
            //         error.response.data &&
            //         error.response.data.message) ||
            //     error.message ||
            //     error.toString();

            dispatch({
                type: "LOGIN_FAIL",
            });

            // dispatch({
            //   type: SET_MESSAGE,
            //   payload: message,
            // });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: "LOGOUT",
    });
};

// export const Auth =()=>(prpos){
//let ok=(state.isLoggedIn) &&  (this.props.capability?state.user.user.capabilities.includes(this.props.capability):true);
// return (
//     <If condition={ok}>
//       <div>{this.props.children}</div>
//     </If>
//   )  
// }

