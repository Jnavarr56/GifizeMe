import React from 'react'
import Navbar from 'shared-components/navbar/Navbar'
import SignInButton from 'shared-components/session-buttons/SignInButton'

class SignIn extends React.Component {

    render () {

        return (

            <React.Fragment>
                <Navbar signedIn={this.props.sessionStatus} route={this.props.location.pathname}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="jumbotron">
                            <h1 className="display-4">Welcome to GifizeMe.</h1>
                            <SignInButton withBadge={false} classList={'btn sign-in-btn-landing'} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        );

    }

}

export default SignIn;


