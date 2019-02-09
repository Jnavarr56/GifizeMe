import React from 'react'

const SignOutButton = props => {

    return <a className={props.classList} rel="nofollow" data-method="delete" href="/users/sign_out">{props.text}</a>;

}

export default SignOutButton;