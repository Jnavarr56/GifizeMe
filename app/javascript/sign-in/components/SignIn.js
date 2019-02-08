import React from 'react'
import Navbar from 'shared-components/Navbar'

class SignIn extends React.Component {

    render () {

        return (

            <React.Fragment>
                <Navbar signedIn={this.props.sessionStatus} route={this.props.location.pathname}/>
                <div>This is the sign in page!</div>
                <a className="btn btn-primary btn-sign-up" href="/users/auth/facebook">Sign in with <span className="badge badge-light"><i className="fab fa-facebook-f"></i></span></a>
            </React.Fragment>
        
        );

    }

}

export default SignIn;


