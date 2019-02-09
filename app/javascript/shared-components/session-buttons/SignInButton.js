import React from 'react'

class SignInButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clickSonar: { x: null, y: null },
            oAuthLink: '/users/auth/facebook'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate() {
        
        
        if (this.state.clickSonar.x) {

            setTimeout(() => {
            
                this.setState({clickSonar: { x: null, y: null }});
            
            }, 500);
    
        }

    }

    handleClick(e) {

        const rect = e.currentTarget.getBoundingClientRect();

        const newClickSonarCoords = {...this.state};
        newClickSonarCoords.clickSonar.x = `${((e.clientX - rect.left) / e.currentTarget.offsetWidth) * 100}%`;
        newClickSonarCoords.clickSonar.y = `${((e.clientY - rect.top) / e.currentTarget.offsetHeight) * 100}%`;

        this.setState(newClickSonarCoords);
         
    }

    render() {

            if (this.state.clickSonar.x) {

                return (

                    <button onClick={this.handleClick} className={this.props.classList}>
                    
                        <span>Log In / Sign Up with Facebook</span>

                        <div className="click-sonar" style={{ left: this.state.clickSonar.x, top: this.state.clickSonar.y}}></div>
                    
                    </button>
            
                );

            }
            
            else {

                return (

                    <button onClick={this.handleClick} className={this.props.classList}>

                        <span>Log In / Sign Up with Facebook</span>

                    </button>

                );

            }

    }

}

export default SignInButton;


