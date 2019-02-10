import React from 'react'

class SideNavButton extends React.Component {

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

        if (this.state.clickSonar.x) {

            console.log('WAITING .5s THEN CALLING PARENT COMPONENT METHOD TO RENDER LOADER AND REDIRECT');

            setTimeout(() => {
                
                if (this.props.currentComponent !== this.props.componentIndex) {

                    this.props.updateDash(this.props.componentIndex);

                } 

                this.setState({clickSonar: { x: null, y: null }});

            }, 500);

        }


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

        console.log('CLICK SIDE NAV BUTTON');

        // 1) this.state.clickSonar.x will be falsey on the initial render so just
        //    render a normal button.

        if (!this.state.clickSonar.x) {

            return (

                <li onClick={this.handleClick} className={`list-group-item ${this.props.currentComponent === this.props.componentIndex ? 'selected-dash-component' : '' }`}>

                    <span>{this.props.itemInfo.navText}</span>
    
                </li>

            );

        }

        // 3) After calling setState with our updated coordinate values, this.state.clickSonar.x will 
        //    be truthy. In this case, rerender the component like before EXCEPT it  will have an extra 
        //    div inside it with an inline style attribute that is set to reflect a left and top 
        //    positioning based  on the coordinates in state. CSS will handle that sonar effect animation thingy.

        else {

            console.log('RERENDERING WITH SONAR DIV');

            return (

                <li className='list-group-item'>
            
                    <span>{this.props.itemInfo.navText}</span>

                    <div className="click-sonar2" style={{ left: this.state.clickSonar.x, top: this.state.clickSonar.y}}></div>
                
                </li>
        
            );

        }
    
    }

}

export default SideNavButton;


