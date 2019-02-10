import React from 'react'
import SignInButton from 'shared-components/session-buttons/SignInButton'
import JumbotronHeader from './JumbotronHeader'

class SignInJumbotron extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            transitioning: false,
            initiateRedirect: false
        }
        this.redirecting = false;
        this.redirected = false;
        this.switchToTransition = this.switchToTransition.bind(this);
    }

    componentDidUpdate() {

        if (this.state.transitioning && !this.redirecting) {

            this.redirecting = true;

            setTimeout(() => this.setState({ transitioning: false, initiateRedirect: true }), 1000);
            

        }

        else {

            if (!this.redirected) {

                this.redirected = true;

                setTimeout(() => {

                    window.location.href = this.props.redirectLink;
    
                }, 1000);

            }            
        }

    }

    switchToTransition() {

        this.setState({ transitioning: true, initiateRedirect: false });

    }

    render() {

        if (!this.state.initiateRedirect && !this.redirecting) {

            return ( 

                <div className={`jumbotron ${this.state.transitioning ? 'fade-out' : 'fade-in'}`}>
                    <JumbotronHeader />
                    <ul>
                        <li>Make gifs of yourself.</li>
                        <li>Map them to your favorite emojis.</li>
                        <li>Send to friends via FB messanger.</li>
                    </ul>
                    <SignInButton 
                        redirectMethod={this.switchToTransition} 
                        classList={'btn sign-in-btn-landing'} 
                    />
                </div>
    
            );

        }        

        else {

           return (
                
                <div className="spinner-fade spinner-container">
                    <span className="spinner-border text-light" role="status" aria-hidden="true"></span>
                </div>
            
            );

        }

    }

}

export default SignInJumbotron;