import React from 'react'

class SignInButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clickSonar: { x: null, y: null }
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate() {
        
        // 4) After the rerender, let's wait the duration of the animation and 
        //    call a method from out parent component we recieved via props
        //    that will rerender the parent component with a loading animation and 
        //    initiate the oAuth redirect, passing to it the oAuth path¸
        console.log('WAITING .5s THEN CALLING PARENT COMPONENT METHOD TO RENDER LOADER AND REDIRECT');

        setTimeout(() => this.props.redirectMethod(), 500);

    }

    handleClick(e) {

        // 2) When the button we initially rendered gets clicked we can calculate the position of the click,
        //    assign the coordinates to variables and update state with those variables.

        console.log('REGISTERING CLICK');

        const rect = e.currentTarget.getBoundingClientRect();

        const newClickSonarCoords = {
            clickSonar: {
                x: `${((e.clientX - rect.left) / e.currentTarget.offsetWidth) * 100}%`,
                y: `${((e.clientY - rect.top) / e.currentTarget.offsetHeight) * 100}%`
            }
        };

        this.setState(newClickSonarCoords);
         
    }

    render() {

        // 1) this.state.clickSonar.x will be falsey on the initial render so just
        //    render a normal button.

        if (!this.state.clickSonar.x) {

            return (

                <button onClick={this.handleClick} className={this.props.classList}>

                    <span className="sign-in-btn-text">Log In / Sign Up with Facebook</span>

                </button>

            );

        }

        // 3) After calling setState with our updated coordinate values, this.state.clickSonar.x will 
        //    be truthy. In this case, rerender the component like before EXCEPT it  will have an extra 
        //    div inside it with an inline style attribute that is set to reflect a left and top 
        //    positioning based  on the coordinates in state. CSS will handle that sonar effect animation thingy.

        else {

            console.log('RERENDERING WITH SONAR DIV');

            return (

                <button className={this.props.classList} disabled={true}>
                
                    <span className="sign-in-btn-text-normal sign-in-btn-text">Log In / Sign Up with Facebook</span>

                    <div className="click-sonar" style={{ left: this.state.clickSonar.x, top: this.state.clickSonar.y}}></div>
                
                </button>
        
            );

        }
    
    }

}

export default SignInButton;


