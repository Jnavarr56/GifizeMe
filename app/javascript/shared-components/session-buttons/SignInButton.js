import React from 'react'

class SignInButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clickSonar: { x: null, y: null },
            oAuthLink: { link: '/users/auth/facebook', clicked: false }
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate() {
        
        
        if (this.state.clickSonar.x && !this.state.oAuthLink.clicked) {

            setTimeout(() => {

                console.log('RESETTING STATE WITHOUT SONAR DIV AND MARKING THAT THE BUTTON HAS BEEN CLICKED');
                
                this.setState({
                    
                    clickSonar: { x: null, y: null },
                    oAuthLink: { link: '/users/auth/facebook', clicked: true }

                });
            
            }, 500);
    
        }

        if (this.state.oAuthLink.clicked) {

            console.log('REDIRECTING TO FACEBOOK OAUTH');

            window.location.href = this.state.oAuthLink.link;
            
        }

    }

    handleClick(e) {

        console.log('REGISTERING CLICK');

        const rect = e.currentTarget.getBoundingClientRect();

        const newClickSonarCoords = {...this.state};
        newClickSonarCoords.clickSonar.x = `${((e.clientX - rect.left) / e.currentTarget.offsetWidth) * 100}%`;
        newClickSonarCoords.clickSonar.y = `${((e.clientY - rect.top) / e.currentTarget.offsetHeight) * 100}%`;

        this.setState(newClickSonarCoords);
         
    }

    render() {

        if (!this.state.clickSonar.x && !this.state.oAuthLink.clicked) {

            return (

                <button onClick={this.handleClick} className={this.props.classList}>

                    <span className="sign-in-btn-text">Log In / Sign Up with Facebook</span>

                </button>

            );

        }

        if (this.state.clickSonar.x && !this.state.oAuthLink.clicked) {

            console.log('RERENDERING WITH SONAR DIV');

            return (

                <button onClick={this.handleClick} className={this.props.classList}>
                
                    <span className="sign-in-btn-text-normal sign-in-btn-text">Log In / Sign Up with Facebook</span>

                    <div className="click-sonar" style={{ left: this.state.clickSonar.x, top: this.state.clickSonar.y}}></div>
                
                </button>
        
            );

        }

        if (this.state.oAuthLink.clicked) {

            console.log('RERENDERING WITH LOADER');

            return (

                <span className="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>
                
            );

        }
    
    }

}

export default SignInButton;


