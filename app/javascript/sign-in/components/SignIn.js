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
                            <SignInButton withBadge={false} classList={'btn btn-info'} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        
        );

    }

}

export default SignIn;


