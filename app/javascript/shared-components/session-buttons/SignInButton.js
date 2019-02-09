import React from 'react'

const SignInButton = props => {

    if (props.withBadge) {

        return (

            <a className={props.classList} href="/users/auth/facebook">Log In / Sign Up with <span className={props.badgeClassList}><i className="fab fa-facebook-f"></i></span></a>
    
        );

    }

    else {

        return (

            <a className={props.classList} href="/users/auth/facebook">Log In / Sign Up with Facebook</a>
    
        );

    }

}

export default SignInButton;


