import AuthService from "./server";
import React from 'react';
import { If } from 'react-if';

const user = JSON.parse(localStorage.getItem("user"));
let isAuth = false;

const initialState = isAuth ? true : false;


export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "IS_AUTH":
            return {

                state: true,
            };

        default:
            return state;
    }
};




export const Auth = (props) => {
    console.log('insideauth', props)
    let ok = user.user.capabilities.includes(props.capability) ? true : false
    // let ok = (props.capability ? user.user.capabilities.includes(props.capability) : true);
    console.log('ok', ok)

    return (
        <If condition={ok}>
            <div>{props.children}</div>
        </If>)
    // ) (data) => {
    // return ok.then(
    //     (response) => {
    //         console.log(response)
    //         // dispatch({
    //         //     type: "IS_AUTH",
    //         //     payload: { isAuth: response },
    //         // });


    //         // return Promise.resolve();
    //     },
    // )

}
