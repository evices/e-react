import AuthService from "./server";
import React from 'react';
import { If } from 'react-if';
import axios from 'axios'


const user = JSON.parse(localStorage.getItem("user"));
let url = "https://evices-react.herokuapp.com";

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




export const register = (username, email, password, role, phone, fullname) => (dispatch) => {

    console.log('user', username, email, password, role, phone, fullname)


    return AuthService.register(username, email, password, role, phone, fullname).then(
        (response) => {
            dispatch({
                type: "REGISTER_SUCCESS",
            });

            // dispatch({
            //   type: SET_MESSAGE,
            //   payload: response.data.message,0
            // });
            return response;
            // return Promise.resolve();
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

            return error.response;
        }
    );
};

export const login = (username, password) => (dispatch) => {
    console.log('user', username, password)
    return AuthService.login(username, password).then(
        (data) => {
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: { user: data },
            });

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
                type: "LOGIN_FAIL",
            });

            // dispatch({
            //   type: SET_MESSAGE,
            //   payload: message,
            // });

            return error.response;
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: "LOGOUT",
    });
};

export const uploadImage = (file) => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    };

    let data = new FormData();

    data.append('photo', file);
    return axios
    .post(`${url}/upload`, data, config)
    .then(res => {
        console.log('>>>>>>>', res.data)
        return res.data;
        // if(res.data.message==='This job already booked and approved') dispatch(showsaggestion(res.data.message))
    })
    .catch((error) => console.log(error.response));


}
export const editeProfile = (userData, userForm, userImage) => {
    console.log('userData:',userForm)
    const config = {
        headers: {
            Authorization: `Bearer ${userForm.token}`,
        }
    };

    let user_image = userImage ? `${url}/${userImage}` : userForm.user.user_image;

    let data = {
        "fullname": userData.fullname,
        "phone": userData.phone,
        "email": userData.email,
        "user_image": user_image
    }

    console.log('data>>', data);
    return axios
        .put(`${url}/user/${userForm.user._id}`, data, config)
        .then(res => {
            console.log('>>>>>>>', res.data)
            let newData = {
                "token": userForm.token,
                "user": res.data
            }

            localStorage.setItem("user", JSON.stringify(newData));
            return res.data;
        })
        .catch((error) => console.log(error.response));

}

export const addAddress = (addressData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    };
    let data = {
        "$push": {
            "address": {
            "address": addressData.addresses,
            "phone": addressData.phoneAddresses
            }
        }
    };

    console.log('?????????????',data);
    return axios
    .patch(
        `${url}/user/${user.user._id}`, data, config)
    .then(res => {
        // let newData = {
        //     "token": user.token,
        //     "user": res.data
        // }

        // localStorage.setItem("user", JSON.stringify(newData));
    })
    .catch(error => console.log(error.response.data));
}


