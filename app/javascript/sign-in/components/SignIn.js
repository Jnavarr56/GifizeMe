import React from 'react'
import Navbar from 'shared-components/navbar/Navbar'
import SignInJumbotron from './SignInJumbotron'

class SignIn extends React.Component {

    render () {

        return (

            <React.Fragment>
                <Navbar signedIn={this.props.sessionStatus} linkPath={this.props.location.pathname}/>
                <div className="container-fluid">
                    <div className="row">
                        <SignInJumbotron redirectLink = {'/users/auth/facebook'}/>
                    </div>
                </div>
            </React.Fragment>
            
        );

    }

}

export default SignIn;


