import React from 'react'

class SignIn extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div>This is the sign in page!</div>
                <a className="btn btn-primary btn-sign-up" href="/users/auth/facebook">Sign in with <span className="badge badge-light"><i className="fab fa-facebook-f"></i></span></a>
            </React.Fragment>
        );
    }
}

export default SignIn;


